from rest_framework import serializers
from .models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='patient_name', required=False)
    timeSlot = serializers.CharField(source='time_slot', required=False)

    class Meta:
        model = Appointment
        fields = '__all__'
