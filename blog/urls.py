from unicodedata import name
from django.urls import path
from .views import Myview, post_list, post_detail
from .views import contact
from .views import book_list,loginView,profileView,logout_view

app_name="blog"



urlpatterns = [
    path("books_list/", book_list),
    path("", post_list),
    path("contact/", contact),
    path("about/",Myview.as_view(), name = "home"),
    path("<int:year>/<int:month>/<int:day>/<slug:post>/", post_detail, name="post_detail"),
    path("login/",loginView, name= "login"),
    path("profile/", profileView, name="profile"),
    path("logout/", logout_view, name='logout')
]

