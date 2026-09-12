export type GalleryCategory = "all" | "transformations" | "clinic" | "treatments" | "patients";

export type BentoSpan = "hero" | "wide" | "tall" | "standard";

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: GalleryCategory;
  imageUrl: string;
  beforeUrl?: string;
  afterUrl?: string;
  doctor: {
    name: string;
    role: string;
    avatar: string;
  };
  duration: string;
  tags: string[];
  description: string;
  bentoSpan: BentoSpan;
  featured?: boolean;
  patientQuote?: string;
  patientName?: string;
  statsHighlight?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // ── TRANSFORMATIONS (BEFORE & AFTER) ──────────────────────────
  {
    id: "trans-smile-makeover",
    title: "Full Arch Aesthetic Smile Makeover",
    subtitle: "Custom Porcelain Veneers & Laser Gingival Sculpting",
    category: "transformations",
    imageUrl: "/images/before_after/smile_after.jpg",
    beforeUrl: "/images/before_after/smile_before.jpg",
    afterUrl: "/images/before_after/smile_after.jpg",
    doctor: {
      name: "Dr. Priya Sharma",
      role: "Chief Cosmetic Dentist",
      avatar: "/images/doctors/doctor-priya.jpg",
    },
    duration: "2 Appointments (7 Days)",
    tags: ["Porcelain Veneers", "Smile Design", "Aesthetic Care"],
    description:
      "Comprehensive aesthetic transformation restoring natural tooth contour, correcting discoloration, and creating an ultra-balanced harmonious smile.",
    bentoSpan: "hero",
    featured: true,
    statsHighlight: "8 Shades Brighter • 100% Pain-Free",
    patientName: "Ananya S.",
    patientQuote: "My new smile completely transformed how I express myself every single day.",
  },
  {
    id: "trans-clear-aligners",
    title: "Diastema Closure & Arch Realignment",
    subtitle: "Digital Clear Aligners + Enamel Contouring",
    category: "transformations",
    imageUrl: "/images/before_after/case2_after.jpg",
    beforeUrl: "/images/before_after/case2_before.jpg",
    afterUrl: "/images/before_after/case2_after.jpg",
    doctor: {
      name: "Dr. Sneha Kapoor",
      role: "Lead Orthodontist",
      avatar: "/images/doctors/doctor-sneha.jpg",
    },
    duration: "6 Months Protocol",
    tags: ["Clear Aligners", "Orthodontics", "Gap Closure"],
    description:
      "Non-invasive orthodontic correction closing anterior midline space and harmonizing the dental arch with customized 3D aligners.",
    bentoSpan: "standard",
    statsHighlight: "100% Invisible Trays • Zero Metal",
    patientName: "Pooja K.",
    patientQuote: "Nobody even noticed I was wearing aligners until they saw my stunning final smile!",
  },
  {
    id: "trans-ceramic-veneers",
    title: "Minimal Prep Ceramic Veneer Restoration",
    subtitle: "Chipped Enamel Repair & Color Harmonization",
    category: "transformations",
    imageUrl: "/images/treatment/cosmetic-before-after.jpg",
    beforeUrl: "/images/before_after/smile_before.jpg",
    afterUrl: "/images/treatment/cosmetic-before-after.jpg",
    doctor: {
      name: "Dr. Priya Sharma",
      role: "Chief Cosmetic Dentist",
      avatar: "/images/doctors/doctor-priya.jpg",
    },
    duration: "3 Sessions",
    tags: ["Ceramic Veneers", "Enamel Repair", "Natural Translucency"],
    description:
      "Precision-crafted ultra-thin porcelain veneers designed with digital smile scanning to restore edge anatomy and radiant translucency.",
    bentoSpan: "standard",
    statsHighlight: "0.3mm Ultra-Thin • Lifetime Bond",
    patientName: "Rohit M.",
    patientQuote: "The precision and natural match to my real teeth exceeded every expectation.",
  },

  // ── CLINIC & HIGH-TECH FACILITIES ────────────────────────────
  {
    id: "clinic-operatory-suite",
    title: "Digital Dental Operatory Suite",
    subtitle: "Ergonomic Treatment Environment with Intraoral HD Scanners",
    category: "clinic",
    imageUrl: "/images/gallery/operatory.jpg",
    doctor: {
      name: "Dr. Rahul Verma",
      role: "Clinical Director",
      avatar: "/images/doctors/doctor-rahul.jpg",
    },
    duration: "Hospital Grade Operatory",
    tags: ["3D Scanner", "Ergonomic Suite", "Low-Radiation"],
    description:
      "Ultra-modern treatment suite equipped with real-time digital monitoring, intraoral 3D HD scanning, and ambient patient-calming lighting.",
    bentoSpan: "wide",
    featured: true,
    statsHighlight: "Zero-Gravity Chairs • HEPA Air Flow",
  },
  {
    id: "clinic-reception-lounge",
    title: "Executive Welcome Reception & Concierge",
    subtitle: "Boutique Hospitality & Stress-Free Check-in",
    category: "clinic",
    imageUrl: "/images/gallery/reception.jpg",
    doctor: {
      name: "SmileCare Care Team",
      role: "Patient Hospitality",
      avatar: "/images/logo.png",
    },
    duration: "Anxiety-Free Ambience",
    tags: ["Reception", "Patient Comfort", "Modern Architecture"],
    description:
      "Designed specifically to eliminate clinical dental anxiety with soothing interior tones, complimentary refreshment bar, and zero wait times.",
    bentoSpan: "standard",
    statsHighlight: "Zero Wait Time • Spa Ambience",
  },
  {
    id: "clinic-sterilization-corridor",
    title: "Class 100 Hospital Sterilization Wing",
    subtitle: "6-Step ISO Medical Autoclave Protocol",
    category: "clinic",
    imageUrl: "/images/gallery/corridor.jpg",
    doctor: {
      name: "Dr. Rahul Verma",
      role: "Sterilization Lead",
      avatar: "/images/doctors/doctor-rahul.jpg",
    },
    duration: "100% Sterility Standard",
    tags: ["Infection Control", "Autoclave Class B", "Safe Care"],
    description:
      "Strict hospital-grade sterilization corridor ensuring single-patient sealed packaging, chemical biological monitoring, and air filtration.",
    bentoSpan: "tall",
    statsHighlight: "100% Sealed Instruments • Class B Autoclave",
  },
  {
    id: "clinic-consultation-lounge",
    title: "Private 3D Treatment Consultation Lounge",
    subtitle: "Interactive Digital Treatment Plan Demonstrations",
    category: "clinic",
    imageUrl: "/images/gallery/lounge.jpg",
    doctor: {
      name: "Dr. Priya Sharma",
      role: "Cosmetic Consultant",
      avatar: "/images/doctors/doctor-priya.jpg",
    },
    duration: "1-on-1 Consultation",
    tags: ["Digital Preview", "Private Lounge", "Transparent Care"],
    description:
      "Dedicated comfortable space where patients review their high-definition 3D dental models and simulate post-treatment smile previews.",
    bentoSpan: "standard",
    statsHighlight: "Simulated 3D Previews Before Any Procedure",
  },
  {
    id: "clinic-center-building",
    title: "SmileCare Center of Clinical Excellence",
    subtitle: "Architectural Multi-Specialty Dental Center",
    category: "clinic",
    imageUrl: "/images/about-clinic.jpg",
    doctor: {
      name: "SmileCare Center",
      role: "Multi-Specialty Clinic",
      avatar: "/images/logo.png",
    },
    duration: "Flagship Facility",
    tags: ["State-of-the-Art", "Multi-Specialty", "Central Location"],
    description:
      "Our premier multi-specialty facility bringing cosmetic dentists, implantologists, orthodontists, and pediatric dental surgeons under one roof.",
    bentoSpan: "standard",
    statsHighlight: "4 Specialized Wings • Valet Parking",
  },

  // ── TREATMENTS & ADVANCED PROCEDURES ──────────────────────────
  {
    id: "treat-clear-aligners-tech",
    title: "AI-Powered Clear Aligner Precision",
    subtitle: "Micro-Movement Orthodontic Trackers",
    category: "treatments",
    imageUrl: "/images/blog/clear_aligners.png",
    doctor: {
      name: "Dr. Sneha Kapoor",
      role: "Specialist Orthodontist",
      avatar: "/images/doctors/doctor-sneha.jpg",
    },
    duration: "Custom Aligners",
    tags: ["Invisalign Tech", "Orthodontics", "Removable Trays"],
    description:
      "Advanced biocompatible aligners engineered using artificial intelligence to gently shift teeth with predictable, painless precision.",
    bentoSpan: "standard",
    statsHighlight: "Smooth Medical Polymer • 99% Precision",
  },
  {
    id: "treat-dental-implants",
    title: "3D Guided Titanium & Zirconia Implants",
    subtitle: "Permanent Tooth Replacement with Lifelong Stability",
    category: "treatments",
    imageUrl: "/images/blog/dental_implats.png",
    doctor: {
      name: "Dr. Rahul Verma",
      role: "Chief Implantologist",
      avatar: "/images/doctors/doctor-rahul.jpg",
    },
    duration: "Single Session Placement",
    tags: ["Dental Implants", "Guided Surgery", "Permanent Teeth"],
    description:
      "Computer-guided implantology ensuring maximum bone integration, zero damage to adjacent teeth, and immediate natural chewing function.",
    bentoSpan: "wide",
    statsHighlight: "99.4% Success Rate • Lifetime Warranty",
  },
  {
    id: "treat-laser-whitening",
    title: "Dual-Activation Laser Smile Whitening",
    subtitle: "Non-Invasive Enamel Brightening in 45 Minutes",
    category: "treatments",
    imageUrl: "/images/blog/teeth-whitening.jpg",
    doctor: {
      name: "Dr. Priya Sharma",
      role: "Cosmetic Specialist",
      avatar: "/images/doctors/doctor-priya.jpg",
    },
    duration: "45 Minutes Total",
    tags: ["Laser Whitening", "Instant Glow", "Painless"],
    description:
      "Cold-light laser activation lifting stubborn tea, coffee, and age stains without causing tooth dehydration or enamel sensitivity.",
    bentoSpan: "tall",
    statsHighlight: "Up to 8 Shades Whiter • Zero Sensitivity Gel",
  },
  {
    id: "treat-modern-braces",
    title: "Ceramic & Self-Ligating Precision Braces",
    subtitle: "Low-Friction Orthodontic Arch Alignment",
    category: "treatments",
    imageUrl: "/images/blog/teeth_braces.png",
    doctor: {
      name: "Dr. Sneha Kapoor",
      role: "Orthodontic Specialist",
      avatar: "/images/doctors/doctor-sneha.jpg",
    },
    duration: "12-18 Months",
    tags: ["Ceramic Braces", "Low Friction", "Tooth Straightening"],
    description:
      "Discreet tooth-colored brackets coupled with flexible shape-memory alloy wires for faster, comfortable realignment.",
    bentoSpan: "standard",
    statsHighlight: "Tooth-Colored Ceramic • 30% Faster Movement",
  },
  {
    id: "treat-pediatric-care",
    title: "Pediatric Gentle Smile & Preventative Care",
    subtitle: "Gentle Dental Health for Children & Teens",
    category: "treatments",
    imageUrl: "/images/blog/children-dental.jpg",
    doctor: {
      name: "Dr. Amit Patel",
      role: "Pediatric Dental Surgeon",
      avatar: "/images/doctors/doctor-amit.jpg",
    },
    duration: "30 Minutes",
    tags: ["Pediatric Care", "Fluoride Shield", "Friendly Team"],
    description:
      "Gentle dental examinations, sealants, and cavity defense routines tailored to help children build lifelong dental confidence.",
    bentoSpan: "standard",
    statsHighlight: "100% Tear-Free Approach • Fun Care Zone",
  },
  {
    id: "treat-preventive-restorative",
    title: "Biomimetic Enamel Restoration & Diagnostics",
    subtitle: "Tooth-Preserving Composite Aesthetics",
    category: "treatments",
    imageUrl: "/images/blog/commen_toot_problem.png",
    doctor: {
      name: "Dr. Rahul Verma",
      role: "Restorative Surgeon",
      avatar: "/images/doctors/doctor-rahul.jpg",
    },
    duration: "40 Minutes",
    tags: ["Biomimetic Fillings", "Cavity Defense", "Enamel Bonding"],
    description:
      "Micro-invasive restoration mimicking natural dentin elasticity and light refraction to reinforce teeth and eliminate sensitivity.",
    bentoSpan: "standard",
    statsHighlight: "Natural Layering • Microscopic Accuracy",
  },

  // ── PATIENTS & REAL SMILE STORIES ─────────────────────────────
  {
    id: "patient-ananya",
    title: "Ananya Sharma's Wedding Smile Journey",
    subtitle: "Full Aesthetic Veneer & Laser Contouring Makeover",
    category: "patients",
    imageUrl: "/images/testimonials/patient-ananya.jpg",
    doctor: {
      name: "Dr. Priya Sharma",
      role: "Chief Cosmetic Dentist",
      avatar: "/images/doctors/doctor-priya.jpg",
    },
    duration: "Completed in 10 Days",
    tags: ["Verified Patient", "Smile Makeover", "Veneers"],
    description:
      "Ananya came to SmileCare 2 months before her wedding seeking a brighter, naturally aligned smile without orthodontic braces.",
    bentoSpan: "tall",
    patientName: "Ananya Sharma, 28",
    patientQuote:
      "The warmth of the doctors and the perfection in the final veneers gave me the confidence to laugh wholeheartedly on my big day!",
    statsHighlight: "Verified 5-Star Review • Cosmetic Care",
  },
  {
    id: "patient-rohit",
    title: "Rohit Malhotra — Complete Implant Restoration",
    subtitle: "Permanent Zirconia Crown on Guided Titanium Implant",
    category: "patients",
    imageUrl: "/images/testimonials/patient-rohit.jpg",
    doctor: {
      name: "Dr. Rahul Verma",
      role: "Chief Implantologist",
      avatar: "/images/doctors/doctor-rahul.jpg",
    },
    duration: "Guided Implant Surgery",
    tags: ["Verified Patient", "Dental Implant", "Chewing Confidence"],
    description:
      "Rohit replaced a fractured lower molar with a 3D guided dental implant, restoring complete chewing strength within days.",
    bentoSpan: "standard",
    patientName: "Rohit Malhotra, 42",
    patientQuote:
      "It feels 100% just like my real tooth. The guided procedure had virtually zero pain or swelling afterwards.",
    statsHighlight: "Verified 5-Star Review • Implant Patient",
  },
  {
    id: "patient-pooja",
    title: "Pooja Kapoor — Discreet Invisible Aligners",
    subtitle: "Adult Orthodontic Correction Without Metal Brackets",
    category: "patients",
    imageUrl: "/images/testimonials/patient-pooja.jpg",
    doctor: {
      name: "Dr. Sneha Kapoor",
      role: "Lead Orthodontist",
      avatar: "/images/doctors/doctor-sneha.jpg",
    },
    duration: "7 Months Course",
    tags: ["Verified Patient", "Clear Aligners", "Invisible Trays"],
    description:
      "As a corporate consultant, Pooja required invisible orthodontics. SmileCare customized 14 sets of aligners for seamless results.",
    bentoSpan: "standard",
    patientName: "Pooja Kapoor, 31",
    patientQuote:
      "Wearing aligners during client meetings was completely invisible. Dr. Sneha's check-ins kept everything right on schedule.",
    statsHighlight: "Verified 5-Star Review • Orthodontics",
  },
  {
    id: "patient-karan",
    title: "Karan Dave — Complex Bite & Enamel Restoration",
    subtitle: "Full Dental Rehabilitation & Natural Aesthetic Balance",
    category: "patients",
    imageUrl: "/images/testimonials/patient-karan.jpg",
    doctor: {
      name: "Dr. Rahul Verma",
      role: "Prosthodontist",
      avatar: "/images/doctors/doctor-rahul.jpg",
    },
    duration: "Multidisciplinary Plan",
    tags: ["Verified Patient", "Rehabilitation", "Bite Balance"],
    description:
      "Restored severely worn enamel and uneven bite pressure using ceramic inlays and aesthetic crowns.",
    bentoSpan: "standard",
    patientName: "Karan Dave, 46",
    patientQuote:
      "I suffered from jaw tension and dull teeth for years. SmileCare engineered a complete fix that looks and feels incredible.",
    statsHighlight: "Verified 5-Star Review • Full Rehabilitation",
  },
  {
    id: "patient-sneha",
    title: "Sneha Verma — Express Laser Brightening",
    subtitle: "Safe In-Office Whitening Session for Photo Shoot",
    category: "patients",
    imageUrl: "/images/testimonials/patient-sneha.jpg",
    doctor: {
      name: "Dr. Priya Sharma",
      role: "Cosmetic Specialist",
      avatar: "/images/doctors/doctor-priya.jpg",
    },
    duration: "45-Minute Session",
    tags: ["Verified Patient", "Laser Whitening", "Instant Results"],
    description:
      "Fast, painless laser teeth whitening session achieving 7 shades improvement with zero tooth sensitivity.",
    bentoSpan: "standard",
    patientName: "Sneha Verma, 26",
    patientQuote:
      "I was worried about tooth sensitivity, but the special protective gel made it completely painless. Look at this shine!",
    statsHighlight: "Verified 5-Star Review • Laser Whitening",
  },
  {
    id: "patient-amit",
    title: "Amit Patel & Family — Lifelong Preventative Care",
    subtitle: "Comprehensive Family Hygiene & Digital Scan",
    category: "patients",
    imageUrl: "/images/testimonials/patient-amit.jpg",
    doctor: {
      name: "Dr. Amit Patel",
      role: "Preventive Care Lead",
      avatar: "/images/doctors/doctor-amit.jpg",
    },
    duration: "Annual Checkup",
    tags: ["Verified Patient", "Family Dental", "Preventive Care"],
    description:
      "Routine preventive checkup and ultrasonic cleaning keeping the entire Patel family cavity-free and smiling bright.",
    bentoSpan: "standard",
    patientName: "Amit Patel, 38",
    patientQuote:
      "The entire family loves coming here. The doctors are exceptionally gentle, knowledgeable, and caring.",
    statsHighlight: "Verified 5-Star Review • Family Care",
  },
];

