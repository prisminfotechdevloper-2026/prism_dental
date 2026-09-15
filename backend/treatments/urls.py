from django.urls import path
from treatments.views import TreatmentListCreateView, TreatmentDetailView

urlpatterns = [
    path('treatments/', TreatmentListCreateView.as_view(), name='treatment-list-create'),
    path('treatments/<int:pk>/', TreatmentDetailView.as_view(), name='treatment-detail'),
]
