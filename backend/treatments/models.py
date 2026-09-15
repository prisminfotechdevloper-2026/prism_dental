from django.db import models
from django.utils.text import slugify

class Treatment(models.Model):
    treatment_id = models.CharField(max_length=100, unique=True, blank=True, null=True, help_text="Custom identifier e.g. treat-1")
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=100, help_text="e.g. General Dentistry, Cosmetic Dentistry, Endodontics")
    price_range = models.CharField(max_length=100, help_text="e.g. ₹500 - ₹800")
    duration = models.CharField(max_length=50, help_text="e.g. 30 Mins, 45-60 Mins")
    description = models.TextField()
    icon = models.CharField(max_length=100, blank=True, help_text="Lucide icon name or svg code")
    image = models.ImageField(upload_to="treatments/", blank=True, null=True)
    image_url = models.CharField(max_length=500, blank=True)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["id"]
        verbose_name = "Treatment"
        verbose_name_plural = "Treatments"

    def save(self, *args, **kwargs):
        if not self.treatment_id and self.name:
            self.treatment_id = f"treat-{slugify(self.name)}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} ({self.category})"