export interface BeforeAfterCase {
  id: string;
  title: string;
  tag: string;
  beforeImg: string;
  afterImg: string;
  procedure: string;
  duration: string;
  doctor: string;
  doctorRole: string;
  doctorAvatar: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-smile-makeover",
    title: "Full Arch Aesthetic Smile Makeover",
    tag: "Cosmetic Dentistry",
    beforeImg: "/images/before_after/smile_before.jpg",
    afterImg: "/images/before_after/smile_after.jpg",
    procedure: "Porcelain Veneers + Laser Gum Contouring",
    duration: "2 Sessions (7 Days)",
    doctor: "Dr. Priya Sharma",
    doctorRole: "Chief Cosmetic Dentist",
    doctorAvatar: "/images/doctors/doctor-priya.jpg",
    summary:
      "Eliminated dark spaces, corrected deep intrinsic staining, and crafted symmetrical natural tooth proportions designed specifically for the patient's facial profile.",
    metrics: [
      { label: "Shades Whiter", value: "+8 Shades" },
      { label: "Durability", value: "15+ Years" },
      { label: "Comfort Rating", value: "10/10 Pain-Free" },
    ],
  },
  {
    id: "case-diastema-closure",
    title: "Clear Aligners Diastema & Alignment",
    tag: "Orthodontic Aligners",
    beforeImg: "/images/before_after/case2_before.jpg",
    afterImg: "/images/before_after/case2_after.jpg",
    procedure: "Custom Digital Aligners (14 Trays)",
    duration: "6 Months Protocol",
    doctor: "Dr. Sneha Kapoor",
    doctorRole: "Specialist Orthodontist",
    doctorAvatar: "/images/doctors/doctor-sneha.jpg",
    summary:
      "Closed a prominent 3.5mm anterior gap and corrected rotational tipping without metal brackets or wire adjustments.",
    metrics: [
      { label: "Gap Closed", value: "3.5 mm Exact" },
      { label: "Aligner Trays", value: "14 Custom Trays" },
      { label: "Treatment Time", value: "6 Months" },
    ],
  },
  {
    id: "case-ceramic-makeover",
    title: "Ceramic Veneers & Micro-Bonding",
    tag: "Enamel Restoration",
    beforeImg: "/images/before_after/smile_before.jpg",
    afterImg: "/images/treatment/cosmetic-before-after.jpg",
    procedure: "Ultra-Thin Ceramic Veneers",
    duration: "3 Appointments",
    doctor: "Dr. Priya Sharma",
    doctorRole: "Chief Cosmetic Dentist",
    doctorAvatar: "/images/doctors/doctor-priya.jpg",
    summary:
      "Restored chipped incisal edges, corrected discoloration, and aligned the smile arc with hand-layered ceramic veneers.",
    metrics: [
      { label: "Veneer Thickness", value: "0.3 mm Ultra-Thin" },
      { label: "Natural Translucency", value: "100% Lifelike" },
      { label: "Patient Satisfaction", value: "100% Happy" },
    ],
  },
];

