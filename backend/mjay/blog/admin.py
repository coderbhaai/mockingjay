from django.contrib import admin
from blog.models import Blog, Category, Tag

class BlogAdmin(admin.ModelAdmin):
   exclude = ['posted']
   prepopulated_fields = {'slug': ('title',)}
 
class CategoryAdmin(admin.ModelAdmin):
   prepopulated_fields = {'slug': ('title',)}

class TagAdmin(admin.ModelAdmin):
   prepopulated_fields = {'slug': ('title',)}
 
admin.site.register(Blog, BlogAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Tag, TagAdmin)