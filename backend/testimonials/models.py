from django.db import models

class Testimonial(models.Model):
    patient_name = models.CharField(max_length=150)
    treatment = models.CharField(max_length=200)
    category = models.CharField(max_length=100, blank=True, help_text="e.g. Whitening, Implants, Orthodontics, Root Canal, Cosmetic, General")
    rating = models.PositiveSmallIntegerField(default=5, help_text="Rating 1 to 5")
    comment = models.TextField(help_text="Patient testimonial review quote")
    review_date = models.CharField(max_length=50, blank=True)
    doctor = models.CharField(max_length=150, blank=True)
    highlight = models.CharField(max_length=200, blank=True, help_text="Key result highlight badge e.g. 3 Shades Whiter in 45 Mins")
    image = models.ImageField(upload_to="testimonials/", blank=True, null=True)
    image_url = models.CharField(max_length=500, blank=True)
    verified = models.BooleanField(default=True, help_text="Verified patient badge")
    featured = models.BooleanField(default=False, help_text="Feature on home page")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-featured', '-created_at']
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonials"

    def __str__(self):
        return f"{self.patient_name} - {self.treatment} ({self.rating}★)"
