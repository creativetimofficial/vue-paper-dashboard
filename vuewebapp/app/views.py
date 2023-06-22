from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from .models import Posts, Tests, Image, ImageNew
from .serializers import PostSerializer, TestSerializer, ImageSerializer, ImageNewSerializer
from django.shortcuts import render
from django.http import JsonResponse
from .models import PredResults
import numpy as np
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
    
class ImageView(generics.RetrieveAPIView):
    queryset = Image.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = ImageSerializer(queryset, many=True)
        return Response(serializer.data)
    
class ImageNewView(generics.RetrieveAPIView):
    queryset = ImageNew.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = ImageNewSerializer(queryset, many=True)
        return Response(serializer.data)


def predict(request):
    return render(request, 'predict.html')


def predict_chances(request):

    if request.POST.get('action') == 'post':

        # Receive data from client
        sepal_length = float(request.POST.get('sepal_length'))
        sepal_width = float(request.POST.get('sepal_width'))
        petal_length = float(request.POST.get('petal_length'))
        petal_width = float(request.POST.get('petal_width'))

        
        # Make prediction
        result = np.sum([sepal_length, sepal_width, petal_length, petal_width])

        classification = result

        PredResults.objects.create(sepal_length=sepal_length, sepal_width=sepal_width, petal_length=petal_length,
                                   petal_width=petal_width, classification=classification)

        return JsonResponse({'result': classification, 'sepal_length': sepal_length,
                             'sepal_width': sepal_width, 'petal_length': petal_length, 'petal_width': petal_width},
                            safe=False)


def view_results(request):
    # Submit prediction and show all
    data = {"dataset": PredResults.objects.all()}
    return render(request, "results.html", data)

    
