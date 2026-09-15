from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import ContactEnquiry, ClinicSettings
from .serializers import ContactEnquirySerializer, ClinicSettingsSerializer

class ContactEnquiryListCreateView(APIView):
    serializer_class = ContactEnquirySerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get(self, request):
        queryset = ContactEnquiry.objects.all().order_by('-created_at')

        # Filter by status
        status_param = request.query_params.get('status')
        if status_param:
            queryset = queryset.filter(status=status_param)

        # Search
        search = request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(email__icontains=search) |
                Q(phone__icontains=search) |
                Q(subject__icontains=search) |
                Q(message__icontains=search)
            )

        # Ordering
        ordering = request.query_params.get('ordering')
        if ordering in ['created_at', '-created_at', 'name', '-name']:
            queryset = queryset.order_by(ordering)

        serializer = ContactEnquirySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ContactEnquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ContactEnquiryDetailView(APIView):
    serializer_class = ContactEnquirySerializer
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        return get_object_or_404(ContactEnquiry, pk=pk)

    def get(self, request, pk):
        enquiry = self.get_object(pk)
        serializer = ContactEnquirySerializer(enquiry)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        enquiry = self.get_object(pk)
        serializer = ContactEnquirySerializer(enquiry, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        enquiry = self.get_object(pk)
        serializer = ContactEnquirySerializer(enquiry, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        enquiry = self.get_object(pk)
        enquiry.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ClinicSettingsListCreateView(APIView):
    serializer_class = ClinicSettingsSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get(self, request):
        settings_qs = ClinicSettings.objects.all().order_by('id')
        if not settings_qs.exists():
            ClinicSettings.objects.create()
            settings_qs = ClinicSettings.objects.all()
        serializer = ClinicSettingsSerializer(settings_qs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ClinicSettingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ClinicSettingsDetailView(APIView):
    serializer_class = ClinicSettingsSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_object(self, pk):
        return get_object_or_404(ClinicSettings, pk=pk)

    def get(self, request, pk):
        clinic_settings = self.get_object(pk)
        serializer = ClinicSettingsSerializer(clinic_settings)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        clinic_settings = self.get_object(pk)
        serializer = ClinicSettingsSerializer(clinic_settings, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        clinic_settings = self.get_object(pk)
        serializer = ClinicSettingsSerializer(clinic_settings, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        clinic_settings = self.get_object(pk)
        clinic_settings.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
