/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import {
  INITIAL_DOCTORS,
  INITIAL_TREATMENTS,
  INITIAL_APPOINTMENTS,
  INITIAL_CONTACT_ENQUIRIES,
  INITIAL_TESTIMONIALS,
  INITIAL_GALLERY_CASES,
  INITIAL_BLOG_POSTS,
  INITIAL_CLINIC_SETTINGS,
} from "../data/initialData";

const AdminContext = createContext();

// Helper to load or initialize localStorage
const getLocalData = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (err) {
    console.error(`Error reading ${key} from localStorage:`, err);
    return fallback;
  }
};

export function AdminProvider({ children }) {
  const [appointments, setAppointments] = useState(() =>
    getLocalData("sc_admin_appointments", INITIAL_APPOINTMENTS)
  );
  const [doctors, setDoctors] = useState(() =>
    getLocalData("sc_admin_doctors", INITIAL_DOCTORS)
  );
  const [treatments, setTreatments] = useState(() =>
    getLocalData("sc_admin_treatments", INITIAL_TREATMENTS)
  );
  const [enquiries, setEnquiries] = useState(() =>
    getLocalData("sc_admin_enquiries", INITIAL_CONTACT_ENQUIRIES)
  );
  const [testimonials, setTestimonials] = useState(() =>
    getLocalData("sc_admin_testimonials", INITIAL_TESTIMONIALS)
  );
  const [galleryCases, setGalleryCases] = useState(() =>
    getLocalData("sc_admin_gallery", INITIAL_GALLERY_CASES)
  );
  const [blogPosts, setBlogPosts] = useState(() =>
    getLocalData("sc_admin_blogs", INITIAL_BLOG_POSTS)
  );
  const [settings, setSettings] = useState(() => {
    const saved = getLocalData("sc_admin_settings", INITIAL_CLINIC_SETTINGS);
    if (
      !saved.email ||
      saved.email === "care@smilecaredental.com" ||
      saved.phone === "+91 98765 43210"
    ) {
      return {
        ...saved,
        ...INITIAL_CLINIC_SETTINGS,
      };
    }
    return saved;
  });

  // Active navigation tab
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("sc_admin_appointments", JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem("sc_admin_doctors", JSON.stringify(doctors));
  }, [doctors]);

  useEffect(() => {
    localStorage.setItem("sc_admin_treatments", JSON.stringify(treatments));
  }, [treatments]);

  useEffect(() => {
    localStorage.setItem("sc_admin_enquiries", JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem("sc_admin_testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem("sc_admin_gallery", JSON.stringify(galleryCases));
  }, [galleryCases]);

  useEffect(() => {
    localStorage.setItem("sc_admin_blogs", JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem("sc_admin_settings", JSON.stringify(settings));
  }, [settings]);

  // Sync testimonials from backend API if available
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/testimonials/")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Failed to fetch backend testimonials");
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((t) => ({
            id: t.id,
            patientName: t.patient_name || t.patientName || "Verified Patient",
            treatment: t.treatment || "Dental Treatment",
            rating: t.rating || 5,
            comment: t.comment || "",
            date:
              t.review_date ||
              t.date ||
              new Date(t.created_at || Date.now()).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }),
            image: t.image_url || t.image || "",
            verified: t.verified ?? true,
            featured: t.featured ?? false,
            highlight: t.highlight || "",
          }));
          setTestimonials(mapped);
        }
      })
      .catch((err) => {
        console.info("Using local admin testimonials storage:", err?.message);
      });
  }, []);

  // Appointment operations
  const addAppointment = (newApt) => {
    const id = `APT-${Math.floor(1000 + Math.random() * 9000)}`;
    const createdDate = new Date().toISOString().split("T")[0];
    const item = {
      ...newApt,
      id,
      createdDate,
      whatsappSent: false,
      emailSent: false,
      paymentStatus: newApt.paymentStatus || "Pending",
      status: newApt.status || "New",
    };
    setAppointments((prev) => [item, ...prev]);
    showToast(`Appointment booked successfully for ${newApt.name}`);
    return item;
  };

  const updateAppointment = (id, fields) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, ...fields } : apt))
    );
    showToast("Appointment details updated successfully");
  };

  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
    showToast(`Appointment status updated to ${newStatus}`);
  };

  const deleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
    showToast("Appointment removed", "info");
  };

  const markWhatsAppSent = (id) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, whatsappSent: true } : apt))
    );
    showToast("WhatsApp notification logged & sent");
  };

  const markEmailSent = (id) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, emailSent: true } : apt))
    );
    showToast("Email notification logged & sent");
  };

  // Doctors operations
  const addDoctor = (doc) => {
    const id = `dr-${doc.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${Date.now().toString().slice(-4)}`;
    const newDoc = {
      ...doc,
      id,
      rating: doc.rating || 5.0,
      reviewCount: doc.reviewCount || 0,
      available: true,
      todayAppointments: 0,
    };
    setDoctors((prev) => [...prev, newDoc]);
    showToast(`Doctor ${doc.name} added to clinic roster`);
  };

  const updateDoctor = (id, fields) => {
    setDoctors((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, ...fields } : doc))
    );
    showToast("Doctor profile updated");
  };

  const toggleDoctorAvailability = (id) => {
    setDoctors((prev) =>
      prev.map((doc) => {
        if (doc.id === id) {
          const updated = !doc.available;
          showToast(
            `${doc.name} marked as ${updated ? "Available" : "Unavailable"}`
          );
          return { ...doc, available: updated };
        }
        return doc;
      })
    );
  };

  const deleteDoctor = (id) => {
    setDoctors((prev) => prev.filter((doc) => doc.id !== id));
    showToast("Doctor removed from roster", "info");
  };

  // Treatments operations
  const addTreatment = (item) => {
    const id = `treat-${Date.now()}`;
    setTreatments((prev) => [...prev, { ...item, id, active: true }]);
    showToast(`Treatment "${item.name}" added`);
  };

  const updateTreatment = (id, fields) => {
    setTreatments((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...fields } : t))
    );
    showToast("Treatment updated");
  };

  const toggleTreatmentActive = (id) => {
    setTreatments((prev) =>
      prev.map((t) => (t.id === id ? { ...t, active: !t.active } : t))
    );
    showToast("Treatment status toggled");
  };

  const deleteTreatment = (id) => {
    setTreatments((prev) => prev.filter((t) => t.id !== id));
    showToast("Treatment removed", "info");
  };

  // Enquiries operations
  const updateEnquiryStatus = (id, status) => {
    setEnquiries((prev) =>
      prev.map((enq) => (enq.id === id ? { ...enq, status } : enq))
    );
    showToast(`Enquiry marked as ${status}`);
  };

  const deleteEnquiry = (id) => {
    setEnquiries((prev) => prev.filter((enq) => enq.id !== id));
    showToast("Enquiry removed", "info");
  };

  // Testimonials
  const addTestimonial = (item) => {
    const id = `test-${Date.now()}`;
    setTestimonials((prev) => [
      { ...item, id, verified: true, featured: false },
      ...prev,
    ]);
    showToast("Patient review added");
  };

  const toggleTestimonialFeatured = (id) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, featured: !t.featured } : t))
    );
    showToast("Featured status updated");
  };

  const toggleTestimonialVerified = (id) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, verified: !t.verified } : t))
    );
    showToast("Verification status updated");
  };

  const deleteTestimonial = async (id) => {
    try {
      const token =
        localStorage.getItem("prism_admin_token") ||
        sessionStorage.getItem("prism_admin_token");
      const headers = {};
      if (token && !token.startsWith("mock-")) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      await fetch(`http://127.0.0.1:8000/api/testimonials/${id}/`, {
        method: "DELETE",
        headers,
      });
    } catch (e) {
      console.warn("Backend delete call skipped:", e);
    }
    setTestimonials((prev) => prev.filter((t) => String(t.id) !== String(id)));
    showToast("Patient review deleted from clinic records", "info");
  };

  // Gallery
  const addGalleryCase = (item) => {
    const id = `case-${Date.now()}`;
    setGalleryCases((prev) => [{ ...item, id }, ...prev]);
    showToast("Gallery case added with patient consent");
  };

  const deleteGalleryCase = (id) => {
    setGalleryCases((prev) => prev.filter((c) => c.id !== id));
    showToast("Gallery case removed", "info");
  };

  // Blog
  const addBlogPost = (post) => {
    const id = `blog-${Date.now()}`;
    setBlogPosts((prev) => [
      {
        ...post,
        id,
        views: 0,
        date: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      },
      ...prev,
    ]);
    showToast("Blog article created");
  };

  const updateBlogPost = (id, fields) => {
    setBlogPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...fields } : p))
    );
    showToast("Article updated");
  };

  const toggleBlogStatus = (id) => {
    setBlogPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated = p.status === "Published" ? "Draft" : "Published";
          showToast(`Article set to ${updated}`);
          return { ...p, status: updated };
        }
        return p;
      })
    );
  };

  const deleteBlogPost = (id) => {
    setBlogPosts((prev) => prev.filter((p) => p.id !== id));
    showToast("Article deleted", "info");
  };

  // Settings
  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
    showToast("Clinic settings saved successfully");
  };

  // Reset to factory seed data
  const resetToFactoryData = () => {
    setAppointments(INITIAL_APPOINTMENTS);
    setDoctors(INITIAL_DOCTORS);
    setTreatments(INITIAL_TREATMENTS);
    setEnquiries(INITIAL_CONTACT_ENQUIRIES);
    setTestimonials(INITIAL_TESTIMONIALS);
    setGalleryCases(INITIAL_GALLERY_CASES);
    setBlogPosts(INITIAL_BLOG_POSTS);
    setSettings(INITIAL_CLINIC_SETTINGS);
    showToast("Database reset to initial clinic data", "info");
  };

  // Computed statistics
  const todayStr = new Date().toISOString().split("T")[0];
  const totalAppointments = appointments.length;
  const todayAppointments = appointments.filter((a) => a.date === todayStr);
  const newAppointments = appointments.filter((a) => a.status === "New");
  const confirmedAppointments = appointments.filter((a) => a.status === "Confirmed");
  const completedAppointments = appointments.filter((a) => a.status === "Completed");
  const cancelledAppointments = appointments.filter((a) => a.status === "Cancelled");
  const newEnquiriesCount = enquiries.filter((e) => e.status === "New").length;
  const availableDoctorsCount = doctors.filter((d) => d.available).length;

  return (
    <AdminContext.Provider
      value={{
        appointments,
        doctors,
        treatments,
        enquiries,
        testimonials,
        galleryCases,
        blogPosts,
        settings,
        currentTab,
        setCurrentTab,
        searchQuery,
        setSearchQuery,
        toast,
        showToast,
        // Appointment actions
        addAppointment,
        updateAppointment,
        updateAppointmentStatus,
        deleteAppointment,
        markWhatsAppSent,
        markEmailSent,
        // Doctor actions
        addDoctor,
        updateDoctor,
        toggleDoctorAvailability,
        deleteDoctor,
        // Treatment actions
        addTreatment,
        updateTreatment,
        toggleTreatmentActive,
        deleteTreatment,
        // Enquiry actions
        updateEnquiryStatus,
        deleteEnquiry,
        // Testimonials
        addTestimonial,
        toggleTestimonialFeatured,
        toggleTestimonialVerified,
        deleteTestimonial,
        // Gallery
        addGalleryCase,
        deleteGalleryCase,
        // Blog
        addBlogPost,
        updateBlogPost,
        toggleBlogStatus,
        deleteBlogPost,
        // Settings & Reset
        updateSettings,
        resetToFactoryData,
        // Stats
        stats: {
          totalAppointments,
          todayAppointmentsCount: todayAppointments.length,
          newAppointmentsCount: newAppointments.length,
          confirmedAppointmentsCount: confirmedAppointments.length,
          completedAppointmentsCount: completedAppointments.length,
          cancelledAppointmentsCount: cancelledAppointments.length,
          newEnquiriesCount,
          availableDoctorsCount,
          totalDoctorsCount: doctors.length,
        },
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return ctx;
}
