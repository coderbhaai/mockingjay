from .models import Blog, Category, Tag
from rest_framework import viewsets
from .serializers import BlogSerializer, SingleSerializer, CategorySerializer
from django.http import HttpResponse, HttpResponseNotFound, Http404
from rest_framework.response import Response

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class SuggestBlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.filter()[:3]
    serializer_class = BlogSerializer

class SingleBlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = SingleSerializer

    def list(self, request, *args, **kwargs):
        blogs = Blog.objects.all()
        category = Category.objects.all()
        tag = Tag.objects.all()
        slug = self.request.query_params.get('slug', None)
        if slug is not None:
            single = self.queryset.filter(slug=slug)
            context = {
                "blogs": list(blogs.values()),
                "category": list(category.values()),
                "tag": list(tag.values()),
                "single": list(single.values()),
            }
            return Response({"result": context})
        raise Http404("Post not found") 

class CategoryBlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    # def list(self, request, *args, **kwargs):
    #     slug = self.request.query_params.get('slug', None)
    #     if slug is not None:
    #         cat_details = Category.objects.filter(slug=slug).values("id", "title")[0]
    #         blogs = Blog.objects.filter(category=cat_details['id'])
    #         print("Blogs", blogs[0].coverImg)
    #         context = {
    #             "blogs": list(blogs.values()),
    #         }
    #         return Response({"result": context})
    #     raise Http404("Post not found")

    def get_queryset(self):
        slug = self.request.query_params.get('slug', None)
        if slug is not None:
            cat_details = Category.objects.filter(slug=slug).values("id", "title")[0]
            print("cat_details", cat_details)
            blogs = Blog.objects.filter(category=cat_details['id'])
            # context = {
            #     "blogs": blogs,
            #     # "blogs": list(blogs.values()),
            #     "cat":  cat_details
            # }
            # return context
            return blogs
            # return Response({"result": context})


class TagBlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def get_queryset(self):
        slug = self.request.query_params.get('slug', None)
        if slug is not None:
            tag_details = Tag.objects.filter(slug=slug).values("id", "title")[0]
            print("tag_details", tag_details)
            blogs = Blog.objects.filter(tag=tag_details['id'])
            return blogs