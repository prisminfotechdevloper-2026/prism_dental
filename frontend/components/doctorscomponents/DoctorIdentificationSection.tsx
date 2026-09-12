"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";



// ─────────────────────────────────────────────────────────────────────────────
// TYPES & DATA
// ─────────────────────────────────────────────────────────────────────────────

type DoctorCategory =
  | "All"
  | "Prosthodontist"
  | "Orthodontist"
  | "Endodontist"
  | "Oral Surgeon"
  | "Periodontist"
  | "Pediatric";

interface Doctor {
  id: string;
  name: string;
  category: Exclude<DoctorCategory, "All">;
  specialty: string;
  degree: string;
  experience: string;
  rating: number;
  reviewCount: number;
  languages: string[];
  image: string;
  available: boolean;
}

const DOCTORS: Doctor[] = [
  {
    id: "dr-rohan-mehta",
    name: "Dr. Rohan Mehta",
    category: "Prosthodontist",
    specialty: "Prosthodontics",
    degree: "BDS, MDS (Prosthodontics)",
    experience: "15+ Yrs",
    rating: 5,
    reviewCount: 312,
    languages: ["English", "Hindi", "Marathi"],
    image: "/images/doctors/doctor-rahul.jpg",
    available: true,
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    category: "Orthodontist",
    specialty: "Orthodontics",
    degree: "BDS, MDS (Orthodontics)",
    experience: "10+ Yrs",
    rating: 5,
    reviewCount: 241,
    languages: ["English", "Hindi"],
    image: "/images/doctors/doctor-priya.jpg",
    available: true,
  },
  {
    id: "dr-amit-verma",
    name: "Dr. Amit Verma",
    category: "Endodontist",
    specialty: "Endodontics",
    degree: "BDS, MDS (Endodontics)",
    experience: "8+ Yrs",
    rating: 5,
    reviewCount: 198,
    languages: ["English", "Hindi", "Gujarati"],
    image: "/images/doctors/doctor-amit.jpg",
    available: true,
  },
  {
    id: "dr-rajesh-patel",
    name: "Dr. Rajesh Patel",
    category: "Oral Surgeon",
    specialty: "Oral Surgery",
    degree: "BDS, MDS (Oral Surgery)",
    experience: "12+ Yrs",
    rating: 5,
    reviewCount: 278,
    languages: ["English", "Hindi", "Gujarati"],
    image: "/images/doctors/doctor-rajesh.png",
    available: false,
  },
  {
    id: "dr-sneha-joshi",
    name: "Dr. Sneha Joshi",
    category: "Periodontist",
    specialty: "Periodontology",
    degree: "BDS, MDS (Periodontology)",
    experience: "7+ Yrs",
    rating: 5,
    reviewCount: 163,
    languages: ["English", "Hindi", "Kannada"],
    image: "/images/doctors/doctor-sneha.jpg",
    available: true,
  },
  {
    id: "dr-vinita-singh",
    name: "Dr. Vinita Singh",
    category: "Pediatric",
    specialty: "Pediatric Dentistry",
    degree: "BDS, MDS (Pedodontics)",
    experience: "9+ Yrs",
    rating: 5,
    reviewCount: 204,
    languages: ["English", "Hindi"],
    image: "/images/doctors/doctor-vinita-singh.png",
    available: true,
  },
  {
    id: "dr-ananya-iyer",
    name: "Dr. Ananya Iyer",
    category: "Orthodontist",
    specialty: "Orthodontics",
    degree: "BDS, MDS (Orthodontics)",
    experience: "6+ Yrs",
    rating: 4,
    reviewCount: 137,
    languages: ["English", "Tamil", "Hindi"],
    image: "/images/doctors/doctor1.png",
    available: true,
  },
  {
    id: "dr-karan-malhotra",
    name: "Dr. Karan Malhotra",
    category: "Prosthodontist",
    specialty: "Prosthodontics",
    degree: "BDS, MDS (Prosthodontics)",
    experience: "11+ Yrs",
    rating: 5,
    reviewCount: 289,
    languages: ["English", "Hindi", "Punjabi"],
    image: "/images/doctors/doctor2.png",
    available: false,
  },
];

const CATEGORIES: DoctorCategory[] = [
  "All",
  "Prosthodontist",
  "Orthodontist",
  "Endodontist",
  "Oral Surgeon",
  "Periodontist",
  "Pediatric",
];

