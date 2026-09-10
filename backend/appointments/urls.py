from django.urls import path
from .views import AppointmentCreateView, ContactSubmissionCreateView

urlpatterns = [
    path('book/', AppointmentCreateView.as_view(), name='appointment-book'),
    path('contact-query/', ContactSubmissionCreateView.as_view(), name='contact-query-submit'),
]