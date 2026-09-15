from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from testimonials.models import Testimonial

class TestimonialAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.testimonial = Testimonial.objects.create(
            patient_name="Sunil Gupta",
            treatment="Dental Cleaning",
            comment="Very friendly staff and painless treatment.",
            rating=5
        )

    def test_list_testimonials(self):
        response = self.client.get('/api/testimonials/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) >= 1)

    def test_create_testimonial(self):
        payload = {
            "patient_name": "Meena Kumari",
            "treatment": "Braces",
            "comment": "Doctor was very gentle and helpful.",
            "rating": 5
        }
        response = self.client.post('/api/testimonials/', data=payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["patient_name"], "Meena Kumari")

    def test_retrieve_testimonial(self):
        response = self.client.get(f'/api/testimonials/{self.testimonial.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["patient_name"], "Sunil Gupta")

    def test_update_testimonial(self):
        response = self.client.patch(
            f'/api/testimonials/{self.testimonial.pk}/',
            data={"rating": 4},
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["rating"], 4)

    def test_delete_testimonial(self):
        response = self.client.delete(f'/api/testimonials/{self.testimonial.pk}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Testimonial.objects.filter(pk=self.testimonial.pk).exists())
