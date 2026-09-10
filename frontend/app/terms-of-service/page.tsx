import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | SmileCare Dental Clinic",
  description: "SmileCare Dental Clinic's terms of service and clinical appointment guidelines.",
};

export default function TermsOfServicePage() {
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
            Clinic Guidelines
          </div>
          <h1 className="text-3xl font-extrabold text-[#083258]">
            Terms of Service & Patient Charter
          </h1>
          <p className="text-xs text-[#6B8BA2]">Last Updated: March 2026</p>

          <div className="space-y-4 text-xs sm:text-sm text-[#426480] leading-relaxed">
            <h2 className="text-base font-bold text-[#083258]">1. Appointments & Cancellations</h2>
            <p>
              We value your time. If you need to reschedule or cancel a consultation or surgical appointment, we kindly request at least 4 hours advance notice so that emergency patients may be accommodated.
            </p>

            <h2 className="text-base font-bold text-[#083258]">2. Clinical Treatment Estimates</h2>
            <p>
              Prior to commencement of any dental procedure (e.g. root canal, implant, orthodontic therapy), a transparent written cost breakdown is presented. Any changes necessitated by unforeseen anatomical factors during treatment will be discussed transparently with the patient.
            </p>

            <h2 className="text-base font-bold text-[#083258]">3. Warranty & Follow-Up</h2>
            <p>
              Dental implants and premium zirconia crowns carry clinic warranties contingent upon adherence to prescribed post-operative care and attending mandatory bi-annual maintenance checkups.
            </p>

            <h2 className="text-base font-bold text-[#083258]">4. Emergency Protocol</h2>
            <p>
              Emergency patients are prioritized based on clinical triage (acute trauma, severe hemorrhage, or uncontrollable pain).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
