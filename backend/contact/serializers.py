from rest_framework import serializers
from .models import ContactEnquiry, ClinicSettings

class ContactEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactEnquiry
        fields = '__all__'


class ClinicSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClinicSettings
        fields = '__all__'
