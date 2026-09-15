from django.db import models
from django.utils.text import slugify

class Doctor(models.Model):
    doctor_id = models.CharField(max_length=100, unique=True, blank=True, null=True, help_text="Custom identifier e.g. dr-rohan-mehta")
    name = models.CharField(max_length=150)
    role = models.CharField(max_length=150, default="Dental Surgeon", help_text="e.g. Chief Dentist & Founder")
    specialty = models.CharField(max_length=200, help_text="e.g. Prosthodontist & Implantologist")
    degree = models.CharField(max_length=150, default="BDS, MDS")
    experience = models.CharField(max_length=50, default="5+ Years")
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=5.0)
    review_count = models.PositiveIntegerField(default=0)
    languages = models.JSONField(default=list, blank=True, help_text="List of languages spoken")
    available = models.BooleanField(default=True, help_text="Current duty/availability status")
    consultation_fee = models.DecimalField(max_digits=10, decimal_places=2, default=700.00)
    phone = models.CharField(max_length=30, blank=True)
    email = models.EmailField(blank=True)
    photo = models.ImageField(upload_to="doctors/", blank=True, null=True)
    photo_url = models.CharField(max_length=500, blank=True)
    bio = models.TextField(blank=True)
    today_appointments = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["id"]
        verbose_name = "Doctor"
        verbose_name_plural = "Doctors"

    def save(self, *args, **kwargs):
        if not self.doctor_id and self.name:
            base_slug = f"dr-{slugify(self.name)}"
            self.doctor_id = base_slug
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} ({self.specialty})"
