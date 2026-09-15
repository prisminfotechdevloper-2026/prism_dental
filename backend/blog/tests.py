from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from blog.models import BlogPost

class BlogAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.post = BlogPost.objects.create(
            title="Importance of Oral Hygiene",
            category="Oral Health",
            author="Dr. Rohan Mehta",
            content="Brushing twice a day is essential."
        )

    def test_list_blog(self):
        response = self.client.get('/api/blog/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) >= 1)

    def test_create_blog(self):
        payload = {
            "title": "Dental Implants Guide",
            "category": "Treatment Guide",
            "author": "Dr. Rohan Mehta",
            "content": "All you need to know about implants."
        }
        response = self.client.post('/api/blog/', data=payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["title"], "Dental Implants Guide")

    def test_retrieve_blog(self):
        response = self.client.get(f'/api/blog/{self.post.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], "Importance of Oral Hygiene")

    def test_update_blog(self):
        response = self.client.patch(
            f'/api/blog/{self.post.pk}/',
            data={"status": "Draft"},
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["status"], "Draft")

    def test_delete_blog(self):
        response = self.client.delete(f'/api/blog/{self.post.pk}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(BlogPost.objects.filter(pk=self.post.pk).exists())
