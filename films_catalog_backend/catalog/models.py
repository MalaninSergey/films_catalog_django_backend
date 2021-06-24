from django.db import models


# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=50)


class Person(models.Model):
    name = models.CharField(max_length=255, default="Имя человека")
    dob = models.DateField(default='1970-01-01')
    birthplace = models.TextField(default='Место рождения')
    biography = models.TextField(default='Бмография человека')
    image = models.ImageField(upload_to='persons')

    def __str__(self):
        return self.name


class Film(models.Model):
    name = models.CharField(max_length=50, default="Film name")
    description = models.TextField(default="Film description")
    year = models.IntegerField(default='1970')
    rating = models.FloatField(default=0.00)
    image = models.ImageField(upload_to='films')
    tags = models.ManyToManyField(Tag)
    director = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='director')
    actors = models.ManyToManyField(Person, related_name='actors')
    screenwriter = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='screenwriter')
    budget = models.CharField(max_length=50, default='0.00$')
    age_restrictions = models.CharField(max_length=3, default='0+')

    def __str__(self):
        return self.name


class Series(models.Model):
    name = models.CharField(max_length=50, default="Series name")
    description = models.TextField(default="Series description")
    year = models.IntegerField(default='1970')
    rating = models.FloatField(default=0.00)
    image = models.ImageField(upload_to='series')
    tags = models.ManyToManyField(Tag)
    director = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='seriesdirector')
    actors = models.ManyToManyField(Person, related_name='seriesactors')
    screenwriter = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='seriesscreenwriter')
    age_restrictions = models.CharField(max_length=3, default='0+')

    def __str__(self):
        return self.name
