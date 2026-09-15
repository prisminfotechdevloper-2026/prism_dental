from rest_framework import serializers
from .models import GalleryCase

class GalleryCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryCase
        fields = '__all__'
