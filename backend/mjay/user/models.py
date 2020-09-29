from django.db import models
from django.contrib.auth.models import ( AbstractBaseUser, BaseUserManager )
from django.contrib.auth.hashers import make_password

class UserManager(BaseUserManager):

    def create_user(self, username, email, role, password=None):
        if username is None:
            raise TypeError('Users should have a username')
        if email is None:
            raise TypeError('Users should have a Email')
        if role is None:
            raise TypeError('Users should have a Role')

        user = self.model(username=username, email=self.normalize_email(email), role=role)
        # user.set_password(make_password(password))
        user.set_password(password)
        # user.make_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, role, password=None):
        if password is None:
            raise TypeError('Password should not be none')

        user = self.create_user(username, email, role)
        user.is_superuser = True
        user.is_verified = True
        user.is_active = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    username = models.CharField(max_length=255, unique=True, db_index=True)
    role = models.CharField(max_length=30)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    last_login = models.DateTimeField(auto_now_add=True, blank=True)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'role']

    objects = UserManager()

    def __str__(self):
        return self.email