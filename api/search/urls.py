from django.urls import path
from django.conf.urls import url
from search.views import Search

urlpatterns = [
    url(r'^$', Search.as_view()),
]