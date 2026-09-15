import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Quote,
  Star,
  ArrowRight,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

interface TestimonialItem {
  id: string | number;
  name: string;
  image: string;
  rating: number;
  treatment: string;
  category: string;
  quote: string;
  date: string;
  doctor: string;
  highlight: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Ananya Singh",
    image: "/images/testimonials/patient-ananya.jpg",
    rating: 5,
    treatment: "Teeth Whitening",
    category: "Whitening",
    quote:
      "I had my teeth whitening treatment at Prism Dental, and I couldn't be happier! The results are amazing, completely painless, and the staff is so warm and professional. Highly recommended!",
    date: "12 Aug 2025",
    doctor: "Dr. Priya Sharma",
    highlight: "3 Shades Whiter in 45 Mins",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    image: "/images/testimonials/patient-rohit.jpg",
    rating: 5,
    treatment: "Dental Implants",
    category: "Implants",
    quote:
      "The implant procedure was completely smooth and painless. Dr. Rajesh explained the 3D scan clearly, and now I have a permanent natural bite. Thank you, Prism Dental!",
    date: "05 Aug 2025",
    doctor: "Dr. Rajesh Gupta",
    highlight: "Titanium Precision Fit",
  },
  {
    id: 3,
    name: "Pooja Mehta",
    image: "/images/testimonials/patient-pooja.jpg",
    rating: 5,
    treatment: "Braces & Aligners",
    category: "Orthodontics",
    quote:
      "I got my clear aligners here and the journey was seamless. The digital smile preview matched the actual results. My teeth alignment looks so natural and confident now!",
    date: "28 Jul 2025",
    doctor: "Dr. Priya Sharma",
    highlight: "Invisible Aligner Comfort",
  },
  {
    id: 4,
    name: "Amit Verma",
    image: "/images/testimonials/patient-amit.jpg",
    rating: 5,
    treatment: "Root Canal",
    category: "Root Canal",
    quote:
      "I was terrified of getting a root canal, but the experience was completely comfortable and zero pain. Dr. Amit and the nursing team were gentle and caring. Outstanding medical rigor!",
    date: "20 Jul 2025",
    doctor: "Dr. Amit Roy",
    highlight: "Single-Visit Painless RCT",
  },
  {
    id: 5,
    name: "Sneha Patel",
    image: "/images/testimonials/patient-sneha.jpg",
    rating: 5,
    treatment: "Cosmetic Dentistry",
    category: "Cosmetic",
    quote:
      "The smile makeover gave me the confidence I needed for my career. The porcelain veneers look completely natural. The clinic has 5-star hygiene and hospital-grade sterilization!",
    date: "12 Jul 2025",
    doctor: "Dr. Priya Sharma",
    highlight: "Natural Porcelain Veneers",
  },
  {
    id: 6,
    name: "Karan Malhotra",
    image: "/images/testimonials/patient-karan.jpg",
    rating: 5,
    treatment: "General Dentistry",
    category: "General",
    quote:
      "Great experience from first consultation to cleaning. Upfront pricing, no hidden costs, and genuine doctor advice. This is hands down the most trustworthy dental clinic in Kota!",
    date: "02 Jul 2025",
    doctor: "Dr. Rajesh Gupta",
    highlight: "Strict Class-B Sterilization",
  },
];

const CATEGORIES = [
  "All Stories",
  "Whitening",
  "Implants",
  "Orthodontics",
  "Root Canal",
  "Cosmetic",
];

