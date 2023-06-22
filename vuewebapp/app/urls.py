from django.urls import path
from .views import PostsView, TestsView, ImageView, ImageNewView
from . import views

app_name = "predict"

urlpatterns = [
    path('posts/',PostsView.as_view(), name='posts_view'),
    path('tests/',TestsView.as_view(), name='tests_view'),
    #path('image/',ImageView.as_view(), name='image_view'),
    path('image/',ImageNewView.as_view(), name='imagenew_view'),
    path('', views.predict, name='prediction_page'),
    path('predict/', views.predict_chances, name='submit_prediction'),
    path('results/', views.view_results, name='results'),
]

