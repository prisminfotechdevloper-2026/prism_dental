from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from doctors.models import Doctor

class DoctorAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.doctor = Doctor.objects.create(
            name="Dr. Rohan Mehta",
            role="Chief Dentist",
            specialty="Prosthodontist",
            degree="BDS, MDS",
            experience="15+ Years"
        )

    def test_list_doctors(self):
        response = self.client.get('/api/doctors/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) >= 1)

    def test_create_doctor(self):
        payload = {
            "name": "Dr. Priya Sharma",
            "role": "Orthodontist",
            "specialty": "Orthodontics",
            "degree": "BDS, MDS",
            "experience": "10+ Years"
        }
        response = self.client.post('/api/doctors/', data=payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["name"], "Dr. Priya Sharma")

    def test_retrieve_doctor(self):
        response = self.client.get(f'/api/doctors/{self.doctor.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "Dr. Rohan Mehta")

    def test_update_doctor(self):
        response = self.client.patch(
            f'/api/doctors/{self.doctor.pk}/',
            data={"role": "Senior Consultant"},
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["role"], "Senior Consultant")

    def test_delete_doctor(self):
        response = self.client.delete(f'/api/doctors/{self.doctor.pk}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Doctor.objects.filter(pk=self.doctor.pk).exists())
