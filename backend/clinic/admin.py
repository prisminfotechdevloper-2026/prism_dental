from django.contrib import admin
from .models import ClinicInfo, DoctorProfile, Treatment, TechnologyService, GalleryItem, Testimonial


@admin.register(ClinicInfo)
class ClinicInfoAdmin(admin.ModelAdmin):
    list_display = ('clinic_name', 'phone_number', 'whatsapp_number', 'email', 'opening_hours')


@admin.register(DoctorProfile)
class DoctorProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'qualification', 'specialization', 'experience_years', 'order', 'is_active')
    list_filter = ('is_active', 'specialization')
    search_fields = ('name', 'qualification', 'specialization')
    list_editable = ('order', 'is_active')


@admin.register(Treatment)
class TreatmentAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'slug', 'is_active', 'created_at')
    list_filter = ('category', 'is_active')
    search_fields = ('title', 'category', 'short_description')
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ('is_active',)


@admin.register(TechnologyService)
class TechnologyServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('title', 'description')


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'patient_consent_verified', 'uploaded_at')
    list_filter = ('category', 'patient_consent_verified', 'uploaded_at')
    search_fields = ('title',)
    list_editable = ('patient_consent_verified',)


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('patient_name', 'rating', 'treatment_taken', 'is_approved', 'created_at')
    list_filter = ('rating', 'is_approved', 'created_at')
    search_fields = ('patient_name', 'review_text')
    list_editable = ('is_approved',)





from django.contrib import admin
from .models import StaffProfile

@admin.register(StaffProfile)
class StaffProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'phone_number', 'is_active', 'created_at')
    list_filter = ('role', 'is_active')
    search_fields = ('user__username', 'user__email', 'phone_number')

    def save_model(self, request, obj, form, change):
        if not change:  # Naya user banate waqt
            obj.created_by = request.user
            # Staff user ko login permission automatically mil jaye
            obj.user.is_staff = True
            obj.user.save()
        super().save_model(request, obj, form, change)    


