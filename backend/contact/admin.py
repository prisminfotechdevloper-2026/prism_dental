from django.contrib import admin
from .models import ContactEnquiry, ClinicSettings

@admin.register(ContactEnquiry)
class ContactEnquiryAdmin(admin.ModelAdmin):
    list_display = ['enquiry_id', 'name', 'phone', 'email', 'subject', 'status', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['enquiry_id', 'name', 'phone', 'email', 'subject', 'message']
    ordering = ['-created_at']


@admin.register(ClinicSettings)
class ClinicSettingsAdmin(admin.ModelAdmin):
    list_display = ['clinic_name', 'phone', 'email', 'emergency_helpline', 'updated_at']
