"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  CheckCircle2,
  MapPin,
  HeartPulse,
} from "lucide-react";

const TREATMENTS = [
  "General Dental Checkup & Consultation",
  "Teeth Whitening & Cleaning",
  "Dental Implants",
  "Root Canal Treatment (Single-Sitting)",
  "Clear Aligners & Orthodontic Braces",
  "Cosmetic Smile Design & Veneers",
  "Pediatric (Kids) Dental Care",
  "Wisdom Tooth Pain & Extraction",
  "Emergency Dental Care",
];

const DOCTORS = [
  "Any Available Specialist",
  "Dr. Vikram Mehta (MDS - Prosthodontist & Implantologist)",
  "Dr. Ananya Sharma (MDS - Orthodontics & Clear Aligners)",
  "Dr. Rajesh Khanna (MDS - Conservative & Endodontics)",
  "Dr. Meera Nambiar (BDS, MDS - Pediatric Dentist)",
];

const TIME_SLOTS = [
  "09:00 AM - 10:30 AM",
  "10:30 AM - 12:00 PM",
  "12:00 PM - 01:30 PM",
  "02:30 PM - 04:00 PM",
  "04:00 PM - 05:30 PM",
  "05:30 PM - 07:00 PM",
  "07:00 PM - 08:30 PM",
];

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: TREATMENTS[0],
    doctor: DOCTORS[0],
    date: "",
    timeSlot: TIME_SLOTS[0],
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate booking API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-semibold uppercase tracking-wider mb-3">
            <CalendarDays className="w-3.5 h-3.5" />
            Easy Online Booking
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083258] tracking-tight">
            Schedule Your Dental Appointment
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#426480]">
            Book a convenient consultation with our senior dental specialists. Zero waiting time, pain-free diagnosis, and upfront pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Appointment Booking Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#D5ECF0] p-6 sm:p-10 shadow-[0_10px_35px_rgba(8,50,88,0.06)]">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#E8F8F8] text-[#0AADA8] rounded-2xl flex items-center justify-center mx-auto ring-4 ring-[#BCEBE9]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0AADA8]">Booking Confirmed</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#083258]">
                    Thank You, {formData.name}!
                  </h2>
                  <p className="text-sm text-[#426480] max-w-md mx-auto">
                    Your appointment request for <strong>{formData.treatment}</strong> on <strong>{formData.date || "Selected Date"}</strong> at <strong>{formData.timeSlot}</strong> has been received.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FDFF] border border-[#D5ECF0] max-w-md mx-auto text-left text-xs space-y-1 text-[#426480]">
                  <p><strong className="text-[#083258]">Doctor:</strong> {formData.doctor}</p>
                  <p><strong className="text-[#083258]">Phone Contact:</strong> {formData.phone}</p>
                  <p><strong className="text-[#083258]">Status:</strong> Clinic coordinator will call within 15 minutes to confirm.</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        treatment: TREATMENTS[0],
                        doctor: DOCTORS[0],
                        date: "",
                        timeSlot: TIME_SLOTS[0],
                        notes: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-[#D5ECF0] text-[#083258] hover:bg-[#F8FDFF] text-xs font-semibold transition-colors"
                  >
                    Book Another Appointment
                  </button>
                  <Link
                    href="/"
                    className="px-6 py-2.5 rounded-xl bg-[#0AADA8] text-white hover:bg-[#089692] text-xs font-semibold transition-colors shadow-sm"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#6B8BA2] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] placeholder-[#6B8BA2] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#6B8BA2] absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] placeholder-[#6B8BA2] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#6B8BA2] absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        placeholder="ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] placeholder-[#6B8BA2] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                      />
                    </div>
                  </div>

                  {/* Treatment Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Treatment / Service *
                    </label>
                    <div className="relative">
                      <Stethoscope className="w-4 h-4 text-[#6B8BA2] absolute left-3.5 top-3.5" />
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8] appearance-none"
                      >
                        {TREATMENTS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Doctor Preference */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Preferred Doctor
                    </label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                    >
                      {DOCTORS.map((doc) => (
                        <option key={doc} value={doc}>
                          {doc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                      />
                    </div>
                  </div>
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-2">
                    Preferred Time Slot *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = formData.timeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`px-3 py-2 text-xs font-medium rounded-xl border transition-all ${
                            isSelected
                              ? "bg-[#0AADA8] border-[#0AADA8] text-white font-bold shadow-sm"
                              : "border-[#D5ECF0] bg-[#F8FDFF] text-[#426480] hover:border-[#0AADA8]/60"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Symptoms / Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                    Dental Symptoms or Special Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any pain, sensitivity, bleeding gums, or questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] placeholder-[#6B8BA2] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white font-bold text-sm tracking-wide shadow-[0_6px_20px_rgba(10,173,168,0.3)] transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing Booking...</span>
                  ) : (
                    <>
                      <CalendarDays className="w-4 h-4" />
                      <span>Confirm & Book Appointment</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Quick Info & Emergency Callout */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Helpline Card */}
            <div className="rounded-3xl border border-[#EF4444]/30 bg-[#FEF2F2] p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[#EF4444] font-bold text-xs uppercase tracking-wider mb-2">
                <HeartPulse className="w-4 h-4 animate-pulse" />
                Dental Emergency 24/7
              </div>
              <h3 className="text-lg font-bold text-[#083258]">
                Severe Pain or Trauma?
              </h3>
              <p className="text-xs text-[#426480] mt-1.5 leading-relaxed">
                Do not wait for form confirmation. Call our emergency response team directly for immediate same-day relief.
              </p>
              <a
                href="tel:+919876543210"
                className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#EF4444] hover:bg-[#DC2626] text-white text-xs font-bold transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 98765 43210</span>
              </a>
            </div>

            {/* Why Book Online */}
            <div className="rounded-3xl border border-[#D5ECF0] bg-white p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#083258]">
                SmileCare Assurance
              </h3>

              <div className="space-y-3 text-xs text-[#426480]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0AADA8] shrink-0 mt-0.5" />
                  <span><strong>Instant Confirmation:</strong> SMS and WhatsApp notification sent right away.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0AADA8] shrink-0 mt-0.5" />
                  <span><strong>Zero Consultation Waiting:</strong> Priority slot reservation ensures on-time checkup.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0AADA8] shrink-0 mt-0.5" />
                  <span><strong>Transparent Consultation:</strong> Clear treatment cost estimate provided prior to any procedure.</span>
                </div>
              </div>
            </div>

            {/* Clinic Location & Hours */}
            <div className="rounded-3xl border border-[#D5ECF0] bg-white p-6 shadow-sm space-y-3 text-xs text-[#426480]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#026EB9] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#083258] block">Clinic Address:</strong>
                  104, Healthcare Towers, Opp. City Central Park, Medical Enclave
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#D5ECF0]/60">
                <Clock className="w-4 h-4 text-[#026EB9] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#083258] block">Clinic Working Hours:</strong>
                  Mon – Sat: 9:00 AM – 8:00 PM<br />
                  Sunday: 10:00 AM – 2:00 PM
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
