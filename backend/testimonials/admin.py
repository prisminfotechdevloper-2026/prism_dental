from django.contrib import admin
from .models import Testimonial

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['patient_name', 'treatment', 'category', 'rating', 'verified', 'featured', 'created_at']
    list_filter = ['rating', 'verified', 'featured', 'category']
    search_fields = ['patient_name', 'treatment', 'comment', 'doctor']
    ordering = ['-created_at']
