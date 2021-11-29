from django.db import models
from films_catalog_backend.users.models import Profile


class Critique(models.Model):
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
    content = models.TextField(default=None)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    state = models.CharField(max_length=1, choices=STATE_CHOICES)
    object_type = models.CharField(max_length=1, choices=OBJECT_CHOICES)
    object_id = models.IntegerField()
