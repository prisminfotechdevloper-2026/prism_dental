from django.db import models
from django.utils.text import slugify

class BlogPost(models.Model):
    STATUS_CHOICES = [
        ('Published', 'Published'),
        ('Draft', 'Draft'),
    ]

    blog_id = models.CharField(max_length=100, unique=True, blank=True, null=True, help_text="e.g. blog-1")
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    category = models.CharField(max_length=100, help_text="e.g. General Dentistry, Oral Health, Treatment Guide")
    author = models.CharField(max_length=150, default="Dr. Rohan Mehta")
    author_role = models.CharField(max_length=150, default="Dental Surgeon", blank=True)
    read_time = models.CharField(max_length=50, default="5 min read")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Published')
    views = models.PositiveIntegerField(default=0)
    tags = models.JSONField(default=list, blank=True, help_text="Array of tag strings")
    excerpt = models.TextField(blank=True, help_text="Short teaser summary")
    content = models.TextField(blank=True, help_text="Full article body (HTML or Markdown or paragraphs)")
    image = models.ImageField(upload_to="blog/", blank=True, null=True)
    cover_image_url = models.CharField(max_length=500, blank=True)
    published_date = models.CharField(max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Blog Post"
        verbose_name_plural = "Blog Posts"

    def save(self, *args, **kwargs):
        if not self.slug and self.title:
            self.slug = slugify(self.title)[:200]
        if not self.blog_id and self.slug:
            self.blog_id = f"blog-{self.slug[:50]}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} ({self.status})"
