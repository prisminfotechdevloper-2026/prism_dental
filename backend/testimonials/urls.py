from django.urls import path
from testimonials.views import TestimonialListCreateView, TestimonialDetailView

urlpatterns = [
    path('testimonials/', TestimonialListCreateView.as_view(), name='testimonial-list-create'),
    path('testimonials/<int:pk>/', TestimonialDetailView.as_view(), name='testimonial-detail'),
]
