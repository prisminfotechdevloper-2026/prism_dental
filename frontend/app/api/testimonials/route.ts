import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.BACKEND_API_URL || "http://127.0.0.1:8000/api/testimonials/";

// Fallback in-memory storage if Django is temporarily unreachable
let fallbackTestimonials: any[] = [];

export async function GET(request: NextRequest) {
  try {
    const res = await fetch(BACKEND_URL, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch (err) {
    console.warn("Backend unreachable, using fallback/cached testimonials:", err);
  }

  // If backend is not available, return combined fallback
  return NextResponse.json(fallbackTestimonials);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Format for Django Testimonial model
    const payload = {
      patient_name: body.patient_name || body.name || "Anonymous Patient",
      treatment: body.treatment || "General Dental Consultation",
      category: body.category || "General",
      rating: Number(body.rating) || 5,
      comment: body.comment || body.description || "",
      review_date:
        body.review_date ||
        new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      image_url: body.image_url || body.image || "",
      doctor: body.doctor || "Dr. Priya Sharma",
      highlight: body.highlight || "Verified Patient Review",
      verified: true,
      featured: false,
    };

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const created = await res.json();
        return NextResponse.json(created, { status: 201 });
      } else {
        const errData = await res.text();
        console.error("Backend error response:", errData);
      }
    } catch (backendError) {
      console.warn("Could not reach Django backend directly, saving to memory fallback:", backendError);
    }

    // Fallback saving
    const fallbackItem = {
      ...payload,
      id: Date.now(),
      created_at: new Date().toISOString(),
    };
    fallbackTestimonials.unshift(fallbackItem);
    return NextResponse.json(fallbackItem, { status: 201 });
  } catch (error: any) {
    console.error("Failed to process testimonial creation:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to submit testimonial" },
      { status: 500 }
    );
  }
}
