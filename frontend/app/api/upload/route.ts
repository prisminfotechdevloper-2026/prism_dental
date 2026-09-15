import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name:
    process.env.cloudName ||
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
    "lmli8f1h",
  api_key:
    process.env.apikey ||
    process.env.CLOUDINARY_API_KEY ||
    "691892666744782",
  api_secret:
    process.env.api_secret ||
    process.env.CLOUDINARY_API_SECRET ||
    "ZyPwwPLYwzwcl-GMmYLJgU-U2x4",
  secure: true,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<{ secure_url: string; public_id: string }>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "prism_dental/patient_reviews",
            resource_type: "image",
            transformation: [
              { width: 400, height: 400, crop: "fill", gravity: "face" },
              { quality: "auto", fetch_format: "auto" },
            ],
          },
          (error, res) => {
            if (error || !res) {
              reject(error || new Error("Failed to upload image to Cloudinary"));
            } else {
              resolve({
                secure_url: res.secure_url,
                public_id: res.public_id,
              });
            }
          }
        );
        uploadStream.end(buffer);
      }
    );

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error: any) {
    console.error("Cloudinary upload failed:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to upload image to Cloudinary" },
      { status: 500 }
    );
  }
}
