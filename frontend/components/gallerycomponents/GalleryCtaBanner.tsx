"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function GalleryCtaBanner() {
  return (
    <section className="w-full bg-[#083258] py-14 sm:py-16 lg:py-20 relative overflow-hidden text-white">
      
      {/* Background Ambient Glows & Accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0AADA8]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#026EB9]/30 blur-3xl pointer-events-none" />
      
      {/* Decorative Wave Line */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,173,168,0.15),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-14 border border-white/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          
          {/* Left Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0AADA8]/20 border border-[#0AADA8]/40 text-[#65F4F0] text-xs font-black tracking-wider uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#65F4F0]" />
              Start Your Smile Journey
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
              Ready to See Your Own <span className="text-[#65F4F0]">Smile Transformation?</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed mb-6">
              Experience gentle, precision dental care powered by modern 3D imaging technology. Book a comprehensive smile assessment today with our senior specialists.
            </p>

            {/* 4 Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-white/15">
              <div>
                <div className="text-lg sm:text-xl font-black text-[#65F4F0]">5,000+</div>
                <div className="text-[11px] text-white/70 font-medium">Smiles Restored</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-[#65F4F0]">99.4%</div>
                <div className="text-[11px] text-white/70 font-medium">Patient Satisfaction</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-[#65F4F0]">15+ Years</div>
                <div className="text-[11px] text-white/70 font-medium">Clinical Mastery</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-[#65F4F0]">100%</div>
                <div className="text-[11px] text-white/70 font-medium">Pain-Free Tech</div>
              </div>
            </div>

          </div>

          {/* Right Action Card */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col items-center lg:items-end gap-4">
            
            {/* Doctor Avatars Group */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15">
              <div className="flex -space-x-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#083258]">
                  <Image src="/images/doctors/doctor-priya.jpg" alt="Dr. Priya" fill sizes="32px" className="object-cover" />
                </div>
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#083258]">
                  <Image src="/images/doctors/doctor-rahul.jpg" alt="Dr. Rahul" fill sizes="32px" className="object-cover" />
                </div>
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#083258]">
                  <Image src="/images/doctors/doctor-sneha.jpg" alt="Dr. Sneha" fill sizes="32px" className="object-cover" />
                </div>
              </div>
              <span className="text-xs font-bold text-white pl-1">
                Consult with Senior Specialists
              </span>
            </div>

            {/* Primary Action Button */}
            <Link
              href="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#0AADA8] hover:bg-[#089691] text-white px-8 py-4 text-sm sm:text-base font-extrabold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 active:translate-y-0 text-center"
            >
              <span>Book 3D Smile Consultation</span>
              <span className="text-lg leading-none">→</span>
            </Link>

            <span className="text-[11px] text-white/60">
              ✓ Free 3D digital scan • Zero obligation • Same-day appointments
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
