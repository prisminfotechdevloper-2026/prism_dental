from django.db import models
from clinic.models import Treatment


class AppointmentEnquiry(models.Model):
    """
    Patient online appointment booking request model.
    """
    STATUS_CHOICES = [
        ('NEW', 'New'),
        ('CONFIRMED', 'Confirmed'),
        ('COMPLETED', 'Completed'),
        ('CANCELLED', 'Cancelled'),
    ]

    patient_name = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=15, help_text="Valid 10-digit mobile number")
    email = models.EmailField(blank=True, null=True, help_text="Optional email address")
    treatment = models.ForeignKey(
        Treatment, 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True,
        related_name="appointments"
    )
    preferred_date = models.DateField()
    preferred_time = models.CharField(max_length=50, help_text="e.g. 10:30 AM or Morning Slot")
    message = models.TextField(blank=True, null=True, help_text="Patient dental concern or notes")

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='NEW')
    internal_notes = models.TextField(blank=True, null=True, help_text="Internal notes for doctor and clinic staff")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Appointment Enquiry"
        verbose_name_plural = "Appointment Enquiries"

    def __str__(self):
        return f"{self.patient_name} - {self.treatment} ({self.status})"


class ContactSubmission(models.Model):
    """
    General website contact form submission model.
    """
    name = models.CharField(max_length=150)
    phone = models.CharField(max_length=15, help_text="Valid contact number")
    email = models.EmailField(blank=True, null=True)
    subject = models.CharField(max_length=200, blank=True, null=True)
    message = models.TextField()
    is_resolved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Contact Query"
        verbose_name_plural = "Contact Queries"

    def __str__(self):
        return f"{self.name} ({self.created_at.strftime('%d-%m-%Y')})"