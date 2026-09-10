import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SmileCare Dental Clinic",
  description: "SmileCare Dental Clinic's patient privacy and data protection policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0AADA8] hover:text-[#089692] mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl border border-[#D5ECF0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-[#0AADA8] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Patient Confidentiality
          </div>
          <h1 className="text-3xl font-extrabold text-[#083258]">
            Privacy Policy & Data Security
          </h1>
          <p className="text-xs text-[#6B8BA2]">Last Updated: March 2026</p>

          <div className="space-y-4 text-xs sm:text-sm text-[#426480] leading-relaxed">
            <p>
              At <strong>SmileCare Dental Clinic</strong>, your privacy and health data confidentiality are of paramount importance. This document outlines how patient personal information and dental diagnostic records are collected, utilized, and safeguarded.
            </p>

            <h2 className="text-base font-bold text-[#083258] pt-2">1. Health Records & Diagnostics</h2>
            <p>
              Digital radiographs (OPG, CBCT), intraoral photographs, and dental clinical notes are securely stored on HIPAA-compliant encrypted systems. These records are strictly accessed by treating doctors and dental assistants for diagnosis and treatment delivery.
            </p>

            <h2 className="text-base font-bold text-[#083258] pt-2">2. Contact Information</h2>
            <p>
              Phone numbers and email addresses collected during appointment scheduling are used solely for appointment reminders, treatment follow-ups, and dental checkup recalls. We do not sell or share patient contact details with third-party marketers.
            </p>

            <h2 className="text-base font-bold text-[#083258] pt-2">3. Patient Consent & Transparency</h2>
            <p>
              Any clinical photography used for educational or smile transformation portfolios is subject to explicit written patient consent, with patient identifying details anonymized upon request.
            </p>

            <h2 className="text-base font-bold text-[#083258] pt-2">4. Contacting Our Data Officer</h2>
            <p>
              If you have queries regarding your stored records or wish to update your contact preferences, please write to our privacy officer at <a href="mailto:privacy@smilecaredental.com" className="text-[#0AADA8] font-semibold underline">privacy@smilecaredental.com</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
