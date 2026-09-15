from django.contrib import admin
from .models import Doctor

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'specialty', 'rating', 'available', 'consultation_fee', 'phone']
    list_filter = ['available', 'specialty', 'rating']
    search_fields = ['name', 'role', 'specialty', 'degree', 'email', 'phone']
    ordering = ['id']
