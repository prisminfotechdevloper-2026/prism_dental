from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from contact.models import ContactEnquiry, ClinicSettings

class ContactAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.enquiry = ContactEnquiry.objects.create(
            name="Amit Kumar",
            email="amit@example.com",
            phone="9988776655",
            subject="General Question",
            message="What are the clinic timings?"
        )
        self.settings = ClinicSettings.objects.create(
            clinic_name="Prism Dental Clinic",
            phone="+91 82392 39249"
        )

    def test_list_enquiries(self):
        response = self.client.get('/api/enquiries/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) >= 1)

    def test_create_enquiry(self):
        payload = {
            "name": "Neha Sharma",
            "email": "neha@example.com",
            "phone": "9876541230",
            "subject": "Inquiry",
            "message": "Do you offer root canals?"
        }
        response = self.client.post('/api/enquiries/', data=payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["name"], "Neha Sharma")

    def test_retrieve_enquiry(self):
        response = self.client.get(f'/api/enquiries/{self.enquiry.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "Amit Kumar")

    def test_get_clinic_settings(self):
        response = self.client.get('/api/clinic-settings/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) >= 1)

    def test_update_clinic_settings(self):
        response = self.client.patch(
            f'/api/clinic-settings/{self.settings.pk}/',
            data={"tagline": "Best Dental Care"},
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["tagline"], "Best Dental Care")
