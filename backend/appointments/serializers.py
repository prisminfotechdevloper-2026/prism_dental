import re
from rest_framework import serializers
from .models import AppointmentEnquiry, ContactSubmission
from clinic.models import Treatment


class AppointmentEnquirySerializer(serializers.ModelSerializer):
    treatment_title = serializers.CharField(source='treatment.title', read_only=True)

    class Meta:
        model = AppointmentEnquiry
        fields = [
            'id',
            'patient_name',
            'phone_number',
            'email',
            'treatment',
            'treatment_title',
            'preferred_date',
            'preferred_time',
            'message',
            'status',
            'created_at',
        ]
        read_only_fields = ['id', 'status', 'created_at']

    def validate_phone_number(self, value):
        cleaned_number = re.sub(r'[^0-9]', '', value)
        if len(cleaned_number) < 10:
            raise serializers.ValidationError("Please enter a valid 10-digit mobile number.")
        return cleaned_number


class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = [
            'id',
            'name',
            'phone',
            'email',
            'subject',
            'message',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']

    def validate_phone(self, value):
        cleaned_number = re.sub(r'[^0-9]', '', value)
        if len(cleaned_number) < 10:
            raise serializers.ValidationError("Please enter a valid contact number.")
        return cleaned_number