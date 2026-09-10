"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle2,
  CalendarDays,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const CATEGORIES = ["All Reviews", "Dental Implants", "Root Canal", "Clear Aligners", "Teeth Whitening", "Kids Dentistry"];

const REVIEWS = [
  {
    name: "Vikramjit Singh",
    location: "Vasant Vihar, New Delhi",
    treatment: "Dental Implants",
    category: "Dental Implants",
    rating: 5,
    date: "2 weeks ago",
    title: "Completely pain-free implant surgery!",
    text: "I was extremely anxious about dental implants after a bad experience elsewhere years ago. Dr. Vikram Mehta explained the 3D plan thoroughly. The entire surgery was done with zero pain, and within 3 months I had my permanent zirconia teeth. I can finally eat almonds and apples without fear!",
    verified: true,
  },
  {
    name: "Pooja Deshmukh",
    location: "DLF Phase 5, Gurgaon",
    treatment: "Clear Aligners",
    category: "Clear Aligners",
    rating: 5,
    date: "1 month ago",
    title: "Amazing transformation in just 8 months",
    text: "As a corporate consultant, I couldn't imagine having visible metal brackets. Dr. Ananya prescribed custom 3D aligners. They were completely invisible during my Zoom meetings and client pitches! My crowded front teeth are now perfectly straight. Highly recommended!",
    verified: true,
  },
  {
    name: "Arunav Saxena",
    location: "Sector 62, Noida",
    treatment: "Single-Sitting RCT",
    category: "Root Canal",
    rating: 5,
    date: "3 weeks ago",
    title: "Single sitting root canal was like magic",
    text: "Had excruciating molar pain on a Friday night. I called their 24/7 emergency line and was scheduled first thing Saturday morning. Dr. Rajesh finished the entire root canal in just 55 minutes without a speck of pain. The relief was immediate.",
    verified: true,
  },
  {
    name: "Radhika Batra",
    location: "Greater Kailash, Delhi",
    treatment: "Teeth Whitening",
    category: "Teeth Whitening",
    rating: 5,
    date: "2 months ago",
    title: "Ready for my wedding day with sparkling teeth",
    text: "Got laser teeth whitening done two weeks before my wedding ceremonies. The treatment took under an hour, gave me 7 shades whiter teeth, and caused zero tooth sensitivity. The clinic hygiene and ambiance is like a 5-star hotel.",
    verified: true,
  },
  {
    name: "Siddharth & Tanya Roy",
    location: "Indirapuram, Ghaziabad",
    treatment: "Pediatric Dental Care",
    category: "Kids Dentistry",
    rating: 5,
    date: "1 month ago",
    title: "My 6-year-old daughter actually loves her dentist now!",
    text: "Dr. Meera is a blessing for parents. She was so playful and gentle with my daughter that she didn't even notice the small cavity filling being done. She got a little bravery medal and left the clinic with a huge smile.",
    verified: true,
  },
  {
    name: "Harish Chandra Verma",
    location: "South Extension, Delhi",
    treatment: "Full Mouth Rehabilitation",
    category: "Dental Implants",
    rating: 5,
    date: "3 months ago",
    title: "Gave me back 20 years of my life",
    text: "At 68, I had lost multiple back teeth and struggled to chew food properly. The team at SmileCare planned a complete rehabilitation with implants and bridges. Their transparent estimate had zero hidden costs. Excellent doctors.",
    verified: true,
  },
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("All Reviews");

  const filtered = activeCategory === "All Reviews"
    ? REVIEWS
    : REVIEWS.filter((r) => r.category === activeCategory);

  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Verified Patient Feedback
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083258] tracking-tight">
            Patient Stories & Reviews
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#426480]">
            Over 14,000 satisfied patients have trusted SmileCare Dental Clinic. Here is what they have to say about our doctors and treatments.
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="max-w-4xl mx-auto mb-12 rounded-3xl border border-[#D5ECF0] bg-white p-6 sm:p-8 shadow-[0_4px_25px_rgba(8,50,88,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#D5ECF0]">
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-[#083258]">4.9</span>
              <div className="flex items-center gap-1 text-[#F59E0B] my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B]" />
                ))}
              </div>
              <span className="text-xs text-[#6B8BA2] font-semibold">Based on 1,420+ Reviews</span>
            </div>

            <div className="px-4 py-2 space-y-1.5 text-xs text-[#426480]">
              <div className="flex items-center justify-between">
                <span>Painless Experience</span>
                <span className="font-bold text-[#083258]">99.6%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Doctor Friendliness</span>
                <span className="font-bold text-[#083258]">99.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cleanliness & Hygiene</span>
                <span className="font-bold text-[#083258]">100%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Value for Money</span>
                <span className="font-bold text-[#083258]">98.9%</span>
              </div>
            </div>

            <div className="px-4 flex flex-col items-center md:items-start justify-center space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0AADA8]">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Verified Patients</span>
              </div>
              <p className="text-xs text-[#426480]">
                All reviews are independently authenticated from patient clinical follow-ups.
              </p>
              <Link
                href="/appointment"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#026EB9] hover:text-[#0AADA8]"
              >
                <span>Book Your Visit Today</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#0AADA8] text-white shadow-sm"
                  : "bg-white border border-[#D5ECF0] text-[#426480] hover:border-[#0AADA8]/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#D5ECF0] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(8,50,88,0.04)] flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#6B8BA2]">{item.date}</span>
                </div>

                <h3 className="text-base font-bold text-[#083258] mb-2">
                  &ldquo;{item.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-[#426480] leading-relaxed italic">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D5ECF0]/60 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#083258]">{item.name}</span>
                    {item.verified && (
                      <span title="Verified Patient">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0AADA8]" />
                      </span>
                    )}
                  </div>
                  <span className="text-[10.5px] text-[#6B8BA2] block">{item.location}</span>
                </div>
                <span className="text-[10.5px] font-bold text-[#026EB9] bg-[#EBF4FB] px-2.5 py-1 rounded-full">
                  {item.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
