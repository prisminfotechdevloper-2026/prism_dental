from django.db import models
from django.utils.text import slugify


class ClinicInfo(models.Model):
    """
    Clinic ki general details: Timings, Phone, WhatsApp, Maps location, etc.
    Yeh frontend ke Header, Footer aur Contact page par render hoga.
    """
    clinic_name = models.CharField(max_length=200, default="SmileCare Dental Clinic")
    tagline = models.CharField(max_length=255, blank=True, null=True, help_text="e.g. Your Smile, Our Priority")
    phone_number = models.CharField(max_length=20, help_text="Click-to-call phone number")
    whatsapp_number = models.CharField(max_length=20, help_text="Format with country code: e.g. 919876543210")
    email = models.EmailField()
    address = models.TextField()
    opening_hours = models.CharField(max_length=255, help_text="e.g. Mon - Sat: 9:00 AM - 8:00 PM, Sunday: Closed")
    google_maps_embed_url = models.TextField(help_text="Google Maps iframe embed URL")
    logo = models.ImageField(upload_to="clinic/branding/", blank=True, null=True)

    class Meta:
        verbose_name = "Clinic Information"
        verbose_name_plural = "Clinic Information"

    def __str__(self):
        return self.clinic_name


class DoctorProfile(models.Model):
    """
    Page 2: About Doctor
    Photo, qualification, experience, specialization, and bio.
    """
    name = models.CharField(max_length=150)
    qualification = models.CharField(max_length=255, help_text="e.g. BDS, MDS - Conservative Dentistry")
    experience_years = models.PositiveIntegerField(default=5)
    specialization = models.CharField(max_length=255, help_text="e.g. Cosmetic Dentist, Root Canal Specialist")
    certifications = models.CharField(max_length=300, blank=True, null=True)
    bio = models.TextField(help_text="Detailed professional introduction")
    photo = models.ImageField(upload_to="clinic/doctors/")
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0, help_text="Display order on website")

    class Meta:
        ordering = ['order', 'id']
        verbose_name = "Doctor Profile"
        verbose_name_plural = "Doctor Profiles"

    def __str__(self):
        return f"Dr. {self.name} - {self.specialization}"


class Treatment(models.Model):
    """
    Page 3: Treatments
    Implants, Root Canal, Whitening, Braces/Aligners, Crowns/Bridges, Extractions, etc.
    """
    title = models.CharField(max_length=150, unique=True)
    slug = models.SlugField(max_length=160, unique=True, blank=True)
    category = models.CharField(max_length=100, default="General", help_text="e.g. Cosmetic, Orthodontics, Surgery")
    short_description = models.TextField(max_length=350, help_text="Used in homepage treatment cards")
    full_details = models.TextField(help_text="Detailed explanation of treatment, procedure, benefits")
    icon_image = models.ImageField(upload_to="clinic/treatments/", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Treatment"
        verbose_name_plural = "Treatments"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class TechnologyService(models.Model):
    """
    Page 4: Technology & Modern Equipment
    Digital X-Ray, Digital Scanning, Sterilization, Modern treatment approach.
    """
    title = models.CharField(max_length=150)
    description = models.TextField(help_text="Benefits and details of equipment/service")
    image = models.ImageField(upload_to="clinic/technology/", blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Technology & Service"
        verbose_name_plural = "Technology & Services"

    def __str__(self):
        return self.title


class GalleryItem(models.Model):
    """
    Page 5: Gallery / Before & After Photos
    Must have patient consent field for before/after cases.
    """
    CATEGORY_CHOICES = [
        ('CLINIC', 'Clinic Photos'),
        ('EQUIPMENT', 'Modern Equipment'),
        ('BEFORE_AFTER', 'Treatment Before & After'),
    ]

    title = models.CharField(max_length=150)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='CLINIC')
    image = models.ImageField(upload_to="clinic/gallery/")
    patient_consent_verified = models.BooleanField(
        default=True,
        help_text="Ensure patient consent was obtained if using before/after pictures"
    )
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-uploaded_at']
        verbose_name = "Gallery Item"
        verbose_name_plural = "Gallery Items"

    def __str__(self):
        return f"{self.title} ({self.get_category_display()})"


class Testimonial(models.Model):
    """
    Page 6: Testimonials & Google Reviews
    Ratings, patient review, and Google Reviews embed/link.
    """
    patient_name = models.CharField(max_length=150, help_text="Patient name or initials")
    rating = models.PositiveSmallIntegerField(default=5, help_text="Rating out of 5")
    review_text = models.TextField()
    treatment_taken = models.ForeignKey(
        Treatment, 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True, 
        related_name="testimonials"
    )
    google_review_link = models.URLField(blank=True, null=True, help_text="Link to original Google Review")
    is_approved = models.BooleanField(default=True, help_text="Only approved reviews will show on website")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonials"

    def __str__(self):
        return f"{self.patient_name} - {self.rating} Stars"
    

from django.contrib.auth.models import User
from django.db import models

class StaffProfile(models.Model):
    """
    Sub-Admin aur Staff roles manage karne ke liye model
    """
    ROLE_CHOICES = [
        ('MAIN_ADMIN', 'Main Admin (Doctor/Owner)'),
        ('SUB_ADMIN', 'Sub Admin (Clinic Manager/Receptionist)'),
        ('DOCTOR', 'Doctor'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='staff_profile')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='SUB_ADMIN')
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    assigned_branch = models.CharField(max_length=100, default='Main Branch')
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='created_sub_admins')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} ({self.get_role_display()})"    