from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Testimonial
from .serializers import TestimonialSerializer

class TestimonialListCreateView(APIView):
    permission_classes = [AllowAny]
    serializer_class = TestimonialSerializer

    def get(self, request):
        queryset = Testimonial.objects.all().order_by('-featured', '-created_at')

        # Filter by verified
        verified = request.query_params.get('verified')
        if verified is not None:
            if verified.lower() in ['true', '1']:
                queryset = queryset.filter(verified=True)
            elif verified.lower() in ['false', '0']:
                queryset = queryset.filter(verified=False)

        # Filter by featured
        featured = request.query_params.get('featured')
        if featured is not None:
            if featured.lower() in ['true', '1']:
                queryset = queryset.filter(featured=True)
            elif featured.lower() in ['false', '0']:
                queryset = queryset.filter(featured=False)

        # Filter by category
        category = request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__icontains=category)

        # Filter by rating
        rating = request.query_params.get('rating')
        if rating:
            queryset = queryset.filter(rating=rating)

        # Search
        search = request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(patient_name__icontains=search) |
                Q(treatment__icontains=search) |
                Q(comment__icontains=search) |
                Q(doctor__icontains=search)
            )

        # Ordering
        ordering = request.query_params.get('ordering')
        if ordering in ['rating', '-rating', 'created_at', '-created_at']:
            queryset = queryset.order_by(ordering)

        serializer = TestimonialSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TestimonialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestimonialDetailView(APIView):
    serializer_class = TestimonialSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_object(self, pk):
        return get_object_or_404(Testimonial, pk=pk)

    def get(self, request, pk):
        testimonial = self.get_object(pk)
        serializer = TestimonialSerializer(testimonial)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        testimonial = self.get_object(pk)
        serializer = TestimonialSerializer(testimonial, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        testimonial = self.get_object(pk)
        serializer = TestimonialSerializer(testimonial, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        testimonial = self.get_object(pk)
        testimonial.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
