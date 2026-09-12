"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, ChevronDown, CheckCircle2, Navigation } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM CRISP ICONS
// ─────────────────────────────────────────────────────────────────────────────

function MapPinFilledIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export function ContactBookingAndLocation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };

  const services = [
    "General Dental Consultation",
    "Teeth Cleaning & Polishing",
    "Root Canal Treatment (RCT)",
    "Dental Implants",
    "Teeth Whitening & Veneers",
    "Braces & Clear Aligners",
    "Wisdom Tooth Extraction",
    "Pediatric Dentistry",
    "24/7 Emergency Dental Care",
  ];

  return (
    <section className="w-full bg-[#F8FDFF] pb-14 sm:pb-18 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ─────────────────────────────────────────────────────────
              LEFT COLUMN: "Book Your Appointment" Form Card (7 cols)
              ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#D5ECF0] p-6 sm:p-8 lg:p-9 shadow-[0_4px_25px_rgba(8,50,88,0.04)] flex flex-col justify-between h-full">
            <div>
              {/* Form Eyebrow */}
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0AADA8] block mb-2">
                SEND US A MESSAGE
              </span>

              {/* Form Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight mb-2 leading-snug">
                <span className="text-[#083258]">Book Your </span>
                <span className="text-[#0AADA8]">Appointment</span>
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-[#426480] mb-6 sm:mb-7 leading-relaxed">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>

            {sent ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 my-auto">
                <div className="w-14 h-14 bg-[#E8F8F8] text-[#0AADA8] rounded-2xl flex items-center justify-center mx-auto ring-4 ring-[#BCEBE9]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#083258]">
                  Appointment Request Sent!
                </h3>
                <p className="text-xs sm:text-sm text-[#426480] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#083258]">{formData.name}</strong>. Our front desk team will contact you shortly to confirm your preferred slot.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-xl border border-[#D5ECF0] text-xs font-bold text-[#083258] hover:bg-[#F8FDFF] transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#083258] mb-1.5">
                      Full Name <span className="text-[#0AADA8]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0AADA8] focus:border-transparent bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#083258] mb-1.5">
                      Phone Number <span className="text-[#0AADA8]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0AADA8] focus:border-transparent bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address & Select Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#083258] mb-1.5">
                      Email Address <span className="text-[#0AADA8]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0AADA8] focus:border-transparent bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#083258] mb-1.5">
                      Select Service
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] focus:outline-none focus:ring-2 focus:ring-[#0AADA8] focus:border-transparent bg-white appearance-none pr-10 cursor-pointer transition-all"
                      >
                        <option value="">Choose a service</option>
                        {services.map((srv, idx) => (
                          <option key={idx} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#0AADA8] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#083258] mb-1.5">
                    Message <span className="text-[#0AADA8]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your concern..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0AADA8] focus:border-transparent bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ─────────────────────────────────────────────────────────
              RIGHT COLUMN: "Our Clinic Location" Card (5 cols)
              Height perfectly matched to Left Form Card
              ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#D5ECF0] overflow-hidden shadow-[0_4px_25px_rgba(8,50,88,0.04)] flex flex-col h-full">
            
            {/* Top Clinic Photo with Floating Handwritten Badge */}
            <div className="relative h-40 sm:h-44 lg:h-48 w-full overflow-hidden shrink-0">
              <Image
                src="/images/about-clinic.jpg"
                alt="Modern SmileCare Clinic operatory suite in Ramganj Mandi, Kota"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating "Visit Our Clinic :)" Speech Badge */}
              <div
                className="absolute top-3.5 right-3.5 bg-[#0AADA8] text-white px-3.5 py-2 rounded-2xl shadow-md pointer-events-none select-none text-center"
                style={{
                  transform: "rotate(3deg)",
                }}
              >
                <p className="font-handwriting text-base sm:text-[17px] font-bold leading-tight">
                  Visit Our Clinic
                </p>
                {/* Hand-drawn Smiley */}
                <div className="flex justify-center mt-0.5">
                  <svg
                    className="w-4 h-3 text-white"
                    viewBox="0 0 24 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="4" r="1.3" fill="currentColor" stroke="none" />
                    <circle cx="16" cy="4" r="1.3" fill="currentColor" stroke="none" />
                    <path d="M 6 8.5 Q 12 14.5 18 8.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Content: Address, Map & Directions (Fills remaining height) */}
            <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between gap-3.5 sm:gap-4">
              
              {/* Header & Address Info */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#083258] mb-2">
                  Our Clinic Location
                </h3>

                {/* Address Row (Ramganj Mandi, Kota, Rajasthan) */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="shrink-0 mt-0.5">
                    <MapPinFilledIcon />
                  </div>
                  <div className="text-xs sm:text-[12.5px] text-[#083258] leading-relaxed">
                    <p className="font-bold">
                      Near Bus Stand, Ramganj Mandi,
                    </p>
                    <p className="text-[#426480] font-medium">
                      Kota, Rajasthan - 326519
                    </p>
                    <p className="text-[11px] text-[#0AADA8] font-semibold">
                      (Opp. Main Bus Stand)
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map Embed (Fills available space evenly) */}
              <div className="relative w-full flex-1 min-h-[140px] rounded-2xl overflow-hidden border border-[#D5ECF0] shadow-2xs">
                <iframe
                  title="SmileCare Dental Clinic Ramganj Mandi Kota Map"
                  src="https://maps.google.com/maps?q=Bus+Stand+Ramganj+Mandi+Kota+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Get Directions Button */}
              <div className="pt-0.5">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Bus+Stand+Ramganj+Mandi+Kota+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0AADA8] text-[#0AADA8] hover:bg-[#E8F8F8] font-bold text-xs transition-colors shadow-2xs group"
                >
                  <Navigation className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
