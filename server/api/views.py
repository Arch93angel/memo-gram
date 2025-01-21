from api.models import Story
from api.serializers import StorySerializer
from rest_framework import viewsets



class StoryViewSet(viewsets.ModelViewSet):
    queryset = Story.objects.all()
    serializer_class = StorySerializer