from django.contrib import admin
from .models import Tests, Posts, Image, ImageNew

# Register your models here.

admin.site.register(Posts)
admin.site.register(Tests)
admin.site.register(Image)
admin.site.register(ImageNew)
