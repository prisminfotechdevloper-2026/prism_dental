"use client";

import React, { useState } from "react";
import { Mail, Send, Check } from "lucide-react";

export function BlogNewsletterWidget() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#00858e] to-[#015862] text-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,133,142,0.22)] overflow-hidden">
      {/* Background soft glow / pattern */}
      <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#16C4BE]/15 blur-xl pointer-events-none" />

      {/* Header Icon */}
      <div className="relative mb-3.5">
        <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center backdrop-blur-xs text-white">
          <Mail className="w-5 h-5" />
        </div>
      </div>

      {/* Title & Subtitle */}
      <h3 className="text-lg font-bold text-white tracking-tight mb-1.5">
        Subscribe to Our Blog
      </h3>
      <p className="text-xs text-white/80 leading-relaxed mb-5">
        Get the latest dental tips, news and updates straight to your inbox.
      </p>

      {/* Form / Subscription State */}
      {isSubscribed ? (
        <div className="bg-white/15 border border-white/30 rounded-xl p-3 flex items-center gap-2.5 mb-6 animate-in fade-in duration-300">
          <div className="w-6 h-6 rounded-full bg-white text-[#00858e] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <p className="text-xs font-semibold text-white">
            Thank you for subscribing!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="relative flex items-center mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            required
            className="w-full bg-white text-[#083258] placeholder-[#7999A8] text-xs rounded-xl pl-3.5 pr-11 py-3 focus:outline-none focus:ring-2 focus:ring-[#16C4BE] shadow-xs"
          />
          <button
            type="submit"
            className="absolute right-1.5 w-8 h-8 rounded-lg bg-[#00858e] hover:bg-[#006e76] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Subscribe"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      )}

      {/* Doodle Artwork: Tooth icon + handwritten text */}
      <div className="flex items-center justify-between pt-2 border-t border-white/15">
        {/* Tooth SVG Outline */}
        <div className="w-10 h-10 shrink-0 text-white/80 flex items-center justify-center">
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2C9.5 2 8 3.5 6.5 5.5C5 7.5 4 10 4 13C4 16.5 5.5 22 7.5 22C9.5 22 10 18 12 18C14 18 14.5 22 16.5 22C18.5 22 20 16.5 20 13C20 10 19 7.5 17.5 5.5C16 3.5 14.5 2 12 2Z" />
          </svg>
        </div>

        {/* Cursive Handwriting Text */}
        <div className="text-right">
          <p className="font-handwriting text-xl sm:text-2xl text-white/95 leading-none -rotate-3 select-none">
            Healthy Smiles
          </p>
          <div className="flex items-center justify-end gap-1.5">
            <p className="font-handwriting text-lg sm:text-xl text-white/90 leading-none -rotate-2 select-none">
              Happier You
            </p>
            {/* Smile doodle */}
            <svg
              className="w-4 h-3 text-white/80 stroke-current"
              viewBox="0 0 20 10"
              fill="none"
            >
              <path
                d="M2 3 Q 10 10, 18 3"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