// ─────────────────────────────────────────────────────────────────────────────
// STAR RATING HELPER
// ─────────────────────────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]"
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE REVIEW CARD
// ─────────────────────────────────────────────────────────────────────────────
function ReviewCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="group relative bg-white rounded-2xl sm:rounded-3xl border border-[#D9ECF0] p-5 sm:p-6 shadow-[0_4px_20px_rgba(8,50,88,0.04)] hover:shadow-[0_16px_36px_rgba(10,173,168,0.12)] hover:border-[#0AADA8]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Decorative top-right quote watermark */}
      <div className="absolute -top-3 -right-2 text-[#0AADA8]/8 select-none pointer-events-none group-hover:text-[#0AADA8]/16 transition-colors">
        <Quote className="w-20 h-20 rotate-12" />
      </div>

      <div>
        {/* Top bar: Avatar + Patient Details + Rating */}
        <div className="flex items-start gap-3.5 mb-4 relative z-10">
          {/* Avatar with verified badge */}
          <div className="relative shrink-0">
            <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-[#0AADA8]/25 group-hover:ring-[#0AADA8] transition-all shadow-xs bg-[#E8F8F8] flex items-center justify-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={`${item.name} - verified patient review`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <span className="text-base font-extrabold text-[#0AADA8]">
                  {item.name?.charAt(0) || "P"}
                </span>
              )}
            </div>
            {/* Verified Patient Check Badge */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0AADA8] text-white flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-3 h-3" />
            </div>
          </div>

          {/* Name + Treatment Pill + Star Rating */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <h4 className="text-sm sm:text-[15px] font-extrabold text-[#083258] leading-tight truncate">
                {item.name}
              </h4>
               
            </div>

            <div className="flex items-center gap-2 mt-1">
              <Stars count={item.rating} />
              <span className="text-[11px] font-bold text-[#F59E0B]">5.0</span>
            </div>

            <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#E6F8F8] border border-[#0AADA8]/20 text-[#0AADA8] text-[10px] font-extrabold uppercase tracking-wider">
                {item.treatment}
              </span>
            </div>
          </div>
        </div>

        {/* Clinical Highlight / Key Result Pill */}
        <div className="mb-3.5 px-3 py-1.5 rounded-xl bg-[#F4F9FB] border border-[#E2EEF2] flex items-center gap-2 text-xs text-[#083258] font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#0AADA8] shrink-0" />
          <span className="text-[11.5px] truncate">{item.highlight}</span>
        </div>

        {/* Quote Content */}
        <div className="relative mb-4">
          <p className="text-xs sm:text-[13px] text-[#4C6D87] leading-relaxed italic">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Card Footer: Doctor treated by + Date */}
      <div className="pt-3 border-t border-[#EEF6F8] flex items-center justify-between text-[11px] text-[#7896AC]">
        <span className="font-medium text-[#083258]/80">
          Treated by: <strong className="text-[#0AADA8] font-bold">{item.doctor}</strong>
        </span>
        <span className="font-medium">{item.date}</span>
      </div>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN TESTIMONIALS GRID COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function TestimonialsGrid({
  onOpenShareModal,
}: {
  onOpenShareModal?: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [allReviews, setAllReviews] = useState<TestimonialItem[]>(TESTIMONIALS);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const backendItems: TestimonialItem[] = data.map((d: any) => ({
            id: d.id,
            name: d.patient_name || d.name,
            image: d.image_url || d.image || "",
            rating: d.rating || 5,
            treatment: d.treatment || "General Dental Care",
            category: d.category || "General",
            quote: d.comment || d.quote || "",
            date: d.review_date || d.date || "Recent",
            doctor: d.doctor || "Prism Dental Specialists",
            highlight: d.highlight || "Verified Patient Feedback",
          }));

          setAllReviews((prev) => {
            const backendIds = new Set(backendItems.map((b) => String(b.id)));
            const remaining = prev.filter((p) => !backendIds.has(String(p.id)));
            return [...backendItems, ...remaining];
          });
        }
      })
      .catch((err) => console.warn("Failed to load testimonials:", err));
  }, []);

  const filteredTestimonials =
    activeCategory === "All Stories"
      ? allReviews
      : allReviews.filter((item) =>
          activeCategory === "General"
            ? item.category === "General" || !item.category
            : item.category === activeCategory ||
              item.treatment?.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <section className="w-full bg-gradient-to-b from-[#F8FDFF] via-white to-[#F2FAFC] py-6 sm:py-8 lg:py-12 relative overflow-hidden" aria-label="Patient testimonials">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute -top-24 left-1/3 w-[500px] h-[300px] bg-[#0AADA8]/6 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-[#083258]/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 sm:mb-10">

          {/* Left: label + heading + description */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-[#0AADA8] uppercase mb-2 px-3 py-1 rounded-full bg-[#E6F8F8] border border-[#0AADA8]/20">
              <Sparkles className="w-3.5 h-3.5" />
              Our Patients&apos; Testimonials
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#083258] tracking-tight leading-tight mb-2.5">
              Real People. Real Experiences.
            </h2>

            <p className="text-xs sm:text-sm text-[#55738E] leading-relaxed max-w-lg">
              We are proud to have transformed thousands of smiles with gentle, doctor-led care. Read firsthand experiences from our verified patients.
            </p>
          </div>

          {/* Right: Google & Clinical Trust Scorecard + Write Review Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <div className="flex items-center gap-4 bg-white border border-[#D5ECF0] rounded-2xl p-4 shadow-[0_4px_20px_rgba(8,50,88,0.05)]">
              {/* Rating Big Number */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#083258] to-[#0AADA8] text-white flex flex-col items-center justify-center shrink-0 shadow-sm">
                <span className="text-lg font-black leading-none">4.9</span>
                <span className="text-[10px] font-semibold text-teal-200 mt-0.5">/ 5.0</span>
              </div>

              {/* Stars + Verified Review Info */}
              <div>
                <div className="flex items-center gap-1.5">
                  <Stars count={5} />
                  <span className="text-xs font-bold text-[#083258]">500+ Reviews</span>
                </div>
                <p className="text-[11.5px] font-medium text-[#0AADA8] mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Verified Patients
                </p>
                <span className="text-[10.5px] text-[#7896AC] block">
                  Google &amp; Practo Dental Clinic
                </span>
              </div>
            </div>

            {onOpenShareModal && (
              <button
                onClick={onOpenShareModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#083258] to-[#0AADA8] hover:from-[#0AADA8] hover:to-[#083258] text-white text-xs font-bold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#16C4BE]" />
                <span>Share Your Experience</span>
              </button>
            )}
          </div>

        </div>

        {/* ── INTERACTIVE CATEGORY FILTER TABS ───────────────────────────── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 scrollbar-none">
          {CATEGORIES.map((category) => {
            const count =
              category === "All Stories"
                ? allReviews.length
                : allReviews.filter((t) => t.category === category).length;

            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#0AADA8] text-white shadow-sm shadow-[#0AADA8]/30 scale-102"
                    : "bg-white text-[#52687F] hover:text-[#083258] hover:bg-[#EAF6F8] border border-[#D9ECF0]"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#F0F6F8] text-[#55738E]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── REVIEWS GRID ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTestimonials.map((item) => (
            <ReviewCard key={item.id} item={item} />
          ))}
        </div>

        {/* ── BOTTOM SATISFACTION STRIP & CTA ─────────────────────────────── */}
        <div className="mt-10 sm:mt-12 rounded-2xl bg-white border border-[#D5ECF0] p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-11 h-11 rounded-xl bg-[#E6F8F8] border border-[#0AADA8]/25 flex items-center justify-center text-[#0AADA8] shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#083258]">
                Ready for Your Own Smile Transformation?
              </h4>
              <p className="text-xs text-[#55738E] mt-0.5">
                Join over 12,000+ happy smiles with a personal diagnosis and 3D consultation.
              </p>
            </div>
          </div>

          <Link
            href="/appointment"
            className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book Smile Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default TestimonialsGrid;
