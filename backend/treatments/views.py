from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Treatment
from .serializers import TreatmentSerializer

class TreatmentListCreateView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = TreatmentSerializer

    def get(self, request):
        queryset = Treatment.objects.all().order_by('id')

        # Filter by active
        active = request.query_params.get('active')
        if active is not None:
            if active.lower() in ['true', '1']:
                queryset = queryset.filter(active=True)
            elif active.lower() in ['false', '0']:
                queryset = queryset.filter(active=False)

        # Filter by category
        category = request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__icontains=category)

        # Search
        search = request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(category__icontains=search) |
                Q(description__icontains=search)
            )

        # Ordering
        ordering = request.query_params.get('ordering')
        if ordering in ['name', '-name', 'category', '-category', 'id', '-id']:
            queryset = queryset.order_by(ordering)

        serializer = TreatmentSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TreatmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TreatmentDetailView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = TreatmentSerializer

    def get_object(self, pk):
        return get_object_or_404(Treatment, pk=pk)

    def get(self, request, pk):
        treatment = self.get_object(pk)
        serializer = TreatmentSerializer(treatment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        treatment = self.get_object(pk)
        serializer = TreatmentSerializer(treatment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        treatment = self.get_object(pk)
        serializer = TreatmentSerializer(treatment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        treatment = self.get_object(pk)
        treatment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
