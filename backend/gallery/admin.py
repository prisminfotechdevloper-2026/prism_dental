from django.contrib import admin
from .models import GalleryCase

@admin.register(GalleryCase)
class GalleryCaseAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'doctor', 'patient_consent', 'consent_ref', 'featured', 'created_at']
    list_filter = ['category', 'patient_consent', 'featured']
    search_fields = ['title', 'category', 'doctor', 'consent_ref', 'description']
    ordering = ['-created_at']
