from django.core.mail import send_mail
from django.conf import settings 

class EmailService:
    def send(
        subject=settings.EMAIL_DEFAULTS["subject"],
        body="",
        receivers=[]
    ):
        return send_mail(
            subject,
            str(body),
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=receivers,
            fail_silently=True,
        )
