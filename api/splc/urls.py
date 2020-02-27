from django.conf.urls import url
from splc.views import SPLC

urlpatterns = [
    url(r'^$', SPLC.as_view()),
]