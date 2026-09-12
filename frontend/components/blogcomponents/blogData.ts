import { BlogArticle, BlogCategoryItem, RecentPostItem } from "./types";

export const FILTER_CATEGORIES: string[] = [
  "All",
  "General Dentistry",
  "Oral Health",
  "Treatment Guide",
  "Dental Care Tips",
  "Lifestyle",
];

export const SIDEBAR_CATEGORIES: BlogCategoryItem[] = [
  { name: "General Dentistry", count: 6, iconName: "ShieldCheck" },
  { name: "Oral Health", count: 8, iconName: "HeartPulse" },
  { name: "Treatment Guide", count: 7, iconName: "FileSpreadsheet" },
  { name: "Dental Care Tips", count: 5, iconName: "Sparkles" },
  { name: "Cosmetic Dentistry", count: 4, iconName: "Smile" },
  { name: "Kids Dentistry", count: 3, iconName: "Baby" },
  { name: "Restorative Dentistry", count: 4, iconName: "Activity" },
  { name: "Aligners", count: 3, iconName: "Layers" },
];

export const ARTICLES_DATA: BlogArticle[] = [
  {
    id: "habit-healthier-smile",
    category: "General Dentistry",
    categoryBadge: "General Dentistry",
    title: "5 Simple Daily Habits for a Healthier Smile",
    excerpt:
      "Your smile is one of your greatest assets. These 5 easy daily habits can help you maintain strong teeth, fresh breath and good oral health for life.",
    image: "/images/blog/teeth-care-tips.jpg",
    author: "Dr. Priya Sharma",
    authorRole: "Chief Dental Surgeon",
    date: "12 Aug 2025",
    readTime: "5 min read",
    tags: ["OralHygiene", "DailyCare", "HealthyTeeth", "DentistTips"],
    content: [
      "Brushing twice a day for two full minutes is the bedrock of good oral hygiene. Be sure to hold your brush at a 45-degree angle to the gumline and clean all tooth surfaces gently with small circular motions.",
      "Flossing once a day removes plaque and food debris trapped between teeth where bristles cannot reach. Skipping flossing leaves nearly 35% of tooth surfaces uncleaned, leading to interdental decay.",
      "Hydration with clean water washes away food particles, stimulates saliva production, and neutralizes acidic plaque that causes enamel erosion.",
      "Limiting sugary snacks and acidic beverages protects your enamel against acid-producing bacteria that cause cavities and sensitive teeth.",
      "Scheduling biannual professional cleanings and checkups ensures early detection of potential problems before they develop into expensive, painful dental issues."
    ],
  },
  {
    id: "why-regular-checkups",
    category: "Oral Health",
    categoryBadge: "Oral Health",
    title: "Why Regular Dental Checkups Are Important?",
    excerpt:
      "Routine dental checkups help in early detection of problems, prevent serious issues and keep your smile healthy and bright for years.",
    image: "/images/blog/dental-implants.jpg",
    author: "Dr. Arun Mehta",
    authorRole: "Consultant Periodontist",
    date: "10 Aug 2025",
    readTime: "4 min read",
    tags: ["Checkup", "PreventiveCare", "OralHealth", "DentalExam"],
    content: [
      "Even with meticulous brushing and flossing at home, plaque hardens into tartar over time. Only professional dental tools can safely and completely remove stubborn tartar.",
      "Routine checkups include comprehensive oral cancer screenings, gum health evaluations, and digital X-rays to detect hidden cavities beneath old fillings or between teeth.",
      "Early diagnosis is key: treating a minor cavity with a simple composite filling takes 30 minutes and prevents the future need for a root canal treatment or dental crown.",
      "Gum disease often progresses silently without pain in its early stages. Regular examinations catch gingivitis before it progresses to irreversible periodontitis with bone loss."
    ],
  },
  {
    id: "braces-vs-aligners",
    category: "Treatment Guide",
    categoryBadge: "Treatment Guide",
    title: "Braces vs Aligners – Which One Is Right for You?",
    excerpt:
      "Confused between braces and aligners? Here's a complete comparison to help you choose the best option for your smile, lifestyle and budget.",
    image: "/images/blog/teeth_braces.png",
    author: "Dr. Sneha Verma",
    authorRole: "Orthodontist Specialist",
    date: "10 Aug 2025",
    readTime: "6 min read",
    tags: ["Orthodontics", "Braces", "Aligners", "SmileCorrection"],
    content: [
      "Traditional metal braces remain the most versatile and powerful solution for severe crowding, significant rotations, and complex bite misalignments.",
      "Clear aligners offer virtually invisible aesthetic correction with the unmatched convenience of being removable for meals, brushing, and special occasions.",
      "Compliance is critical: aligners must be worn 20-22 hours every day to achieve expected results, whereas braces work continuously 24/7 without requiring discipline to reinsert.",
      "During an in-depth orthodontic consultation, digital 3D scans help determine whether clear aligners or fixed braces are ideal for your unique dental anatomy and daily lifestyle."
    ],
  },
  {
    id: "teeth-whitening-benefits",
    category: "Cosmetic Dentistry",
    categoryBadge: "Cosmetic Dentistry",
    title: "Teeth Whitening: Benefits, Process & Aftercare",
    excerpt:
      "Get a brighter and more confident smile with professional teeth whitening. Learn about the benefits, process and how to maintain the results.",
    image: "/images/blog/teeth-whitening.jpg",
    author: "Dr. Priya Sharma",
    authorRole: "Cosmetic Dental Expert",
    date: "10 Aug 2025",
    readTime: "5 min read",
    tags: ["TeethWhitening", "Cosmetic", "SmileMakeover", "BrightSmile"],
    content: [
      "In-office dental whitening is safe, controlled, and can lighten teeth by 5 to 8 shades in a single comfortable 60-minute appointment using clinically proven whitening gels.",
      "Unlike abrasive over-the-counter charcoal pastes that can strip delicate enamel, professional bleaching gently lifts stubborn deep stains from coffee, tea, and aging without harming tooth structure.",
      "Follow the 'white diet' for the first 48 hours post-treatment, avoiding dark liquids, curries, red wine, and tobacco to allow the enamel pores to settle and seal in brightness.",
      "Maintaining your radiant smile is straightforward with good oral hygiene, regular dental cleanings, and occasional take-home touch-up trays provided by your dentist."
    ],
  },
  {
    id: "child-visit-stress-free",
    category: "Kids Dentistry",
    categoryBadge: "Kids Dentistry",
    title: "How to Make Your Child's Dental Visit Stress-Free?",
    excerpt:
      "A positive dental experience in childhood builds healthy habits for life. Here are some simple tips to make your child's visit comfortable and fun.",
    image: "/images/blog/children-dental.jpg",
    author: "Dr. Rohan Kapoor",
    authorRole: "Pediatric Dentist",
    date: "02 Aug 2025",
    readTime: "4 min read",
    tags: ["Pediatric", "KidsDental", "StressFree", "ParentingTips"],
    content: [
      "Children absorb parental emotions quickly. Speak about dental visits with cheerful, positive language and avoid threatening dental visits as punishment for eating sweets.",
      "Schedule appointments earlier in the day when young children are well-rested, fed, and most cooperative, rather than during usual naptime or after an exhausting school day.",
      "Our pediatric clinic employs gentle 'tell-show-do' techniques, colorful cartoon monitors, and friendly explanations so kids feel entirely safe, curious, and empowered.",
      "Celebrate their bravery with stickers, a high-five, and positive praise rather than sugary treats to foster a long-lasting healthy dental attitude."
    ],
  },
  {
    id: "common-tooth-problems",
    category: "Dental Care Tips",
    categoryBadge: "Kids Hygiene",
    title: "Common Tooth Problems and How to Prevent Them",
    excerpt:
      "From cavities to gum disease, learn about the most common dental problems and how you can prevent them with simple daily care.",
    image: "/images/blog/commen_toot_problem.png",
    author: "Dr. Arun Mehta",
    authorRole: "Senior Dental Surgeon",
    date: "22 Jul 2025",
    readTime: "5 min read",
    tags: ["ToothProblems", "CavityPrevention", "GumHealth", "OralHygiene"],
    content: [
      "Tooth decay and cavities develop when oral bacteria ferment sugars and release acids that demineralize tooth enamel. Consistent fluoride use and interdental cleaning stop this cycle.",
      "Gum sensitivity or bleeding during brushing is an early sign of gingivitis. With timely professional scaling and improved flossing, gingivitis is 100% reversible.",
      "Enamel erosion caused by acidic carbonated drinks or acid reflux leaves teeth hypersensitive to hot and cold sensations. Desensitizing toothpastes and remineralizing therapies provide lasting relief.",
      "Bruxism (nighttime teeth grinding) leads to micro-cracks, jaw stiffness, and worn teeth. Custom dental night guards protect teeth while preserving restful sleep."
    ],
  },
  {
    id: "dental-implants-solution",
    category: "Restorative Dentistry",
    categoryBadge: "Restorative Dentistry",
    title: "Dental Implants – A Permanent Solution for Missing Teeth",
    excerpt:
      "Dental implants look, feel and function like natural teeth. Discover the benefits, procedure and care tips for long-lasting results.",
    image: "/images/blog/dental_implats.png",
    author: "Dr. Arun Mehta",
    authorRole: "Senior Implantologist",
    date: "25 Jul 2025",
    readTime: "5 min read",
    tags: ["DentalImplants", "MissingTeeth", "Restoration", "OralSurgery"],
    content: [
      "Dental implants integrate directly with your jawbone via biocompatible titanium posts, preserving facial bone volume and preventing the hollowed facial look caused by missing teeth.",
      "Unlike dental bridges that require filing down adjacent healthy teeth, implants stand independently, preserving natural tooth structure and supporting 100% natural chewing efficiency.",
      "Modern 3D CBCT digital planning ensures guided, minimally invasive implant placement with rapid recovery and success rates exceeding 98%.",
      "With routine oral hygiene and regular dental checkups, implants are a permanent, lifetime investment in your smile, speech clarity, and nutritional health."
    ],
  },
  {
    id: "clear-aligners-modern-way",
    category: "Aligners",
    categoryBadge: "Aligners",
    title: "Clear Aligners – The Modern Way to Straighten Your Teeth",
    excerpt:
      "Clear aligners are a discreet and comfortable option for a straighter smile. Find out how they work and what to expect during treatment.",
    image: "/images/blog/clear_aligners.png",
    author: "Dr. Sneha Verma",
    authorRole: "Clear Aligner Specialist",
    date: "22 Jul 2025",
    readTime: "4 min read",
    tags: ["ClearAligners", "InvisibleBraces", "SmileDesign", "Orthodontics"],
    content: [
      "Custom thermoformed clear trays apply gentle, calibrated pressure to move your teeth incrementally into their ideal planned positions.",
      "Because aligners are transparent and slim, most people will never notice you are undergoing orthodontic treatment during meetings or social gatherings.",
      "You can continue eating your favorite crunchy or sticky foods without restrictions simply by taking off your aligners during meals.",
      "Digital intraoral scanners create a virtual 3D simulation of your smile progression before you even begin, so you can preview your final smile result in advance."
    ],
  },
  {
    id: "choose-best-dental-clinic",
    category: "Dental Care Tips",
    categoryBadge: "Dental Care Tips",
    title: "How to Choose the Best Dental Clinic Near You?",
    excerpt:
      "Not sure which dental clinic is right for you? Here are key factors to consider before choosing the best clinic for your oral health.",
    image: "/images/blog/best_dental_clinick.png",
    author: "Dr. Priya Sharma",
    authorRole: "Clinic Director",
    date: "18 Jul 2025",
    readTime: "4 min read",
    tags: ["DentalClinic", "FindADentist", "PatientCare", "DentalTechnology"],
    content: [
      "Look for clinics equipped with modern digital imaging, hospital-grade sterilization autoclaves, and minimally invasive dental technology.",
      "Check clinician credentials, multi-specialty team availability (orthodontics, implantology, pediatrics), and genuine patient reviews and before-and-after cases.",
      "A compassionate clinic transparently explains your diagnosis, offers itemized treatment estimates without hidden costs, and prioritizes painless patient comfort.",
      "Accessible location, flexible appointment timings, and emergency dental availability provide reassuring peace of mind for your whole family."
    ],
  },
];

export const RECENT_POSTS_DATA: RecentPostItem[] = [
  {
    id: "habit-healthier-smile",
    title: "5 Simple Daily Habits for a Healthier Smile",
    date: "12 Aug 2025",
    readTime: "5 min read",
    image: "/images/blog/teeth-care-tips.jpg",
  },
  {
    id: "why-regular-checkups",
    title: "Why Regular Dental Checkups Are Important?",
    date: "10 Aug 2025",
    readTime: "4 min read",
    image: "/images/blog/dental-implants.jpg",
  },
  {
    id: "braces-vs-aligners",
    title: "Braces vs Aligners – Which One Is Right for You?",
    date: "08 Aug 2025",
    readTime: "6 min read",
    image: "/images/blog/teeth_braces.png",
  },
  {
    id: "teeth-whitening-benefits",
    title: "Teeth Whitening: Benefits, Process & Aftercare",
    date: "05 Aug 2025",
    readTime: "5 min read",
    image: "/images/blog/teeth-whitening.jpg",
  },
];
