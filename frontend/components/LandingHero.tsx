"use client";

import {
  CalendarDays,
  MessageCircle,
  Phone,
  UsersRound,
  MonitorCog,
  BadgeDollarSign,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const LandingHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4FBFC]">
      {/* Soft Background Shapes */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#BCEEF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#DDF7F8]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14 xl:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:gap-14">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="z-10 max-w-xl">

            {/* Small Tagline */}
            <div className="mb-4 flex items-center gap-3 text-sm font-medium text-[#0B9DA8] sm:text-base">
              <span>Healthy Smile</span>

              <span className="h-1 w-1 rounded-full bg-[#0B9DA8]" />

              <span className="flex items-center gap-1">
                Happy Life
                <ArrowRight size={15} strokeWidth={2} />
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[42px] font-bold leading-[1.05] tracking-[-1.5px] text-[#0B3154] sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px]">
              Your Smile
              <span className="block text-[#0B9DA8]">
                Our Priority
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#49677D] sm:text-base">
              We provide advanced & affordable dental care with modern
              technology and expert doctors. Get the best care for a healthier,
              brighter smile.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              {/* Book Appointment */}
              <button
                type="button"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0B9DA8]
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_25px_rgba(11,157,168,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#07828C]
                  hover:shadow-[0_12px_30px_rgba(11,157,168,0.25)]
                "
              >
                <CalendarDays
                  size={18}
                  strokeWidth={2}
                />

                <span>Book Appointment</span>
              </button>

              {/* WhatsApp */}
              <button
                type="button"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#8CCED3]
                  bg-white
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#0B3154]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#0B9DA8]
                  hover:bg-[#EAF8F9]
                  hover:text-[#07828C]
                "
              >
                <MessageCircle
                  size={18}
                  strokeWidth={2}
                />

                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* =================================================
                FEATURES
            ================================================= */}
            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">

              {/* Expert Doctors */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DDF7F8]
                    text-[#0B9DA8]
                  "
                >
                  <UsersRound size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#0B3154]">
                    Expert Doctors
                  </h3>

                  <p className="mt-0.5 text-[10px] leading-4 text-[#718899]">
                    Skilled & Experienced
                  </p>
                </div>
              </div>

              {/* Modern Technology */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DDF7F8]
                    text-[#0B9DA8]
                  "
                >
                  <MonitorCog size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#0B3154]">
                    Modern Technology
                  </h3>

                  <p className="mt-0.5 text-[10px] leading-4 text-[#718899]">
                    Advanced Equipment
                  </p>
                </div>
              </div>

              {/* Affordable Care */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DDF7F8]
                    text-[#0B9DA8]
                  "
                >
                  <BadgeDollarSign size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#0B3154]">
                    Affordable Care
                  </h3>

                  <p className="mt-0.5 text-[10px] leading-4 text-[#718899]">
                    Quality at Best Price
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE AREA
          ===================================================== */}
          <div className="relative min-h-[430px] sm:min-h-[500px] lg:min-h-[560px]">

            {/* Main Dental Image */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[28px]
                sm:rounded-[36px]
              "
            >
              <img
                src="/images/heroimg.png"
                alt="Professional dental care"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4FBFC]/90 via-transparent to-transparent lg:from-[#F4FBFC]/80 lg:via-transparent" />
            </div>

            {/* Handwritten Text */}
            <div
              className="
                absolute
                left-[8%]
                top-[8%]
                z-10
                hidden
                rotate-[-5deg]
                text-[#0B3154]
                sm:block
              "
            >
              <p className="font-serif text-xl italic leading-7 opacity-90">
                Healthy Teeth
                <br />
                Brighter Smiles
              </p>

              <div className="mt-1 text-center text-2xl">
                ˘⌣˘
              </div>
            </div>

            {/* =================================================
                EMERGENCY CARD
            ================================================= */}
            <div
              className="
                absolute
                right-[-10px]
                top-1/2
                z-20
                w-[245px]
                -translate-y-1/2
                rounded-2xl
                border
                border-white/70
                bg-white/95
                p-5
                shadow-[0_20px_60px_rgba(11,49,84,0.15)]
                backdrop-blur-md
                sm:right-[-20px]
                sm:w-[265px]
                sm:p-6
                lg:right-[-25px]
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#DDF7F8]
                  text-[#0B9DA8]
                "
              >
                <HeartPulse size={25} strokeWidth={1.8} />
              </div>

              {/* Card Heading */}
              <h2 className="mt-4 text-base font-bold leading-5 text-[#0B3154] sm:text-lg">
                Need Emergency
                <br />
                Dental Care?
              </h2>

              <p className="mt-2 text-xs leading-5 text-[#718899]">
                We&apos;re here for you 24/7.
              </p>

              {/* Phone Button */}
              <a
                href="tel:+919876543210"
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#0B9DA8]
                  px-3
                  py-3
                  text-xs
                  font-semibold
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-[#07828C]
                "
              >
                <Phone size={16} />

                <span>+91 98765 43210</span>
              </a>

              {/* Divider */}
              <div className="my-5 h-px bg-[#DCEFF1]" />

              {/* Social */}
              <p className="text-xs font-medium text-[#718899]">
                Follow Us
              </p>

              <div className="mt-3 flex items-center gap-2">
                <SocialButton label="f" />
                <SocialButton label="◎" />
                <SocialButton label="▶" />
                <SocialButton label="in" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   SOCIAL BUTTON
============================================================= */

const SocialButton = ({ label }: { label: string }) => {
  return (
    <button
      type="button"
      aria-label={`Follow us on ${label}`}
      className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        bg-[#EAF8F9]
        text-[11px]
        font-bold
        text-[#0B9DA8]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#0B9DA8]
        hover:text-white
      "
    >
      {label}
    </button>
  );
};

export default LandingHero;