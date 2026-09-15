from django.db import models
from django.utils import timezone
import random

class ContactEnquiry(models.Model):
    STATUS_CHOICES = [
        ('New', 'New Enquiry'),
        ('Responded', 'Responded'),
        ('Archived', 'Archived'),
    ]

    enquiry_id = models.CharField(max_length=30, unique=True, blank=True, help_text="e.g. ENQ-201")
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    subject = models.CharField(max_length=200, blank=True)
    service = models.CharField(max_length=200, blank=True, help_text="Service of interest")
    message = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='New')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Contact Enquiry"
        verbose_name_plural = "Contact Enquiries"

    def save(self, *args, **kwargs):
        if not self.enquiry_id:
            for _ in range(10):
                new_id = f"ENQ-{random.randint(100, 999)}"
                if not ContactEnquiry.objects.filter(enquiry_id=new_id).exists():
                    self.enquiry_id = new_id
                    break
            if not self.enquiry_id:
                self.enquiry_id = f"ENQ-{int(timezone.now().timestamp())}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.enquiry_id} - {self.name} ({self.subject or 'General'})"


class ClinicSettings(models.Model):
    clinic_name = models.CharField(max_length=200, default="Prism Dental Clinic")
    tagline = models.CharField(max_length=200, default="Healthy Smile, Happy Life")
    phone = models.CharField(max_length=50, default="+91 82392 39249")
    whatsapp = models.CharField(max_length=50, default="8239239249")
    emergency_helpline = models.CharField(max_length=50, default="+91 82392 39249")
    email = models.EmailField(default="contact.prisminfotech@gmail.com")
    address = models.TextField(default="Near Bus Stand, Ramganj Mandi, Kota, Rajasthan - 326519")
    working_hours_weekday = models.CharField(max_length=100, default="09:00 AM - 08:00 PM (Mon - Sat)")
    working_hours_sunday = models.CharField(max_length=100, default="10:00 AM - 02:00 PM (Sun)")
    whatsapp_booking_template = models.TextField(
        blank=True,
        default="Hello {PATIENT_NAME}, thank you for choosing Prism Dental Clinic! Your appointment for {TREATMENT} with {DOCTOR} is confirmed for {DATE} at {TIME_SLOT}. Location: Ramganjmandi, Kota, Rajasthan. Please arrive 10 minutes prior."
    )
    whatsapp_reminder_template = models.TextField(
        blank=True,
        default="Reminder from Prism Dental Clinic: Hi {PATIENT_NAME}, you have an upcoming consultation tomorrow ({DATE}) at {TIME_SLOT} with {DOCTOR}. If you need to reschedule, reply to this message."
    )
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Clinic Settings"
        verbose_name_plural = "Clinic Settings"

    def __str__(self):
        return self.clinic_name
