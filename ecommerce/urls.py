from django.urls import path
from .views import Myview, products

urlpatterns =[
    path("", products),
    path("about/",Myview.as_view())
]

