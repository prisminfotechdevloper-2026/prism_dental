from django.db import models
from django.utils import timezone
import random

class Appointment(models.Model):
    STATUS_CHOICES = [
        ('New', 'New Enquiry'),
        ('Confirmed', 'Confirmed'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    ]

    PAYMENT_STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Paid', 'Paid in Full'),
        ('Partial', 'Partial Advance'),
    ]

    appointment_id = models.CharField(max_length=30, unique=True, blank=True, help_text="Reference ID e.g. APT-1001")
    patient_name = models.CharField(max_length=150, help_text="Full Name of the patient")
    phone = models.CharField(max_length=30, help_text="Primary contact phone/mobile number")
    email = models.EmailField(blank=True, null=True, help_text="Optional email address")
    treatment = models.CharField(max_length=200, help_text="Selected dental service or procedure")
    doctor = models.CharField(max_length=150, blank=True, default="Any Available Specialist")
    date = models.DateField(help_text="Preferred consultation date")
    time_slot = models.CharField(max_length=50, help_text="Preferred time slot e.g. 10:30 AM - 12:00 PM")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='New')
    payment_status = models.CharField(max_length=20, choices=PAYMENT_STATUS_CHOICES, default='Pending')
    payment_amount = models.CharField(max_length=50, default="₹800", blank=True)
    notes = models.TextField(blank=True, help_text="Symptoms, clinical notes or patient requests")
    whatsapp_sent = models.BooleanField(default=False)
    email_sent = models.BooleanField(default=False)
    online_consultation = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date', '-created_at']
        verbose_name = "Appointment"
        verbose_name_plural = "Appointments"

    def save(self, *args, **kwargs):
        if not self.appointment_id:
            # Generate unique reference APT-XXXX
            for _ in range(10):
                new_id = f"APT-{random.randint(1000, 9999)}"
                if not Appointment.objects.filter(appointment_id=new_id).exists():
                    self.appointment_id = new_id
                    break
            if not self.appointment_id:
                self.appointment_id = f"APT-{int(timezone.now().timestamp())}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.appointment_id} - {self.patient_name} ({self.date} {self.time_slot})"
