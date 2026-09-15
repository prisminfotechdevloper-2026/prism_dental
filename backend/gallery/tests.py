from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from gallery.models import GalleryCase

class GalleryAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.case = GalleryCase.objects.create(
            title="Smile Makeover Case 1",
            category="Smile Makeover",
            doctor="Dr. Rohan Mehta",
            description="Complete alignment and whitening"
        )

    def test_list_gallery(self):
        response = self.client.get('/api/gallery/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) >= 1)

    def test_create_gallery(self):
        payload = {
            "title": "Teeth Whitening Before & After",
            "category": "Cosmetic",
            "doctor": "Dr. Rohan Mehta",
            "description": "Noticeable 3 shade improvement"
        }
        response = self.client.post('/api/gallery/', data=payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["title"], "Teeth Whitening Before & After")

    def test_retrieve_gallery(self):
        response = self.client.get(f'/api/gallery/{self.case.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], "Smile Makeover Case 1")

    def test_update_gallery(self):
        response = self.client.patch(
            f'/api/gallery/{self.case.pk}/',
            data={"featured": True},
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["featured"], True)

    def test_delete_gallery(self):
        response = self.client.delete(f'/api/gallery/{self.case.pk}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(GalleryCase.objects.filter(pk=self.case.pk).exists())
