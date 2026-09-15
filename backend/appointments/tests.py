from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from appointments.models import Appointment

class AppointmentAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.appointment = Appointment.objects.create(
            patient_name="Rahul Sharma",
            phone="9876543210",
            email="rahul@example.com",
            treatment="Teeth Whitening",
            doctor="Dr. Rohan Mehta",
            date="2026-09-20",
            time_slot="10:00 AM - 11:00 AM"
        )

    def test_list_appointments(self):
        response = self.client.get('/api/appointments/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) >= 1)

    def test_create_appointment(self):
        payload = {
            "patient_name": "Pooja Verma",
            "phone": "9812345678",
            "treatment": "Root Canal",
            "date": "2026-09-25",
            "time_slot": "02:00 PM - 03:00 PM"
        }
        response = self.client.post('/api/appointments/', data=payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["patient_name"], "Pooja Verma")

    def test_retrieve_appointment(self):
        response = self.client.get(f'/api/appointments/{self.appointment.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["patient_name"], "Rahul Sharma")

    def test_update_appointment(self):
        response = self.client.patch(
            f'/api/appointments/{self.appointment.pk}/',
            data={"status": "Confirmed"},
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["status"], "Confirmed")

    def test_delete_appointment(self):
        response = self.client.delete(f'/api/appointments/{self.appointment.pk}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Appointment.objects.filter(pk=self.appointment.pk).exists())
