from django.urls import path
from django.urls import re_path
from api.consumers import ChatConsumer, StoryConsumer

websocket_urlpatterns = [
    path(r"ws/chat/", ChatConsumer.as_asgi()),  # WebSocket route
    re_path(r"ws/stories/$", StoryConsumer.as_asgi()),
]