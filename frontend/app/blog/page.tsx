import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Oral Health Blog & Dental Care Tips | SmileCare Dental Clinic",
  description: "Read expert dental health advice, treatment guides, and preventive oral care tips from specialist dentists at SmileCare.",
};

const POSTS = [
  {
    id: 1,
    title: "The Truth About Root Canal Therapy: Why It Isn't Painful Anymore",
    category: "Endodontics",
    author: "Dr. Rajesh Khanna (MDS)",
    date: "March 5, 2026",
    readTime: "4 min read",
    summary: "Decades ago, root canals had a frightening reputation. Learn how modern computer-guided anesthesia, rotary files, and dental microscopes make root canals as gentle as a routine filling.",
    tag: "Patient Guide",
  },
  {
    id: 2,
    title: "Clear Aligners vs. Metal Braces: Which Is Right For Your Lifestyle?",
    category: "Orthodontics",
    author: "Dr. Ananya Sharma (MDS)",
    date: "February 28, 2026",
    readTime: "6 min read",
    summary: "Thinking of straightening your teeth? We compare comfort, aesthetics, hygiene, eating flexibility, and treatment timelines between 3D invisible aligners and ceramic braces.",
    tag: "Smile Makeover",
  },
  {
    id: 3,
    title: "Dental Implants Explained: How Titanium Roots Prevent Facial Sagging",
    category: "Implantology",
    author: "Dr. Vikram Mehta (MDS)",
    date: "February 18, 2026",
    readTime: "5 min read",
    summary: "When a tooth is lost, the underlying jawbone begins to resorb. Discover why dental implants are the only restoration method that stimulates natural bone preservation.",
    tag: "Restorative",
  },
  {
    id: 4,
    title: "7 Common Daily Habits That Quietly Wear Down Your Enamel",
    category: "Preventive Care",
    author: "Dr. Tanya Duggal (BDS)",
    date: "February 10, 2026",
    readTime: "3 min read",
    summary: "From brushing too aggressively with hard bristles to sipping lemon water throughout the day, here are simple adjustments to keep your enamel thick and cavity-resistant.",
    tag: "Oral Hygiene",
  },
  {
    id: 5,
    title: "Do Milk Teeth Really Matter? 5 Mistakes Parents Make With Kids' Teeth",
    category: "Pediatric Dentistry",
    author: "Dr. Meera Nambiar (MDS)",
    date: "January 29, 2026",
    readTime: "5 min read",
    summary: "Baby teeth hold the space for permanent teeth and affect speech and nutrition. Learn when to start brushing, how to handle thumb sucking, and fluoride essentials.",
    tag: "Parenting",
  },
  {
    id: 6,
    title: "Bleeding Gums When You Floss or Brush? Here Is What Your Body Is Saying",
    category: "Periodontics",
    author: "Dr. Arjun Kapoor (MDS)",
    date: "January 15, 2026",
    readTime: "4 min read",
    summary: "Healthy gums never bleed during routine cleaning. Understand the stages from reversible gingivitis to deep periodontitis, and why timely ultrasonic scaling saves teeth.",
    tag: "Gum Health",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Dental Wellness Knowledge
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083258] tracking-tight">
            Oral Health & Dental Guides
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#426480]">
            Expert advice, treatment comparisons, and practical oral hygiene tips written by our clinic&apos;s senior dental surgeons.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {POSTS.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl border border-[#D5ECF0] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(8,50,88,0.04)] flex flex-col justify-between hover:border-[#0AADA8]/40 hover:shadow-[0_12px_35px_rgba(8,50,88,0.08)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0AADA8] bg-[#E8F8F8] px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#6B8BA2] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#083258] group-hover:text-[#0AADA8] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-[#426480] leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D5ECF0]/60 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#6B8BA2]">
                  <span className="font-semibold text-[#083258]">{post.author}</span>
                  <span>{post.date}</span>
                </div>

                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0AADA8] hover:text-[#089692] transition-colors"
                >
                  <span>Ask A Doctor About This</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-[#083258] text-white p-8 lg:p-10 text-center">
          <h2 className="text-2xl font-bold">Have an urgent dental question?</h2>
          <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Our doctors provide personalized consultations and digital radiograph reviews to diagnose your symptoms accurately.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link
              href="/appointment"
              className="px-6 py-2.5 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-semibold shadow transition-all"
            >
              Book Dental Consultation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
