from django.core.management.base import BaseCommand
from datetime import date, timedelta
from doctors.models import Doctor
from treatments.models import Treatment
from appointments.models import Appointment
from contact.models import ContactEnquiry, ClinicSettings
from testimonials.models import Testimonial
from gallery.models import GalleryCase
from blog.models import BlogPost

class Command(BaseCommand):
    help = "Seed database with initial clinic specialists, treatments, gallery, reviews, and appointments"

    def handle(self, *args, **options):
        self.stdout.write(self.style.NOTICE("Seeding Prism Dental Clinic data..."))

        today = date.today()

        # 1. Doctors
        doctors_data = [
            {
                "doctor_id": "dr-rohan-mehta",
                "name": "Dr. Rohan Mehta",
                "role": "Chief Dentist & Founder",
                "specialty": "Prosthodontist & Implantologist",
                "degree": "BDS, MDS (Prosthodontics)",
                "experience": "15+ Years",
                "rating": 4.9,
                "review_count": 312,
                "languages": ["English", "Hindi", "Marathi"],
                "available": True,
                "consultation_fee": 800.00,
                "phone": "+91 98201 11223",
                "email": "dr.rohan@smilecare.com",
                "photo_url": "/images/doctors/doctor-rohan.jpg",
                "today_appointments": 4,
            },
            {
                "doctor_id": "dr-priya-sharma",
                "name": "Dr. Priya Sharma",
                "role": "Orthodontist & Smile Designer",
                "specialty": "Orthodontics & Clear Aligners",
                "degree": "BDS, MDS (Orthodontics)",
                "experience": "10+ Years",
                "rating": 4.9,
                "review_count": 241,
                "languages": ["English", "Hindi"],
                "available": True,
                "consultation_fee": 700.00,
                "phone": "+91 98202 22334",
                "email": "dr.priya@smilecare.com",
                "photo_url": "/images/doctors/doctor-priya.jpg",
                "today_appointments": 3,
            },
            {
                "doctor_id": "dr-amit-verma",
                "name": "Dr. Amit Verma",
                "role": "Senior Endodontist",
                "specialty": "Endodontics & Root Canal Specialist",
                "degree": "BDS, MDS (Endodontics)",
                "experience": "8+ Years",
                "rating": 4.8,
                "review_count": 198,
                "languages": ["English", "Hindi", "Gujarati"],
                "available": True,
                "consultation_fee": 600.00,
                "phone": "+91 98203 33445",
                "email": "dr.amit@smilecare.com",
                "photo_url": "/images/doctors/doctor-amit.jpg",
                "today_appointments": 5,
            },
            {
                "doctor_id": "dr-rajesh-patel",
                "name": "Dr. Rajesh Patel",
                "role": "Oral & Maxillofacial Surgeon",
                "specialty": "Oral Surgery & Extractions",
                "degree": "BDS, MDS (Oral Surgery)",
                "experience": "12+ Years",
                "rating": 5.0,
                "review_count": 278,
                "languages": ["English", "Hindi", "Gujarati"],
                "available": False,
                "consultation_fee": 900.00,
                "phone": "+91 98204 44556",
                "email": "dr.rajesh@smilecare.com",
                "photo_url": "/images/doctors/doctor-rajesh.jpg",
                "today_appointments": 2,
            },
            {
                "doctor_id": "dr-sneha-joshi",
                "name": "Dr. Sneha Joshi",
                "role": "Periodontist & Gum Specialist",
                "specialty": "Periodontology & Laser Dentistry",
                "degree": "BDS, MDS (Periodontology)",
                "experience": "7+ Years",
                "rating": 4.8,
                "review_count": 163,
                "languages": ["English", "Hindi", "Kannada"],
                "available": True,
                "consultation_fee": 650.00,
                "phone": "+91 98205 55667",
                "email": "dr.sneha@smilecare.com",
                "photo_url": "/images/doctors/doctor-sneha.jpg",
                "today_appointments": 2,
            },
            {
                "doctor_id": "dr-meera-nambiar",
                "name": "Dr. Meera Nambiar",
                "role": "Pediatric Dentist",
                "specialty": "Kids & Adolescents Dental Care",
                "degree": "BDS, MDS (Pediatric Dentistry)",
                "experience": "9+ Years",
                "rating": 4.9,
                "review_count": 185,
                "languages": ["English", "Hindi", "Malayalam"],
                "available": True,
                "consultation_fee": 600.00,
                "phone": "+91 98206 66778",
                "email": "dr.meera@smilecare.com",
                "photo_url": "/images/doctors/doctor-meera.jpg",
                "today_appointments": 3,
            },
        ]
        for d in doctors_data:
            Doctor.objects.update_or_create(doctor_id=d["doctor_id"], defaults=d)
        self.stdout.write(self.style.SUCCESS(f"Saved {len(doctors_data)} doctors."))

        # 2. Treatments (as specified in docs.pdf Section 1.3)
        treatments_data = [
            {
                "treatment_id": "treat-1",
                "name": "General Dental Checkup & Consultation",
                "category": "General Dentistry",
                "price_range": "₹500 - ₹800",
                "duration": "30 Mins",
                "description": "Comprehensive oral evaluation with digital X-Ray and cavity screening.",
                "active": True,
            },
            {
                "treatment_id": "treat-2",
                "name": "Teeth Whitening & Cleaning",
                "category": "Cosmetic Dentistry",
                "price_range": "₹2,500 - ₹6,000",
                "duration": "45-60 Mins",
                "description": "Advanced ultrasonic scaling and laser teeth whitening up to 8 shades lighter.",
                "active": True,
            },
            {
                "treatment_id": "treat-3",
                "name": "Dental Implants (Titanium)",
                "category": "Restorative Dentistry",
                "price_range": "₹25,000 - ₹45,000",
                "duration": "60-90 Mins",
                "description": "Permanent titanium fixture with high-grade zirconia crown replacement.",
                "active": True,
            },
            {
                "treatment_id": "treat-4",
                "name": "Root Canal Treatment (Single-Sitting)",
                "category": "Endodontics",
                "price_range": "₹4,000 - ₹7,500",
                "duration": "45-60 Mins",
                "description": "Rotary endodontics with apex locator for pain-free single-visit therapy.",
                "active": True,
            },
            {
                "treatment_id": "treat-5",
                "name": "Clear Aligners & Orthodontic Braces",
                "category": "Orthodontics",
                "price_range": "₹45,000 - ₹1,20,000",
                "duration": "30 Mins per checkup",
                "description": "Invisible aligners and ceramic self-ligating braces for arch correction.",
                "active": True,
            },
            {
                "treatment_id": "treat-6",
                "name": "Cosmetic Smile Design & Veneers",
                "category": "Cosmetic Dentistry",
                "price_range": "₹8,000 - ₹15,000 / tooth",
                "duration": "60 Mins",
                "description": "Custom ultra-thin porcelain veneers to correct spacing, chips and staining.",
                "active": True,
            },
            {
                "treatment_id": "treat-7",
                "name": "Pediatric (Kids) Dental Care",
                "category": "Pediatrics",
                "price_range": "₹1,000 - ₹3,500",
                "duration": "30-45 Mins",
                "description": "Gentle preventative care, fluoride treatment, space maintainers and sealants.",
                "active": True,
            },
            {
                "treatment_id": "treat-8",
                "name": "Wisdom Tooth Pain & Extraction",
                "category": "Oral Surgery",
                "price_range": "₹3,500 - ₹7,000",
                "duration": "45 Mins",
                "description": "Surgical removal of impacted wisdom molars under local anesthesia.",
                "active": True,
            },
            {
                "treatment_id": "treat-9",
                "name": "Gum Treatment & Laser Therapy",
                "category": "Periodontics",
                "price_range": "₹3,000 - ₹9,000",
                "duration": "45 Mins",
                "description": "Deep pocket curettage, bone grafting, and gentle soft-tissue laser therapy.",
                "active": True,
            },
        ]
        for t in treatments_data:
            Treatment.objects.update_or_create(treatment_id=t["treatment_id"], defaults=t)
        self.stdout.write(self.style.SUCCESS(f"Saved {len(treatments_data)} treatments."))

        # 3. Appointments
        appointments_data = [
            {
                "appointment_id": "APT-1001",
                "patient_name": "Sunita Verma",
                "phone": "+91 98765 43210",
                "email": "sunita.v@example.com",
                "treatment": "Root Canal Treatment (Single-Sitting)",
                "doctor": "Dr. Amit Verma",
                "date": today,
                "time_slot": "10:30 AM - 12:00 PM",
                "status": "Confirmed",
                "payment_status": "Paid",
                "payment_amount": "₹4,500",
                "notes": "Severe throbbing pain in upper left molar when drinking cold liquids.",
                "whatsapp_sent": True,
                "email_sent": True,
                "online_consultation": False,
            },
            {
                "appointment_id": "APT-1002",
                "patient_name": "Rahul Deshmukh",
                "phone": "+91 98112 34567",
                "email": "rahul.deshmukh@gmail.com",
                "treatment": "Dental Implants (Titanium)",
                "doctor": "Dr. Rohan Mehta",
                "date": today,
                "time_slot": "02:30 PM - 04:00 PM",
                "status": "New",
                "payment_status": "Pending",
                "payment_amount": "₹32,000",
                "notes": "Lost lower premolar 6 months ago. Consultation for screw implant.",
                "whatsapp_sent": False,
                "email_sent": False,
                "online_consultation": False,
            },
            {
                "appointment_id": "APT-1003",
                "patient_name": "Pooja Kapoor",
                "phone": "+91 97234 56789",
                "email": "pooja.k@outlook.com",
                "treatment": "Clear Aligners & Orthodontic Braces",
                "doctor": "Dr. Priya Sharma",
                "date": today,
                "time_slot": "04:00 PM - 05:30 PM",
                "status": "Confirmed",
                "payment_status": "Paid",
                "payment_amount": "₹800",
                "notes": "Interested in 3D digital scan for clear aligners comparison.",
                "whatsapp_sent": True,
                "email_sent": True,
                "online_consultation": True,
            },
            {
                "appointment_id": "APT-1004",
                "patient_name": "Arjun Singhal",
                "phone": "+91 99887 76655",
                "email": "arjun.singhal@yahoo.com",
                "treatment": "Teeth Whitening & Cleaning",
                "doctor": "Dr. Rohan Mehta",
                "date": today + timedelta(days=1),
                "time_slot": "09:00 AM - 10:30 AM",
                "status": "Confirmed",
                "payment_status": "Pending",
                "payment_amount": "₹3,500",
                "notes": "Wedding in 2 weeks. Wants laser teeth cleaning and whitening.",
                "whatsapp_sent": True,
                "email_sent": False,
                "online_consultation": False,
            },
            {
                "appointment_id": "APT-1005",
                "patient_name": "Kavita Rao",
                "phone": "+91 91234 87654",
                "email": "kavita.rao@gmail.com",
                "treatment": "Pediatric (Kids) Dental Care",
                "doctor": "Dr. Meera Nambiar",
                "date": today + timedelta(days=1),
                "time_slot": "12:00 PM - 01:30 PM",
                "status": "New",
                "payment_status": "Pending",
                "payment_amount": "₹1,200",
                "notes": "7-year-old child complaining of toothache after eating sweets.",
                "whatsapp_sent": False,
                "email_sent": False,
                "online_consultation": False,
            },
            {
                "appointment_id": "APT-1006",
                "patient_name": "Manoj Chawla",
                "phone": "+91 94567 12345",
                "email": "manoj.chawla@hotmail.com",
                "treatment": "Wisdom Tooth Pain & Extraction",
                "doctor": "Dr. Rajesh Patel",
                "date": today - timedelta(days=1),
                "time_slot": "05:30 PM - 07:00 PM",
                "status": "Completed",
                "payment_status": "Paid",
                "payment_amount": "₹5,000",
                "notes": "Impacted lower third molar extraction completed.",
                "whatsapp_sent": True,
                "email_sent": True,
                "online_consultation": False,
            },
        ]
        for a in appointments_data:
            Appointment.objects.update_or_create(appointment_id=a["appointment_id"], defaults=a)
        self.stdout.write(self.style.SUCCESS(f"Saved {len(appointments_data)} appointments."))

        # 4. Enquiries & Clinic Settings
        enquiries_data = [
            {
                "enquiry_id": "ENQ-201",
                "name": "Anjali Saxena",
                "email": "anjali.s@gmail.com",
                "phone": "+91 98199 88776",
                "subject": "Emergency Root Canal enquiry",
                "service": "Root Canal Treatment (RCT)",
                "message": "I am having unbearable pain in tooth number 46. Are you open for emergency walk-ins today after 7 PM?",
                "status": "New",
            },
            {
                "enquiry_id": "ENQ-202",
                "name": "Harish Iyer",
                "email": "harish.iyer@corporate.com",
                "phone": "+91 97665 44332",
                "subject": "Dental Insurance Coverage",
                "service": "General Dental Consultation",
                "message": "Does Prism Dental accept Star Health and HDFC Ergo cashless dental insurance policies?",
                "status": "Responded",
            },
            {
                "enquiry_id": "ENQ-203",
                "name": "Smita Kulkarni",
                "email": "smita.k@rediffmail.com",
                "phone": "+91 98230 11229",
                "subject": "Clear aligners pricing structure",
                "service": "Braces & Clear Aligners",
                "message": "Can I pay the aligner cost in monthly EMI without credit card?",
                "status": "Responded",
            },
        ]
        for eq in enquiries_data:
            ContactEnquiry.objects.update_or_create(enquiry_id=eq["enquiry_id"], defaults=eq)
        self.stdout.write(self.style.SUCCESS(f"Saved {len(enquiries_data)} contact enquiries."))

        ClinicSettings.objects.get_or_create(
            id=1,
            defaults={
                "clinic_name": "Prism Dental Clinic",
                "tagline": "Healthy Smile, Happy Life",
                "phone": "+91 82392 39249",
                "whatsapp": "8239239249",
                "emergency_helpline": "+91 82392 39249",
                "email": "contact.prisminfotech@gmail.com",
                "address": "Near Bus Stand, Ramganj Mandi, Kota, Rajasthan - 326519",
                "working_hours_weekday": "09:00 AM - 08:00 PM (Mon - Sat)",
                "working_hours_sunday": "10:00 AM - 02:00 PM (Sun)",
            }
        )

        # 5. Testimonials
        testimonials_data = [
            {
                "patient_name": "Ananya Sharma",
                "treatment": "Cosmetic Smile Design",
                "category": "Cosmetic",
                "rating": 5,
                "comment": "Dr. Priya completely transformed my smile! The porcelain veneers look so natural and my confidence has skyrocketed.",
                "review_date": "15 Jan 2026",
                "doctor": "Dr. Priya Sharma",
                "highlight": "Natural Porcelain Veneers",
                "verified": True,
                "featured": True,
            },
            {
                "patient_name": "Rajesh Kulkarni",
                "treatment": "Dental Implants",
                "category": "Implants",
                "rating": 5,
                "comment": "I was terrified of implant surgery, but Dr. Rohan Mehta made the entire procedure 100% painless. Outstanding clinic hygiene!",
                "review_date": "02 Feb 2026",
                "doctor": "Dr. Rohan Mehta",
                "highlight": "Titanium Precision Fit",
                "verified": True,
                "featured": True,
            },
            {
                "patient_name": "Dr. Meenakshi Sundaram",
                "treatment": "Single Sitting Root Canal",
                "category": "Root Canal",
                "rating": 5,
                "comment": "As a physician myself, I appreciate Dr. Amit Verma's precision and digital imaging equipment. Zero discomfort afterward.",
                "review_date": "20 Feb 2026",
                "doctor": "Dr. Amit Verma",
                "highlight": "Single-Visit Painless RCT",
                "verified": True,
                "featured": False,
            },
        ]
        for tm in testimonials_data:
            Testimonial.objects.update_or_create(
                patient_name=tm["patient_name"],
                treatment=tm["treatment"],
                defaults=tm
            )
        self.stdout.write(self.style.SUCCESS(f"Saved {len(testimonials_data)} testimonials."))

        # 6. Gallery Cases
        gallery_data = [
            {
                "case_id": "case-1",
                "title": "Full Arch Aesthetic Smile Makeover",
                "subtitle": "Custom Porcelain Veneers & Laser Gingival Sculpting",
                "category": "transformations",
                "doctor": "Dr. Priya Sharma",
                "patient_consent": True,
                "consent_ref": "CONSENT-SIGNED-2025-089",
                "before_url": "/images/before_after/smile_before.jpg",
                "after_url": "/images/before_after/smile_after.jpg",
                "treatment_duration": "2 Appointments (7 Days)",
                "description": "Comprehensive aesthetic transformation restoring natural tooth contour, correcting discoloration, and creating an ultra-balanced harmonious smile.",
                "notes": "Custom porcelain veneers + gingival laser sculpting.",
                "featured": True,
            },
            {
                "case_id": "case-2",
                "title": "Diastema Closure & Arch Realignment",
                "subtitle": "Digital Clear Aligners + Enamel Contouring",
                "category": "transformations",
                "doctor": "Dr. Priya Sharma",
                "patient_consent": True,
                "consent_ref": "CONSENT-SIGNED-2025-112",
                "before_url": "/images/before_after/case2_before.jpg",
                "after_url": "/images/before_after/case2_after.jpg",
                "treatment_duration": "6 Months",
                "description": "Non-invasive orthodontic correction closing anterior midline space and harmonizing the dental arch with customized 3D aligners.",
                "notes": "Digital clear aligners with enamel contouring.",
                "featured": False,
            },
        ]
        for g in gallery_data:
            GalleryCase.objects.update_or_create(case_id=g["case_id"], defaults=g)
        self.stdout.write(self.style.SUCCESS(f"Saved {len(gallery_data)} gallery cases."))

        # 7. Blog Posts
        blogs_data = [
            {
                "blog_id": "blog-1",
                "title": "5 Simple Daily Habits for a Healthier Smile",
                "slug": "5-simple-daily-habits-for-a-healthier-smile",
                "category": "General Dentistry",
                "author": "Dr. Priya Sharma",
                "author_role": "Chief Cosmetic Dentist",
                "read_time": "5 min read",
                "status": "Published",
                "views": 1420,
                "tags": ["OralHygiene", "DailyCare", "HealthyTeeth"],
                "excerpt": "Essential daily habits to keep your teeth bright, clean, and free of plaque.",
                "content": "Brushing twice a day, flossing correctly, avoiding high-sugar snacks, and drinking plenty of water are key to long-term dental vitality.",
                "cover_image_url": "/images/blog/teeth-whitening.jpg",
                "published_date": "12 Aug 2025",
            },
            {
                "blog_id": "blog-2",
                "title": "Why Regular Dental Checkups Are Important?",
                "slug": "why-regular-dental-checkups-are-important",
                "category": "Oral Health",
                "author": "Dr. Rohan Mehta",
                "author_role": "Chief Dentist & Founder",
                "read_time": "4 min read",
                "status": "Published",
                "views": 980,
                "tags": ["Checkup", "PreventiveCare", "OralHealth"],
                "excerpt": "Learn how preventive examinations save you from costly and painful dental emergencies.",
                "content": "Routine examinations every six months help detect micro-cavities, gum disease, and alignment issues before they require root canals or tooth extractions.",
                "cover_image_url": "/images/blog/commen_toot_problem.png",
                "published_date": "10 Aug 2025",
            },
            {
                "blog_id": "blog-3",
                "title": "Understanding Dental Implants vs Dental Bridges",
                "slug": "understanding-dental-implants-vs-dental-bridges",
                "category": "Treatment Guide",
                "author": "Dr. Rohan Mehta",
                "author_role": "Chief Dentist & Founder",
                "read_time": "6 min read",
                "status": "Draft",
                "views": 0,
                "tags": ["Implants", "ToothReplacement"],
                "excerpt": "A detailed comparison to help you choose the best permanent tooth replacement option.",
                "content": "Dental implants replace the tooth root and preserve surrounding jawbone structure, whereas dental bridges anchor to adjacent healthy teeth.",
                "cover_image_url": "/images/blog/dental_implats.png",
                "published_date": "04 Sep 2025",
            },
        ]
        for bp in blogs_data:
            BlogPost.objects.update_or_create(blog_id=bp["blog_id"], defaults=bp)
        self.stdout.write(self.style.SUCCESS(f"Saved {len(blogs_data)} blog posts."))

        self.stdout.write(self.style.SUCCESS("Database seeding completed successfully!"))
