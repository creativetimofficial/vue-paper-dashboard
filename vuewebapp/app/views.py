from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from .models import Posts, Tests
from .serializers import PostSerializer, TestSerializer
# Create your views here.

class PostsView(generics.RetrieveAPIView):
    queryset = Posts.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)
    
class TestsView(generics.RetrieveAPIView):
    queryset = Tests.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = TestSerializer(queryset, many=True)
        return Response(serializer.data)
    
