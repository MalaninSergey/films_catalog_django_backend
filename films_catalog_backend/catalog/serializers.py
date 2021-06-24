from .models import Film, Series, Person
from rest_framework import routers, serializers, viewsets


class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = ['name', 'description', 'year', 'rating', 'image', 'tags', 'director', 'actors', 'screenwriter',
                  'budget', 'age_restrictions']


class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = ['name', 'description', 'year', 'rating', 'image', 'tags', 'director', 'actors', 'screenwriter',
                  'age_restrictions']


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['name', 'dob', 'birthplace', 'biography', 'image']
