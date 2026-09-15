from django.contrib import admin
from .models import Treatment

@admin.register(Treatment)
class TreatmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price_range', 'duration', 'active']
    list_filter = ['active', 'category']
    search_fields = ['name', 'category', 'description']
    ordering = ['id']
