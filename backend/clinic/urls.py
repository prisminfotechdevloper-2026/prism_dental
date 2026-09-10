from django.urls import path
from .views import (
    DoctorListView,
    TreatmentListView,
    TreatmentDetailView,
    TechnologyListView,
    GalleryListView,
    TestimonialListView
)

urlpatterns = [
    path('doctors/', DoctorListView.as_view(), name='doctor-list'),
    path('treatments/', TreatmentListView.as_view(), name='treatment-list'),
    path('treatments/<slug:slug>/', TreatmentDetailView.as_view(), name='treatment-detail'),
    path('technology/', TechnologyListView.as_view(), name='technology-list'),
    path('gallery/', GalleryListView.as_view(), name='gallery-list'),
    path('testimonials/', TestimonialListView.as_view(), name='testimonial-list'),
]