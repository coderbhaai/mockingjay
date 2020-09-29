from django.urls import path, include
from rest_framework import routers
from .api import BlogViewSet, SuggestBlogViewSet, SingleBlogViewSet, CategoryBlogViewSet, TagBlogViewSet


router = routers.DefaultRouter()
router.register('list', BlogViewSet, 'blogs')
router.register('suggest_blogs', SuggestBlogViewSet, 'suggest-blogs')
router.register('single', SingleBlogViewSet, 'single-blog')
router.register('category', CategoryBlogViewSet, 'category-blog')
router.register('tag', TagBlogViewSet, 'tag-blog')

urlpatterns = [
    path('', include(router.urls)),
]

