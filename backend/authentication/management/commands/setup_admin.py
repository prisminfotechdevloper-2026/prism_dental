from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = "Sets up or updates the default Prism Dental admin user"

    def handle(self, *args, **options):
        admin_email = "contact.prisminfotech@gmail.com"
        admin_pass = "prism123"
        admin_username = "prisminfotech"

        # Check if user with this email or username exists
        user = User.objects.filter(email__iexact=admin_email).first()
        if not user:
            user = User.objects.filter(username__iexact=admin_username).first()

        if user:
            user.username = admin_username
            user.email = admin_email
            user.set_password(admin_pass)
            user.is_staff = True
            user.is_superuser = True
            user.first_name = "Prism"
            user.last_name = "Admin"
            user.save()
            self.stdout.write(self.style.SUCCESS(
                f"Successfully updated admin user: {admin_email} / (password updated)"
            ))
        else:
            user = User.objects.create_superuser(
                username=admin_username,
                email=admin_email,
                password=admin_pass,
                first_name="Prism",
                last_name="Admin"
            )
            self.stdout.write(self.style.SUCCESS(
                f"Successfully created superuser: {admin_email} / {admin_pass}"
            ))
