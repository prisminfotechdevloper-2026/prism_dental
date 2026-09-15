"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  X,
  Upload,
  Star,
  Sparkles,
  CheckCircle2,
  Loader2,
  Camera,
  Trash2,
} from "lucide-react";

interface ShareFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (newReview: any) => void;
}

const TREATMENTS_LIST = [
  "Teeth Whitening",
  "Dental Implants",
  "Braces & Clear Aligners",
  "Single Sitting Root Canal",
  "Cosmetic Smile Makeover",
  "Porcelain Veneers",
  "Pediatric Dental Care",
  "General Checkup & Cleaning",
  "Crowns & Bridges",
];

export function ShareFeedbackModal({
  isOpen,
  onClose,
  onSuccess,
}: ShareFeedbackModalProps) {
  const [name, setName] = useState("");
  const [treatment, setTreatment] = useState("Teeth Whitening");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("Image size must be under 5MB");
        return;
      }
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setErrorMessage("");
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage("Please enter your name");
      return;
    }
    if (!comment.trim()) {
      setErrorMessage("Please share your feedback experience");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      let finalImageUrl = "";

      // 1. Upload to Cloudinary if image selected
      if (imageFile) {
        setUploadProgress("Uploading profile photo to Cloudinary...");
        const uploadData = new FormData();
        uploadData.append("file", imageFile);

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadData,
        });

        if (!uploadRes.ok) {
          const err = await uploadRes.json();
          throw new Error(err.error || "Failed to upload image to Cloudinary");
        }

        const uploadJson = await uploadRes.json();
        finalImageUrl = uploadJson.url;
      }

      // 2. Submit Testimonial to Backend
      setUploadProgress("Saving your feedback...");
      const testimonialPayload = {
        patient_name: name.trim(),
        treatment: treatment,
        rating: rating,
        comment: comment.trim(),
        image_url: finalImageUrl,
        review_date: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        doctor: "Prism Dental Specialists",
        highlight: `${rating}★ Verified Patient Feedback`,
      };

      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialPayload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to submit testimonial");
      }

      const createdReview = await res.json();
      setIsSuccess(true);
      if (onSuccess) {
        onSuccess(createdReview);
      }

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setUploadProgress("");
    }
  };

  const handleClose = () => {
    setName("");
    setComment("");
    setImageFile(null);
    setPreviewUrl(null);
    setIsSuccess(false);
    setErrorMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#083258]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#D5ECF0] overflow-hidden">
        {/* Modal Top Banner */}
        <div className="bg-linear-to-r from-[#083258] to-[#0AADA8] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#16C4BE]" />
            </div>
            <div>
              <h3 className="font-extrabold text-base tracking-tight">
                Share Your Smile Experience
              </h3>
              <p className="text-xs text-white/80">
                Help other patients choose the right dental care
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-lg font-extrabold text-[#083258]">
              Thank You for Your Feedback!
            </h4>
            <p className="text-xs text-[#6B8BA2] max-w-xs mx-auto">
              Your review has been successfully submitted and added to our community testimonials.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            {/* Profile Image & Upload to Cloudinary */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#F8FDFF] border border-[#E0F0F3]">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-[#D5ECF0] flex items-center justify-center shrink-0">
                {previewUrl ? (
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Camera className="w-6 h-6 text-[#0AADA8]" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#083258] mb-1">
                  Profile Photo (Optional)
                </p>
                <div className="flex items-center gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleImageChange}
                    className="hidden"
                    id="patient-avatar-input"
                  />
                  <label
                    htmlFor="patient-avatar-input"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#D5ECF0] text-xs font-semibold text-[#083258] hover:bg-[#E8F8F8] hover:border-[#0AADA8] transition-colors cursor-pointer shadow-2xs"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#0AADA8]" />
                    <span>{previewUrl ? "Change Photo" : "Upload Photo"}</span>
                  </label>

                  {previewUrl && (
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="p-1 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                      title="Remove Photo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <p className="text-[10px] text-[#6B8BA2] mt-1">
                  Cloudinary hosted (JPG/PNG, max 5MB)
                </p>
              </div>
            </div>

            {/* Patient Name & Treatment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shalini Deshpande"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-[#F8FDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                  Treatment Received *
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-[#F8FDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8] cursor-pointer"
                >
                  {TREATMENTS_LIST.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
                Your Overall Rating *
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((starVal) => {
                  const isFilled =
                    hoverRating > 0
                      ? starVal <= hoverRating
                      : starVal <= rating;
                  return (
                    <button
                      key={starVal}
                      type="button"
                      onClick={() => setRating(starVal)}
                      onMouseEnter={() => setHoverRating(starVal)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                      aria-label={`${starVal} star`}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          isFilled
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="text-xs font-bold text-[#083258] ml-2">
                  {rating === 5 && "⭐⭐⭐⭐⭐ Exceptional (5/5)"}
                  {rating === 4 && "⭐⭐⭐⭐ Very Good (4/5)"}
                  {rating === 3 && "⭐⭐⭐ Good (3/5)"}
                  {rating === 2 && "⭐⭐ Fair (2/5)"}
                  {rating === 1 && "⭐ Needs Improvement (1/5)"}
                </span>
              </div>
            </div>

            {/* Feedback Review Comment */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Your Review &amp; Experience *
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tell us about the doctor's care, clinic comfort, and your treatment results..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-[#F8FDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-[#E8F1F5]">
              {uploadProgress ? (
                <div className="flex items-center gap-2 text-xs text-[#0AADA8] font-semibold">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{uploadProgress}</span>
                </div>
              ) : (
                <p className="text-[11px] text-[#6B8BA2]">
                  Directly saved to verified clinic database
                </p>
              )}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-xs font-semibold text-[#426480] hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] disabled:bg-gray-400 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Review</span>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
