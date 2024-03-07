import os

import django
from django.urls import path
from django.core.wsgi import get_wsgi_application
from django.views.generic import TemplateView

os.environ.setdefault("DJANGO_SETTINGS_MODULE","app.settings")
django.setup()

urlpatterns = [
    path(r'^$', TemplateView.as_view(template_name='index.html')),
]

application = get_wsgi_application()

if __name__ == '__main__':
    from django.core.management import execute_from_command_line

    execute_from_command_line(['manage.py', 'runserver', '8000'])
