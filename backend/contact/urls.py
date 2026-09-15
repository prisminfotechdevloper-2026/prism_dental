from django.urls import path
from contact.views import (
    ContactEnquiryListCreateView,
    ContactEnquiryDetailView,
    ClinicSettingsListCreateView,
    ClinicSettingsDetailView,
)

urlpatterns = [
    path('enquiries/', ContactEnquiryListCreateView.as_view(), name='enquiry-list-create'),
    path('enquiries/<int:pk>/', ContactEnquiryDetailView.as_view(), name='enquiry-detail'),
    path('clinic-settings/', ClinicSettingsListCreateView.as_view(), name='clinic-settings-list-create'),
    path('clinic-settings/<int:pk>/', ClinicSettingsDetailView.as_view(), name='clinic-settings-detail'),
]
