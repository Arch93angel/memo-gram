from django.urls import path,include
from rest_framework.routers import DefaultRouter
from api import views

# Create a router and register our ViewSets with it.
router = DefaultRouter()
router.register(r'stories', views.StoryViewSet, basename='story')
router.register(r'users', views.UserViewSet, basename='user')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('api/', include(router.urls)),
]
