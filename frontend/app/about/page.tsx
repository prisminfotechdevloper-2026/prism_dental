import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
  CheckCircle2,
  Activity,
  Sparkles,
  CalendarDays,
} from "lucide-react";

export const metadata = {
  title: "About Us | SmileCare Dental Clinic",
  description: "Learn about SmileCare Dental Clinic's 15+ years of patient-first dental care, cutting-edge German technology, and certified specialists.",
};

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Compassionate & Pain-Free Care",
    desc: "We prioritize patient comfort with gentle techniques, digital local anesthesia, and a soothing clinical environment designed to eliminate dental anxiety.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Sterilization",
    desc: "We follow strict European Class-B multi-stage autoclaving and 100% single-use disposables to guarantee zero cross-contamination.",
  },
  {
    icon: Activity,
    title: "Advanced 3D Technology",
    desc: "Our clinic is equipped with digital intraoral scanners, 3D CBCT radiography, and rotary endodontics for sub-millimeter precision.",
  },
  {
    icon: Award,
    title: "Ethical & Transparent Pricing",
    desc: "No hidden charges, no unnecessary treatments. Every diagnosis is explained with photos and radiographs before treatment begins.",
  },
];

const MILESTONES = [
  { year: "2011", title: "Clinic Foundation", desc: "SmileCare was established with a 2-chair setup focusing on conservative and family dentistry." },
  { year: "2015", title: "Implant & Ortho Center", desc: "Expanded into advanced implantology with German titanium implant systems and digital orthodontics." },
  { year: "2019", title: "3D Digital Transformation", desc: "Installed state-of-the-art 3D intraoral scanners, reducing impression times to just 3 minutes." },
  { year: "2024", title: "14,000+ Happy Patients", desc: "Celebrated serving over 14,000 satisfied patients across Delhi NCR with a 99.4% satisfaction rate." },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#E8F8F8]/60 via-white to-[#F8FDFF] py-14 lg:py-20 border-b border-[#D5ECF0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            15+ Years of Trust & Care
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083258] tracking-tight">
            Pioneering Gentle, High-Tech Dental Healthcare
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#426480] leading-relaxed">
            At SmileCare Dental Clinic, our mission is simple: to make modern, world-class dental treatments accessible, transparent, and completely pain-free for every family member.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-sm font-semibold shadow-md transition-all"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Book a Consultation</span>
            </Link>
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#D5ECF0] bg-white hover:bg-[#F8FDFF] text-[#083258] text-sm font-semibold transition-all"
            >
              <Users className="w-4 h-4 text-[#026EB9]" />
              <span>Meet Our Specialists</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY & MISSION */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#D5ECF0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0AADA8]">Our Story</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#083258] tracking-tight">
                Built on clinical excellence, empathy, and continuous innovation.
              </h2>
              <p className="text-sm text-[#426480] leading-relaxed">
                Founded in 2011 by senior dental surgeons, SmileCare was born out of a desire to redefine the dental experience. Too often, patients avoid dental treatment due to anxiety, fear of pain, or confusing prices.
              </p>
              <p className="text-sm text-[#426480] leading-relaxed">
                We set out to create a sanctuary where dental visits are calm, fast, and remarkably comfortable. By combining digital diagnostics, computer-guided anesthesia, and warm human care, we turn nervous visitors into smiling advocates.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F8FDFF] border border-[#D5ECF0]">
                  <div className="text-2xl font-bold text-[#083258]">14,000+</div>
                  <div className="text-xs text-[#6B8BA2] mt-0.5">Patients Treated</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FDFF] border border-[#D5ECF0]">
                  <div className="text-2xl font-bold text-[#0AADA8]">99.4%</div>
                  <div className="text-xs text-[#6B8BA2] mt-0.5">Satisfaction Rating</div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-[#D5ECF0] bg-[#E8F8F8] p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#083258]">Our Core Clinical Standards</h3>
              <ul className="space-y-4 text-xs sm:text-sm text-[#426480]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0AADA8] shrink-0 mt-0.5" />
                  <span><strong>100% Sterile Environment:</strong> 5-tier autoclaving protocol audited weekly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0AADA8] shrink-0 mt-0.5" />
                  <span><strong>Digital Workflow:</strong> Intraoral 3D camera and low-radiation digital radiography.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0AADA8] shrink-0 mt-0.5" />
                  <span><strong>Multi-Specialty Consultation:</strong> Prosthodontists, Orthodontists, Endodontists & Periodontists under one roof.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0AADA8] shrink-0 mt-0.5" />
                  <span><strong>Child-Friendly Dental Care:</strong> Dedicated pediatric operatory with gentle child specialists.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR CORE VALUES */}
      <section className="py-16 lg:py-20 bg-[#F8FDFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083258] tracking-tight">
              Our Guiding Principles
            </h2>
            <p className="text-sm text-[#426480] mt-2">
              Every member of our team is committed to the highest ethical and clinical benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-[#D5ECF0] p-6 shadow-sm hover:border-[#0AADA8]/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F8F8] text-[#0AADA8] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#083258] mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-[#426480] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MILESTONES TIMELINE */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#D5ECF0]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083258] tracking-tight">
              Our Journey Over 15 Years
            </h2>
            <p className="text-sm text-[#426480] mt-2">
              Milestones that shaped our commitment to dental excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-[#D5ECF0] bg-[#F8FDFF]">
                <span className="text-2xl font-black text-[#0AADA8]">{m.year}</span>
                <h3 className="text-sm font-bold text-[#083258] mt-2">{m.title}</h3>
                <p className="text-xs text-[#426480] mt-1.5 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="bg-[#083258] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Experience Dental Care With a Difference</h2>
          <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Book an appointment today to consult our specialists and experience pain-free dentistry.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/appointment"
              className="px-6 py-3 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-semibold shadow-md transition-all"
            >
              Book Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
