from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('films', FilmViewSet, 'film')
router.register('series', SeriesViewSet, 'series')
router.register('persons', PersonViewSet, 'person')

urlpatterns = [
    path('', include(router.urls))
]
