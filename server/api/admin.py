from django.contrib import admin
from api.models import Story

# Register your models here.
@admin.register(Story)
class StoryModel(admin.ModelAdmin):
    list_filter = ('caption', 'author', 'tags', 'created_at', 'updated_at')
    list_display = ('caption', 'author', 'tags', 'created_at','updated_at')
    date_hierarchy = ('updated_at')
    empty_value_display = "-empty-"

