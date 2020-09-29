from django.db import models
from django.urls import reverse


class Category(models.Model):
    title = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=100, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '%s' % self.title


class Tag(models.Model):
    title = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=100, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '%s' % self.title


class Blog(models.Model):
    title = models.CharField(max_length=100, unique=True, db_index=True)
    slug = models.SlugField(max_length=100, unique=True)
    coverImg = models.ImageField(upload_to="blogs")
    body = models.TextField()
    excerpt = models.TextField()
    category = models.ManyToManyField(Category)
    tag = models.ManyToManyField(Tag)
    display = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return '%s' % self.title

    def get_img_url(self, obj):
        return self.context['request'].build_absolute_uri(obj.coverImg.url)
