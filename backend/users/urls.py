from django.urls import path
from .api_views import *

urlpatterns = [
    path('register', register),
    path('logout', logout),
]
