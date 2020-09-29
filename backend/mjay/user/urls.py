from django.urls import path, include
from rest_framework import routers
from .api import RegisterViewSet, LoginViewSet


router = routers.DefaultRouter()
router.register('register', RegisterViewSet, 'register')
router.register('login', LoginViewSet, 'login')

urlpatterns = [
    path('', include(router.urls)),
]
