from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404
from django.db.models import Q
# pyrefly: ignore [missing-import]
from .models import BlogPost
# pyrefly: ignore [missing-import]
from .serializers import BlogPostSerializer

class BlogPostListCreateView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = BlogPostSerializer

    def get(self, request):
        queryset = BlogPost.objects.all().order_by('-created_at')

        # Filter by status
        status_param = request.query_params.get('status')
        if status_param:
            queryset = queryset.filter(status=status_param)

        # Filter by category
        category = request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__icontains=category)

        # Search
        search = request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) |
                Q(category__icontains=search) |
                Q(author__icontains=search) |
                Q(content__icontains=search)
            )

        # Ordering
        ordering = request.query_params.get('ordering')
        if ordering in ['views', '-views', 'created_at', '-created_at', 'title', '-title']:
            queryset = queryset.order_by(ordering)

        serializer = BlogPostSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = BlogPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlogPostDetailView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = BlogPostSerializer

    def get_object(self, pk):
        return get_object_or_404(BlogPost, pk=pk)

    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = BlogPostSerializer(post)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        post = self.get_object(pk)
        serializer = BlogPostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        post = self.get_object(pk)
        serializer = BlogPostSerializer(post, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
