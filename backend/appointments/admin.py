from django.contrib import admin
from .models import Appointment

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['appointment_id', 'patient_name', 'phone', 'treatment', 'doctor', 'date', 'time_slot', 'status', 'payment_status']
    list_filter = ['status', 'payment_status', 'date', 'doctor', 'online_consultation']
    search_fields = ['appointment_id', 'patient_name', 'phone', 'email', 'treatment', 'doctor', 'notes']
    ordering = ['-date', '-created_at']
