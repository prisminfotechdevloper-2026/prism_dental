from rest_framework import generics, status
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema, OpenApiResponse
from .models import AppointmentEnquiry, ContactSubmission
from .serializers import AppointmentEnquirySerializer, ContactSubmissionSerializer


@extend_schema(
    summary="Book New Dental Appointment",
    description="Submit an appointment enquiry with preferred date, time slot, and treatment.",
    responses={
        201: AppointmentEnquirySerializer,
        400: OpenApiResponse(description="Validation error in form inputs"),
    }
)
class AppointmentCreateView(generics.CreateAPIView):
    queryset = AppointmentEnquiry.objects.all()
    serializer_class = AppointmentEnquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                "success": True,
                "message": "Appointment request submitted successfully. Our clinic team will contact you shortly.",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED
        )


@extend_schema(
    summary="Submit Contact Enquiry",
    description="Submit general contact form message from the website.",
    responses={
        201: ContactSubmissionSerializer,
        400: OpenApiResponse(description="Validation error in form inputs"),
    }
)
class ContactSubmissionCreateView(generics.CreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                "success": True,
                "message": "Your message has been received successfully. Thank you for contacting us.",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED
        )