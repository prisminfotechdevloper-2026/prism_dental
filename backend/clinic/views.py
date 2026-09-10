from rest_framework import generics
from .models import DoctorProfile, Treatment, TechnologyService, GalleryItem, Testimonial
from .serializers import (
    DoctorProfileSerializer,
    TreatmentSerializer,
    TechnologyServiceSerializer,
    GalleryItemSerializer,
    TestimonialSerializer
)

class DoctorListView(generics.ListAPIView):
    queryset = DoctorProfile.objects.filter(is_active=True)
    serializer_class = DoctorProfileSerializer

class TreatmentListView(generics.ListAPIView):
    queryset = Treatment.objects.filter(is_active=True)
    serializer_class = TreatmentSerializer

class TreatmentDetailView(generics.RetrieveAPIView):
    queryset = Treatment.objects.filter(is_active=True)
    serializer_class = TreatmentSerializer
    lookup_field = 'slug'

class TechnologyListView(generics.ListAPIView):
    queryset = TechnologyService.objects.all()
    serializer_class = TechnologyServiceSerializer

class GalleryListView(generics.ListAPIView):
    serializer_class = GalleryItemSerializer

    def get_queryset(self):
        category = self.request.query_params.get('category')
        queryset = GalleryItem.objects.filter(patient_consent_given=True)
        if category:
            queryset = queryset.filter(category=category)
        return queryset

class TestimonialListView(generics.ListAPIView):
    queryset = Testimonial.objects.filter(is_approved=True)
    serializer_class = TestimonialSerializer