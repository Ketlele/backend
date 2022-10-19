from django.views import View
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def products(request):
    return HttpResponse("Welcome To Deluxe Amps")

# Class-based view
class Myview(View):
    def get(self, request):
        return HttpResponse("This class based view") 