export interface ClinicSpace {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  features: string[];
  specs: {
    label: string;
    val: string;
  }[];
}

export const CLINIC_SPACES: ClinicSpace[] = [
  {
    id: "suite-operatory",
    name: "Digital Operatory Suite",
    tagline: "3D Intraoral Scanning & Ergonomic Comfort",
    description:
      "Designed with floor-to-ceiling natural light, acoustic dampening, intraoral cameras, and low-radiation digital imaging for precise, painless procedures.",
    imageUrl: "/images/gallery/operatory.jpg",
    features: [
      "Ultra-low radiation digital panoramic imaging",
      "Memory foam contoured ergonomic patient chairs",
      "Real-time chairside screen for treatment previews",
      "Quiet micro-motor handpieces to reduce sound anxiety",
    ],
    specs: [
      { label: "Technology", val: "3D Intraoral HD Scanner" },
      { label: "Air Filtration", val: "HEPA Medical Air Exchangers" },
      { label: "Comfort Level", val: "Zero-Gravity Ergonomics" },
    ],
  },
  {
    id: "suite-reception",
    name: "Welcome Concierge Lounge",
    tagline: "Boutique Hospitality & Relaxing Sanctuary",
    description:
      "A serene, stress-free hospitality environment that welcomes you with calming tea, high-speed Wi-Fi, and personalized concierge care.",
    imageUrl: "/images/gallery/reception.jpg",
    features: [
      "Digital touchless check-in within 30 seconds",
      "Complimentary organic refreshment bar",
      "Zero clinical smell with therapeutic aromatherapy",
      "Dedicated concierge host for any scheduling assistance",
    ],
    specs: [
      { label: "Wait Time", val: "Under 3 Minutes Average" },
      { label: "Atmosphere", val: "Warm Hospitality" },
      { label: "Connectivity", val: "High-Speed Patient Wi-Fi" },
    ],
  },
  {
    id: "suite-sterilization",
    name: "Class 100 Hospital Sterilization Wing",
    tagline: "Six-Stage Infection Control & Autoclave Protocol",
    description:
      "Our transparent glass sterilization laboratory exceeds international healthcare cleanliness standards with sealed pouch vacuum autoclaving.",
    imageUrl: "/images/gallery/corridor.jpg",
    features: [
      "Class B medical vacuum autoclaves with digital cycle logs",
      "Single-use biological indicator verification on every batch",
      "Medical-grade ultrasonic instrument decontamination",
      "Color-coded tracking badges for 100% sterility trace",
    ],
    specs: [
      { label: "Standard", val: "ISO & CDC Infection Control" },
      { label: "Monitoring", val: "Digital Biological Logging" },
      { label: "Protocol", val: "6-Step Vacuum Sterilization" },
    ],
  },
  {
    id: "suite-lounge",
    name: "3D Consultation & Planning Lounge",
    tagline: "Transparent Treatment Discussions & Smile Simulation",
    description:
      "A private sanctuary where you and your doctor collaborate on customized smile blueprints with complete cost transparency.",
    imageUrl: "/images/gallery/lounge.jpg",
    features: [
      "Large interactive 4K display for 3D smile design",
      "Side-by-side computer mockups before any work starts",
      "Completely private acoustic conversation room",
      "Detailed written take-home roadmap and transparent fees",
    ],
    specs: [
      { label: "Privacy", val: "100% Soundproof Suite" },
      { label: "Visualization", val: "4K Digital Smile Simulation" },
      { label: "Financing", val: "0% EMI Clear Guidance" },
    ],
  },
];
