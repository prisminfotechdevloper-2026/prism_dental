from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from django.db.models import Q
# pyrefly: ignore [missing-import]
from .models import Appointment
# pyrefly: ignore [missing-import]
from .serializers import AppointmentSerializer

class AppointmentListCreateView(APIView):
    serializer_class = AppointmentSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get(self, request):
        queryset = Appointment.objects.all().order_by('-date', '-created_at')

        # Query parameter filters
        status_param = request.query_params.get('status')
        if status_param:
            queryset = queryset.filter(status=status_param)

        payment_status = request.query_params.get('payment_status')
        if payment_status:
            queryset = queryset.filter(payment_status=payment_status)

        date = request.query_params.get('date')
        if date:
            queryset = queryset.filter(date=date)

        doctor = request.query_params.get('doctor')
        if doctor:
            queryset = queryset.filter(doctor__icontains=doctor)

        treatment = request.query_params.get('treatment')
        if treatment:
            queryset = queryset.filter(treatment__icontains=treatment)

        # Search parameter
        search = request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(patient_name__icontains=search) |
                Q(phone__icontains=search) |
                Q(email__icontains=search) |
                Q(appointment_id__icontains=search) |
                Q(doctor__icontains=search) |
                Q(treatment__icontains=search)
            )

        serializer = AppointmentSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AppointmentDetailView(APIView):
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        return get_object_or_404(Appointment, pk=pk)

    def get(self, request, pk):
        appointment = self.get_object(pk)
        serializer = AppointmentSerializer(appointment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        appointment = self.get_object(pk)
        serializer = AppointmentSerializer(appointment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        appointment = self.get_object(pk)
        serializer = AppointmentSerializer(appointment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        appointment = self.get_object(pk)
        appointment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
