"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  HeartPulse,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };

  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083258] tracking-tight">
            Contact SmileCare Dental Clinic
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#426480]">
            We are here to answer your dental queries, help schedule appointments, and provide immediate 24/7 emergency dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Contact Cards & Clinic Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Emergency Hotline Card */}
            <div className="rounded-3xl border border-[#EF4444]/30 bg-[#FEF2F2] p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[#EF4444] font-bold text-xs uppercase tracking-wider mb-2">
                <HeartPulse className="w-4 h-4 animate-pulse" />
                24/7 Emergency Line
              </div>
              <h2 className="text-xl font-bold text-[#083258]">
                Dental Emergency On-Call
              </h2>
              <p className="text-xs text-[#426480] mt-1.5 leading-relaxed">
                Suffering from severe toothache, broken restoration, or sudden trauma? Call our emergency line directly.
              </p>
              <a
                href="tel:+919876543210"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#EF4444] hover:bg-[#DC2626] text-white text-xs font-bold transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
            </div>

            {/* Clinic Info Cards */}
            <div className="rounded-3xl border border-[#D5ECF0] bg-white p-6 sm:p-7 shadow-sm space-y-5">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8F8] text-[#0AADA8] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#083258]">Clinic Address</h3>
                  <p className="text-xs sm:text-sm text-[#426480] mt-1 leading-relaxed">
                    104, Healthcare Towers, Opp. City Central Park, Medical Enclave, New Delhi - 110001
                  </p>
                  <span className="text-[11px] text-[#026EB9] font-medium block mt-1">
                    Free Valet Parking Available
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D5ECF0]/60 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4FB] text-[#026EB9] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#083258]">Working Hours</h3>
                  <div className="text-xs text-[#426480] mt-1 space-y-1">
                    <div className="flex justify-between gap-6">
                      <span>Mon – Sat:</span>
                      <strong className="text-[#083258]">9:00 AM – 8:00 PM</strong>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Sunday:</span>
                      <strong className="text-[#083258]">10:00 AM – 2:00 PM</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D5ECF0]/60 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8F8] text-[#0AADA8] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#083258]">Email Inquiries</h3>
                  <a
                    href="mailto:care@smilecaredental.com"
                    className="text-xs sm:text-sm text-[#0AADA8] font-semibold hover:underline block mt-1"
                  >
                    care@smilecaredental.com
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D5ECF0]/60 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8F8] text-[#0AADA8] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#083258]">Instant WhatsApp Chat</h3>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20SmileCare,%20I%20have%20a%20question%20about%20dental%20treatments."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#0AADA8] font-semibold hover:underline block mt-1"
                  >
                    Chat With Front Desk →
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#D5ECF0] p-6 sm:p-10 shadow-[0_10px_35px_rgba(8,50,88,0.06)]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0AADA8]">Send Us A Message</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083258] mt-1 mb-6">
              How Can We Help You Today?
            </h2>

            {sent ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-14 h-14 bg-[#E8F8F8] text-[#0AADA8] rounded-2xl flex items-center justify-center mx-auto ring-4 ring-[#BCEBE9]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#083258]">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-[#426480] max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Our clinic desk will get back to you via phone or email within a few hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-xl border border-[#D5ECF0] text-xs font-semibold text-[#083258] hover:bg-[#F8FDFF]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Treatment Inquiry / Pricing"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can assist you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5ECF0] text-sm text-[#083258] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white font-bold text-sm tracking-wide shadow-md transition-all hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