// ─────────────────────────────────────────────────────────────────────────────
// DOCTOR CARD
// ─────────────────────────────────────────────────────────────────────────────

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(8,50,88,0.07)] border border-[#D5ECF0] bg-[#0A1D2F] cursor-pointer transition-all duration-400 hover:shadow-[0_16px_44px_rgba(10,173,168,0.18)] hover:border-[#0AADA8]/50 hover:-translate-y-1 aspect-[3/4]">

      {/* ── Full-bleed Doctor Photo ── */}
      <div className="absolute inset-0">
        <Image
          src={doctor.image}
          alt={`Photo of ${doctor.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>

      {/* ── Persistent bottom gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#082238]/95 via-[#082238]/50 to-transparent z-10" />

      {/* ── Hover teal tint overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0AADA8]/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* ── Top badges row ── */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
        {/* Availability */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
           <span className="text-[10px] font-bold text-white">
            {doctor.available ? "Available" : "On Leave"}
          </span>
        </div>

        {/* Expand icon — appears on hover */}
        <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 group-hover:bg-[#0AADA8]">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" />
          </svg>
        </div>
      </div>

      {/* ── Bottom content — always visible ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">

        {/* Specialty pill */}
        <div className="mb-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0AADA8] text-white text-[10px] font-black tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            {doctor.specialty}
          </span>
        </div>

        {/* Doctor name */}
        <h3 className="text-[17px] font-black text-white leading-tight tracking-tight mb-0.5 group-hover:text-[#65F4F0] transition-colors duration-300">
          {doctor.name}
        </h3>

        {/* Degree + experience row */}
        <p className="text-[11px] text-white/75 font-medium mb-2.5 line-clamp-1">
          {doctor.degree}
        </p>

        {/* Stats strip */}
        <div className="flex items-center gap-3 mb-3 pt-2.5 border-t border-white/15">
          {/* Stars */}
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className={`w-3 h-3 ${i < doctor.rating ? "text-[#FBBF24]" : "text-white/25"}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-[10.5px] text-white/65 font-medium">({doctor.reviewCount})</span>
          <span className="ml-auto text-[10.5px] font-bold text-[#65F4F0]">{doctor.experience}</span>
        </div>

        {/* Book button — slides into view on hover */}
        <div className="overflow-hidden">
          <Link
            href="/appointment"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-bold shadow-lg transition-all duration-300 sm:translate-y-full sm:group-hover:translate-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="m9 16 2 2 4-4" />
            </svg>
            Book Appointment
          </Link>
        </div>

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY PILL
// ─────────────────────────────────────────────────────────────────────────────

function CategoryPill({
  label,
  count,
  active,
  onClick,
}: {
  label: DoctorCategory;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 whitespace-nowrap active:scale-95 ${
        active
          ? "bg-[#0AADA8] border-[#0AADA8] text-white shadow-[0_4px_14px_rgba(10,173,168,0.3)]"
          : "bg-white border-[#E4EEF2] text-[#426480] hover:border-[#0AADA8] hover:text-[#0AADA8]"
      }`}
    >
      <span>{label}</span>
      <span
        className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
          active ? "bg-white/20 text-white" : "bg-[#E8F8F8] text-[#0AADA8]"
        }`}
      >
        {count}
      </span>
    </button>
  );
}



// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export function DoctorIdentificationSection() {
  const [activeCategory, setActiveCategory] = useState<DoctorCategory>("All");

  const filtered =
    activeCategory === "All"
      ? DOCTORS
      : DOCTORS.filter((d) => d.category === activeCategory);

  const getCategoryCount = (cat: DoctorCategory) =>
    cat === "All"
      ? DOCTORS.length
      : DOCTORS.filter((d) => d.category === cat).length;

  return (
    <section className="w-full bg-[#F8FDFF] py-3 sm:py-4 lg:py-5 border-t border-[#E4EEF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            {/* Eyebrow pill — gallery style */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F5F6] border border-[#0AADA8]/30 text-[#0AADA8] text-xs font-extrabold tracking-wide uppercase shadow-sm mb-3">
               Expert Medical Panel
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#083258] leading-tight tracking-tight">
              Meet Your{" "}
              <span className="text-[#0AADA8]">Specialist Doctors</span>
            </h2>
            <p className="mt-3 text-sm text-[#426480] leading-relaxed max-w-xl">
              Each of our doctors is a category-certified specialist — trained at
              premier institutions and committed to delivering the highest standard
              of personalised dental care.
            </p>
          </div>

          {/* Stats pill cluster */}
          <div className="flex flex-wrap gap-3 lg:shrink-0">
            {[
              { value: "8+", label: "Specialists" },
              { value: "50K+", label: "Happy Patients" },
              { value: "15+", label: "Yrs Avg. Exp." },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-5 py-3 rounded-2xl bg-white border border-[#E4EEF2] shadow-[0_2px_12px_rgba(8,50,88,0.05)]"
              >
                <span className="text-xl font-extrabold text-[#083258]">
                  {stat.value}
                </span>
                <span className="text-[11px] text-[#6B8BA2] font-medium mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide -mx-1 px-1">
          {CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              count={getCategoryCount(cat)}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* ── Doctor Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {filtered.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* ── Empty state ── */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#6B8BA2] text-sm">
            No doctors found in this category.
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center px-6 sm:px-8 py-6 sm:py-7 rounded-3xl bg-[#F8FDFF] border border-[#D5ECF0] shadow-sm">
          <div className="lg:col-span-8">
            <div className="text-xs font-bold text-[#0AADA8] uppercase tracking-wider mb-1">Free Consultation</div>
            <p className="font-bold text-[#083258] text-base sm:text-lg">
              Not sure which specialist to consult?
            </p>
            <p className="text-xs sm:text-sm text-[#426480] mt-1 leading-relaxed max-w-lg">
              Call us and our team will guide you to the right doctor for your needs — no waiting, no confusion.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center gap-3 lg:justify-end">
            <Link
              href="/contact"
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white border border-[#D5ECF0] text-[#083258] text-xs sm:text-sm font-semibold hover:border-[#083258] transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              Contact Us
            </Link>
            <Link
              href="/appointment"
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#083258] hover:bg-[#0AADA8] text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="m9 16 2 2 4-4" />
              </svg>
              Book Appointment
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
