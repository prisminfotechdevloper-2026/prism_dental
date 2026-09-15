from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import GalleryCase
from .serializers import GalleryCaseSerializer

class GalleryCaseListCreateView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = GalleryCaseSerializer

    def get(self, request):
        queryset = GalleryCase.objects.all().order_by('-featured', '-created_at')

        # Filter by category
        category = request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__icontains=category)

        # Filter by patient_consent
        patient_consent = request.query_params.get('patient_consent')
        if patient_consent is not None:
            if patient_consent.lower() in ['true', '1']:
                queryset = queryset.filter(patient_consent=True)
            elif patient_consent.lower() in ['false', '0']:
                queryset = queryset.filter(patient_consent=False)

        # Filter by featured
        featured = request.query_params.get('featured')
        if featured is not None:
            if featured.lower() in ['true', '1']:
                queryset = queryset.filter(featured=True)
            elif featured.lower() in ['false', '0']:
                queryset = queryset.filter(featured=False)

        # Search
        search = request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) |
                Q(category__icontains=search) |
                Q(doctor__icontains=search) |
                Q(description__icontains=search)
            )

        # Ordering
        ordering = request.query_params.get('ordering')
        if ordering in ['featured', '-featured', 'created_at', '-created_at', 'title', '-title']:
            queryset = queryset.order_by(ordering)

        serializer = GalleryCaseSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = GalleryCaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GalleryCaseDetailView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = GalleryCaseSerializer

    def get_object(self, pk):
        return get_object_or_404(GalleryCase, pk=pk)

    def get(self, request, pk):
        case = self.get_object(pk)
        serializer = GalleryCaseSerializer(case)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        case = self.get_object(pk)
        serializer = GalleryCaseSerializer(case, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        case = self.get_object(pk)
        serializer = GalleryCaseSerializer(case, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        case = self.get_object(pk)
        case.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
