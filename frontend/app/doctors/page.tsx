import React from "react";
import Link from "next/link";
import {
  Users,
  Award,
  CalendarDays,
  Clock,
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "Specialist Doctors & Dentists | SmileCare Dental Clinic",
  description: "Meet our board-certified dental surgeons, implantologists, orthodontists, and endodontists at SmileCare Dental Clinic.",
};

const DOCTORS = [
  {
    name: "Dr. Vikram Mehta",
    role: "Chief Dental Surgeon & Implantologist",
    qualifications: "BDS, MDS (Prosthodontics), ICOI Fellow (USA)",
    experience: "16+ Years Experience",
    speciality: "Dental Implants, Full-Mouth Rehabilitation & Zirconia Bridges",
    days: "Mon, Wed, Fri, Sat",
    bio: "Dr. Vikram is an internationally certified implantologist with over 3,500 successful titanium and immediate-load implant procedures. He is recognized for his precise, gentle surgical approach.",
    cases: "3,500+ Implants Placed",
  },
  {
    name: "Dr. Ananya Sharma",
    role: "Lead Orthodontist & Clear Aligner Specialist",
    qualifications: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    experience: "12+ Years Experience",
    speciality: "Invisalign, Clear 3D Aligners, Ceramic & Lingual Braces",
    days: "Mon, Tue, Thu, Sat",
    bio: "Diamond-level certified provider with extensive expertise in correcting severe crowding, open bites, and jaw alignment using virtually invisible 3D digital aligners.",
    cases: "2,200+ Aligners Treated",
  },
  {
    name: "Dr. Rajesh Khanna",
    role: "Senior Endodontist & Micro-Surgeon",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experience: "14+ Years Experience",
    speciality: "Single-Sitting RCT, Laser Endodontics & Tooth Restorations",
    days: "Tue, Wed, Fri, Sun",
    bio: "Pioneer in rotary microscopic root canal therapies. Dr. Rajesh specializes in salvaging severely compromised teeth and executing 100% painless root canal treatments.",
    cases: "5,000+ Painless RCTs",
  },
  {
    name: "Dr. Meera Nambiar",
    role: "Specialist Pediatric Dentist",
    qualifications: "BDS, MDS (Pediatric & Preventive Dentistry)",
    experience: "9+ Years Experience",
    speciality: "Kids Dentistry, Fluoride Therapy, Habit Appliances & Pulpotomy",
    days: "Mon, Thu, Sat, Sun",
    bio: "Known for her soothing, child-friendly approach that turns nervous children into enthusiastic dental patients. Expert in preventive sealants and gentle cavity treatments.",
    cases: "3,000+ Young Smiles",
  },
  {
    name: "Dr. Arjun Kapoor",
    role: "Consultant Oral & Maxillofacial Surgeon",
    qualifications: "BDS, MDS (Oral & Maxillofacial Surgery)",
    experience: "11+ Years Experience",
    speciality: "Wisdom Tooth Impactions, Bone Grafting & Maxillofacial Trauma",
    days: "Wed, Fri, Sat",
    bio: "Expert in complex surgical extractions and advanced bone augmentation. Ensures safe, quick, minimally invasive surgeries with smooth post-operative recovery.",
    cases: "2,800+ Surgical Procedures",
  },
  {
    name: "Dr. Tanya Duggal",
    role: "Cosmetic Dentist & Smile Stylist",
    qualifications: "BDS, Fellowship in Aesthetic Dentistry (Germany)",
    experience: "8+ Years Experience",
    speciality: "Porcelain Veneers, Composite Bonding & Teeth Whitening",
    days: "Mon, Tue, Thu, Fri",
    bio: "Passionate about aesthetic facial harmony and natural-looking smile makeovers. Designs custom digital smiles tailored to each patient's facial profile.",
    cases: "1,500+ Smile Makeovers",
  },
];

export default function DoctorsPage() {
  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            Specialist Clinical Team
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083258] tracking-tight">
            Meet Our Specialist Dentists
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#426480]">
            Our board-certified dentists bring decades of combined clinical expertise across Implantology, Orthodontics, Endodontics, and Cosmetic Dentistry.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOCTORS.map((doc, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#D5ECF0] bg-white p-6 sm:p-7 shadow-[0_4px_25px_rgba(8,50,88,0.05)] flex flex-col justify-between hover:border-[#0AADA8]/40 hover:shadow-[0_12px_35px_rgba(8,50,88,0.08)] transition-all"
            >
              <div className="space-y-4">
                {/* Doctor Avatar Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#E8F8F8] text-[#0AADA8] flex items-center justify-center font-bold text-xl ring-2 ring-[#BCEBE9]">
                    {doc.name.split(" ")[1]?.[0] || "D"}
                  </div>
                  <span className="text-[11px] font-bold text-[#026EB9] bg-[#EBF4FB] px-2.5 py-1 rounded-full">
                    {doc.experience}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#083258]">{doc.name}</h2>
                  <p className="text-xs font-semibold text-[#0AADA8] mt-0.5">{doc.role}</p>
                </div>

                <div className="space-y-2 text-xs text-[#426480] bg-[#F8FDFF] p-3 rounded-xl border border-[#D5ECF0]/60">
                  <div className="flex items-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#0AADA8] shrink-0 mt-0.5" />
                    <span className="text-[11px] font-medium">{doc.qualifications}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#026EB9] shrink-0 mt-0.5" />
                    <span className="text-[11px]">Available: <strong>{doc.days}</strong></span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#0AADA8] shrink-0 mt-0.5" />
                    <span className="text-[11px] font-semibold text-[#083258]">{doc.cases}</span>
                  </div>
                </div>

                <p className="text-xs text-[#426480] leading-relaxed">
                  {doc.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D5ECF0]/60">
                <Link
                  href="/appointment"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>Book With {doc.name.split(" ")[0]} {doc.name.split(" ")[1]}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
