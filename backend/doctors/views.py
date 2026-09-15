from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Doctor
from .serializers import DoctorSerializer

class DoctorListCreateView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = DoctorSerializer

    def get(self, request):
        queryset = Doctor.objects.all().order_by('id')

        # Filter by available
        available = request.query_params.get('available')
        if available is not None:
            if available.lower() in ['true', '1']:
                queryset = queryset.filter(available=True)
            elif available.lower() in ['false', '0']:
                queryset = queryset.filter(available=False)

        # Filter by specialty
        specialty = request.query_params.get('specialty')
        if specialty:
            queryset = queryset.filter(specialty__icontains=specialty)

        # Search
        search = request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(role__icontains=search) |
                Q(specialty__icontains=search) |
                Q(degree__icontains=search)
            )

        # Ordering
        ordering = request.query_params.get('ordering')
        if ordering in ['rating', '-rating', 'consultation_fee', '-consultation_fee', 'name', '-name', 'id', '-id']:
            queryset = queryset.order_by(ordering)

        serializer = DoctorSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DoctorDetailView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = DoctorSerializer

    def get_object(self, pk):
        return get_object_or_404(Doctor, pk=pk)

    def get(self, request, pk):
        doctor = self.get_object(pk)
        serializer = DoctorSerializer(doctor)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        doctor = self.get_object(pk)
        serializer = DoctorSerializer(doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        doctor = self.get_object(pk)
        serializer = DoctorSerializer(doctor, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        doctor = self.get_object(pk)
        doctor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
