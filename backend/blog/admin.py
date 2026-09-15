from django.contrib import admin
from .models import BlogPost

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'author', 'status', 'views', 'created_at']
    list_filter = ['status', 'category', 'author']
    search_fields = ['title', 'category', 'author', 'content']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-created_at']
