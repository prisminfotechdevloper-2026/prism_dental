"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
// CUSTOM SVG ICONS (Teal Outlined Style)
// ─────────────────────────────────────────────

// Qualification / Degree Icon
function QualificationIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0AADA8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

// Experience / Stethoscope Icon
function StethoscopeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0AADA8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 3v5a5.5 5.5 0 0 0 11 0V3" />
      <path d="M10 13.5V17a4 4 0 0 0 8 0v-2.5" />
      <circle cx="18" cy="13.5" r="1.5" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// DOCTORS DATA
// ─────────────────────────────────────────────
interface Doctor {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  href: string;
}

const doctors: Doctor[] = [
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    role: "Chief Dentist & Founder",
    qualification: "BDS, MDS (Prosthodontics)",
    experience: "12+ Years Experience",
    image: "/images/doctors/doctor-priya.jpg",
    href: "/appointment?doctor=dr-priya-sharma",
  },
  {
    id: "dr-rahul-verma",
    name: "Dr. Rahul Verma",
    role: "Endodontist",
    qualification: "BDS, MDS (Conservative Dentistry)",
    experience: "8+ Years Experience",
    image: "/images/doctors/doctor-rahul.jpg",
    href: "/appointment?doctor=dr-rahul-verma",
  },
  {
    id: "dr-sneha-patel",
    name: "Dr. Sneha Patel",
    role: "Orthodontist",
    qualification: "BDS, MDS (Orthodontics)",
    experience: "6+ Years Experience",
    image: "/images/doctors/doctor-sneha.jpg",
    href: "/appointment?doctor=dr-sneha-patel",
  },
  {
    id: "dr-amit-kumar",
    name: "Dr. Amit Kumar",
    role: "Oral Surgeon",
    qualification: "BDS, MDS (Oral Surgery)",
    experience: "7+ Years Experience",
    image: "/images/doctors/doctor-amit.jpg",
    href: "/appointment?doctor=dr-amit-kumar",
  },
];

// ─────────────────────────────────────────────
// DOCTOR CARD COMPONENT
// ─────────────────────────────────────────────
function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="group bg-white border border-[#E4EEF2] rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(8,50,88,0.03)] hover:shadow-[0_10px_30px_rgba(8,50,88,0.08)] hover:border-[#0AADA8]/40 hover:-translate-y-1 transition-all duration-300">
      {/* Top Details (Avatar + Information) */}
      <div className="flex items-start gap-3.5 sm:gap-4">
        {/* Doctor Photo */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#E8F8F8] group-hover:border-[#0AADA8]/30 transition-colors duration-300 shadow-sm">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info Column */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-[15px] font-bold text-[#083258] leading-tight truncate group-hover:text-[#0AADA8] transition-colors duration-200">
            {doctor.name}
          </h3>

          <p className="text-xs sm:text-[12px] font-semibold text-[#026EB9] mt-0.5 leading-snug">
            {doctor.role}
          </p>

          {/* Qualification with Icon */}
          <div className="flex items-center gap-1.5 mt-2 text-[10.5px] sm:text-[11.5px] text-[#6B8BA2] leading-tight">
            <QualificationIcon className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{doctor.qualification}</span>
          </div>

          {/* Experience with Icon */}
          <div className="flex items-center gap-1.5 mt-1 text-[10.5px] sm:text-[11.5px] text-[#6B8BA2] leading-tight">
            <StethoscopeIcon className="w-3.5 h-3.5 shrink-0" />
            <span>{doctor.experience}</span>
          </div>
        </div>
      </div>

      {/* Book Appointment CTA Button */}
      <div className="mt-4 pt-1">
        <Link
          href={doctor.href}
          className="block w-full py-2.5 px-3 bg-[#0AADA8] hover:bg-[#089692] text-white text-center text-xs sm:text-[12.5px] font-semibold rounded-xl shadow-[0_3px_12px_rgba(10,173,168,0.20)] hover:shadow-[0_5px_16px_rgba(10,173,168,0.30)] active:scale-[0.98] transition-all duration-200"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION EXPORT
// ─────────────────────────────────────────────
export const DoctorsSection = () => {
  return (
    <section className="w-full bg-[#FAFDFF] py-12 sm:py-14 lg:py-16 border-t border-[#E8F1F5]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="flex items-start justify-between gap-4 mb-7 sm:mb-9">
          <div>
            {/* Eyebrow label */}
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#0AADA8] mb-1.5">
              OUR DOCTORS
            </p>
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#083258] leading-tight tracking-tight">
              Meet Our Expert Dentists
            </h2>
            {/* Sub-description */}
            <p className="mt-1.5 text-xs sm:text-[14px] text-[#6B8BA2] max-w-xl leading-relaxed">
              Our team of qualified and experienced dentists is committed to giving you the best care.
            </p>
          </div>

          {/* View All Doctors Link */}
          <Link
            href="/doctors"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0AADA8] hover:text-[#089692] transition-colors duration-200 whitespace-nowrap mt-1 shrink-0"
          >
            View All Doctors
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* ── Doctors Grid: 4 Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* ── Mobile: View All Link ── */}
        <div className="flex sm:hidden justify-center mt-6">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0AADA8] hover:text-[#089692] transition-colors duration-200"
          >
            View All Doctors
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DoctorsSection;
