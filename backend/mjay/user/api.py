from .models import User
from rest_framework import viewsets
from django.http import HttpResponse, HttpResponseNotFound, Http404
from rest_framework.response import Response
from .serializers import UserSerializer

class RegisterViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LoginViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer