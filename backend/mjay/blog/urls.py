from django.urls import path, include
from rest_framework import routers
from .api import BlogViewSet, SuggestBlogViewSet, SingleBlogViewSet, CategoryBlogViewSet

router = routers.DefaultRouter()
router.register('list', BlogViewSet, 'blogs')
router.register('suggest_blogs', SuggestBlogViewSet, 'suggest-blogs')
router.register('single/<slug:slug>/', SingleBlogViewSet, 'blogs')
# router.register('post_detail/(?P<slug>[\w-]+)', BlogViewSet, 'single-blog')
# router.register('category/(?P<slug>[\w-]+)/$', BlogViewSet, 'blogs')

urlpatterns = [
    path('', include(router.urls)),
]
