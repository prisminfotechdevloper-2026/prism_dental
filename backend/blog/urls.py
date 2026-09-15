from django.urls import path
from blog.views import BlogPostListCreateView, BlogPostDetailView

urlpatterns = [
    path('blog/', BlogPostListCreateView.as_view(), name='blog-list-create'),
    path('blog/<int:pk>/', BlogPostDetailView.as_view(), name='blog-detail'),
]
