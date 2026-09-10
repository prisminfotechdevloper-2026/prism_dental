from django.contrib import admin
from .models import AppointmentEnquiry, ContactSubmission


@admin.register(AppointmentEnquiry)
class AppointmentEnquiryAdmin(admin.ModelAdmin):
    list_display = (
        'patient_name', 
        'phone_number', 
        'treatment', 
        'preferred_date', 
        'preferred_time', 
        'status', 
        'created_at'
    )
    list_filter = ('status', 'preferred_date', 'treatment', 'created_at')
    search_fields = ('patient_name', 'phone_number', 'email')
    list_editable = ('status',)  # Admin/Sub-admin list se hi status change kar sakein
    readonly_fields = ('created_at', 'updated_at')


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'is_resolved', 'created_at')
    list_filter = ('is_resolved', 'created_at')
    search_fields = ('name', 'phone', 'message')
    list_editable = ('is_resolved',)
    readonly_fields = ('created_at',)