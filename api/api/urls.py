from django.urls import include, path

urlpatterns = [
    path('search/', include('search.urls')),
    path('splc/', include('splc.urls')),
]
