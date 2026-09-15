from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenRefreshView
from .serializers import AdminLoginSerializer, UserProfileSerializer


class AdminLoginView(APIView):
    permission_classes = [AllowAny]
    serializer_class = AdminLoginSerializer

    def post(self, request):
        serializer = AdminLoginSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            'id': user.id,
            'name': f"{user.first_name} {user.last_name}".strip() or "Prism Dental Admin",
            'email': user.email,
            'username': user.username,
            'role': 'Chief Dental Administrator' if user.is_superuser else 'Clinic Staff',
            'is_staff': user.is_staff,
            'is_superuser': user.is_superuser,
            'avatarInitials': (user.first_name[:1] + user.last_name[:1]).upper() if (user.first_name and user.last_name) else "AD",
        }, status=status.HTTP_200_OK)
