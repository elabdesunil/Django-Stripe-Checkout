from django.urls import path
from . import views

urlpatterns =[
    path('', views.HomePageView.as_view(), name="home"),
    path('config/', views.stripe_config),
    path("create-checkout-session/", views.create_checkout_session),
    path("success/", views.SuccessView.as_view()),
    path("canceled/", views.CanceledView.as_view()),
    path("webhook/", views.stripe_webhook),

]