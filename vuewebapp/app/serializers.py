from rest_framework import serializers
from .models import Posts, Tests


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__' 

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tests
        fields = '__all__' 