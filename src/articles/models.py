from django.db import models


class Article(models.Model):
    email = models.TextField(default='')
    title = models.CharField(max_length=120)
    poc = models.TextField(default='')
    businessModel = models.TextField(default='')
    industries = models.TextField(default='')
    marketOpportunity = models.TextField(default='')
    competitors = models.TextField(default='')
    painPoint = models.TextField(default='')
    mainTech = models.TextField(default='')
    demoLink = models.TextField(default='')

    content = models.TextField()

    def __str__(self):
        return self.title
