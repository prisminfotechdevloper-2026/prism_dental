from django.db import models
from django.utils.text import slugify

class GalleryCase(models.Model):
    case_id = models.CharField(max_length=100, unique=True, blank=True, null=True, help_text="Custom identifier e.g. case-1")
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=255, blank=True)
    category = models.CharField(max_length=100, help_text="e.g. transformations, clinic, treatments, patients, Smile Makeover, Orthodontics")
    doctor = models.CharField(max_length=150, blank=True)
    patient_consent = models.BooleanField(
        default=True,
        help_text="Mandatory per medical guidelines (docs.pdf Section 1.5): patient permission before publishing"
    )
    consent_ref = models.CharField(max_length=100, blank=True, help_text="e.g. CONSENT-SIGNED-2025-089")
    before_image = models.ImageField(upload_to="gallery/before/", blank=True, null=True)
    after_image = models.ImageField(upload_to="gallery/after/", blank=True, null=True)
    image = models.ImageField(upload_to="gallery/", blank=True, null=True)
    before_url = models.CharField(max_length=500, blank=True)
    after_url = models.CharField(max_length=500, blank=True)
    image_url = models.CharField(max_length=500, blank=True)
    treatment_duration = models.CharField(max_length=100, blank=True, help_text="e.g. 2 Appointments (7 Days)")
    tags = models.JSONField(default=list, blank=True)
    description = models.TextField(blank=True)
    notes = models.TextField(blank=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-featured', '-created_at']
        verbose_name = "Gallery Case"
        verbose_name_plural = "Gallery Cases"

    def save(self, *args, **kwargs):
        if not self.case_id and self.title:
            self.case_id = f"case-{slugify(self.title)[:50]}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} ({self.category})"
