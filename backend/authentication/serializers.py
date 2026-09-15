from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_staff', 'is_superuser']


class AdminLoginSerializer(serializers.Serializer):
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    def validate(self, attrs):
        email_or_username = attrs.get('email', '').strip().lower()
        password = attrs.get('password', '')

        if not email_or_username or not password:
            raise serializers.ValidationError("Both email/username and password are required.")

        # Find user by email (case-insensitive) or username
        user = User.objects.filter(email__iexact=email_or_username).first()
        if not user:
            user = User.objects.filter(username__iexact=email_or_username).first()

        if not user:
            raise serializers.ValidationError("No account found with this email.")

        # Verify password
        if not user.check_password(password):
            raise serializers.ValidationError("Incorrect password. Please try again.")

        if not user.is_active:
            raise serializers.ValidationError("This account has been disabled.")

        # Generate JWT Tokens
        refresh = RefreshToken.for_user(user)
        # Custom claims
        refresh['email'] = user.email
        refresh['username'] = user.username
        refresh['is_staff'] = user.is_staff

        return {
            'user': {
                'id': user.id,
                'name': f"{user.first_name} {user.last_name}".strip() or "Prism Dental Admin",
                'email': user.email,
                'username': user.username,
                'role': 'Chief Dental Administrator' if user.is_superuser else 'Clinic Staff',
                'is_staff': user.is_staff,
                'is_superuser': user.is_superuser,
                'avatarInitials': (user.first_name[:1] + user.last_name[:1]).upper() if (user.first_name and user.last_name) else "AD",
            },
            'access': str(refresh.access_token),
            'refresh': str(refresh),
        }
