from django.urls import path
from .views import PostsView, TestsView

urlpatterns = [
    path('posts/',PostsView.as_view(), name='posts_view'),
    path('tests/',TestsView.as_view(), name='tests_view')
]

