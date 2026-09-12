"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING UI REFERENCE EXACTLY
// ─────────────────────────────────────────────────────────────────────────────

// Doctor / Qualification Badge Icon
function QualificationBadgeIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-[#0AADA8] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// Experience / Stethoscope Icon
function ExperienceStethoscopeIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-[#0AADA8] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 3v5a5.5 5.5 0 0 0 11 0V3" />
      <path d="M10 13.5V17a4 4 0 0 0 8 0v-2.5" />
      <circle cx="18" cy="13.5" r="1.5" />
    </svg>
  );
}

// Arrow Right Icon
function ArrowRightIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DOCTORS DATA MATCHING SCREENSHOT EXACTLY
// ─────────────────────────────────────────────────────────────────────────────
interface DoctorMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  href: string;
}

const teamMembers: DoctorMember[] = [
  {
    id: "dr-rohan-mehta",
    name: "Dr. Rohan Mehta",
    role: "Chief Dentist & Founder",
    qualification: "BDS, MDS (Prosthodontics)",
    experience: "15+ Years Experience",
    image: "/images/doctors/doctor-rahul.jpg",
    href: "/doctors",
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    role: "Orthodontist",
    qualification: "BDS, MDS (Orthodontics)",
    experience: "10+ Years Experience",
    image: "/images/doctors/doctor-priya.jpg",
    href: "/doctors",
  },
  {
    id: "dr-amit-verma",
    name: "Dr. Amit Verma",
    role: "Endodontist",
    qualification: "BDS, MDS (Endodontics)",
    experience: "8+ Years Experience",
    image: "/images/doctors/doctor-amit.jpg",
    href: "/doctors",
  },
];

export function MeetOurTeam() {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-16 border-b border-[#E8F1F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: SECTION HEADLINE & CTA
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col items-start justify-center">
            {/* Eyebrow / Tag */}
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0AADA8] mb-2">
              OUR DENTAL EXPERTS
            </span>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#083258] leading-tight tracking-tight mb-3">
              Meet Our Dedicated Team
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-[13.5px] text-[#426480] leading-relaxed mb-6 max-w-sm">
              Our team of skilled and compassionate dental professionals is here to give you the best care, always.
            </p>

            {/* View All Doctors Button */}
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-[0_4px_14px_rgba(10,173,168,0.25)] hover:shadow-[0_6px_20px_rgba(10,173,168,0.35)] active:scale-95 group"
            >
              <span>View All Doctors</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: 3 DOCTOR CARDS
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5">
            {teamMembers.map((doctor) => (
              <div
                key={doctor.id}
                className="group bg-white rounded-2xl border border-[#E4EEF2] overflow-hidden shadow-[0_4px_20px_rgba(8,50,88,0.04)] hover:shadow-[0_12px_28px_rgba(8,50,88,0.09)] hover:border-[#0AADA8]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Doctor Headshot / Photo */}
                <div className="relative w-full h-52 sm:h-56 bg-[#F4F9FB] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Doctor Name */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#083258] leading-tight group-hover:text-[#0AADA8] transition-colors duration-200">
                      {doctor.name}
                    </h3>

                    {/* Role / Specialization */}
                    <p className="text-xs sm:text-[12px] font-semibold text-[#0AADA8] mt-1 mb-3">
                      {doctor.role}
                    </p>

                    {/* Qualification with Icon */}
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] text-[#426480] leading-tight mb-1.5">
                      <QualificationBadgeIcon />
                      <span className="truncate">{doctor.qualification}</span>
                    </div>

                    {/* Experience with Icon */}
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] text-[#426480] leading-tight">
                      <ExperienceStethoscopeIcon />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>

                  {/* View Profile CTA Button */}
                  <div className="mt-4 pt-1">
                    <Link
                      href={doctor.href}
                      className="w-full py-2 px-3 bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors duration-200 shadow-sm group-hover:shadow-[0_3px_10px_rgba(10,173,168,0.25)]"
                    >
                      <span>View Profile</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
