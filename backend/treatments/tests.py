from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from treatments.models import Treatment

class TreatmentAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.treatment = Treatment.objects.create(
            name="Teeth Cleaning",
            category="General Dentistry",
            price_range="₹500 - ₹1000",
            duration="30 Mins",
            description="Complete scaling and polishing"
        )

    def test_list_treatments(self):
        response = self.client.get('/api/treatments/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) >= 1)

    def test_create_treatment(self):
        payload = {
            "name": "Dental Implants",
            "category": "Cosmetic Dentistry",
            "price_range": "₹20,000+",
            "duration": "45 Mins",
            "description": "Permanent tooth replacement"
        }
        response = self.client.post('/api/treatments/', data=payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["name"], "Dental Implants")

    def test_retrieve_treatment(self):
        response = self.client.get(f'/api/treatments/{self.treatment.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "Teeth Cleaning")

    def test_update_treatment(self):
        response = self.client.patch(
            f'/api/treatments/{self.treatment.pk}/',
            data={"price_range": "₹600 - ₹1200"},
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["price_range"], "₹600 - ₹1200")

    def test_delete_treatment(self):
        response = self.client.delete(f'/api/treatments/{self.treatment.pk}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Treatment.objects.filter(pk=self.treatment.pk).exists())
