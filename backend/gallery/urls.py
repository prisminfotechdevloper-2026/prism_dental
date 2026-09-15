from django.urls import path
from gallery.views import GalleryCaseListCreateView, GalleryCaseDetailView

urlpatterns = [
    path('gallery/', GalleryCaseListCreateView.as_view(), name='gallery-list-create'),
    path('gallery/<int:pk>/', GalleryCaseDetailView.as_view(), name='gallery-detail'),
]
