from rest_framework import serializers
from api.models import Story
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token


class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email','username','password',]

        extra_kwargs = {'password':
            {
                'write_only':True, 
                'required':True,
            }}
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.get_or_create(user=user)
        return user