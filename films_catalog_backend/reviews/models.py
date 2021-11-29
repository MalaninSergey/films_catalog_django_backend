from django.db import models
from films_catalog_backend.users.models import Profile


class Review(models.Model):
    STATE_CHOICES = [
        ('+', 'Positive'),
        ('=', 'Neutral'),
        ('-', 'Negative')
    ]
    OBJECT_CHOICES = [
        ('f', 'film'),
        ('s', 'series'),
        ('p', 'person')
    ]
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    content = models.CharField(max_length=280)
    state = models.CharField(max_length=1, choices=STATE_CHOICES)
    object_type = models.CharField(max_length=1, choices=OBJECT_CHOICES)
    object_id = models.IntegerField()

