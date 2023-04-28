from django.contrib import admin
from django.urls import path, include
from . import views



urlpatterns = [
    # English Langauge
    path('dev_signup/', views.devRegister, name='DevSignUp'),
    path('dev_signin/', views.devSignIn, name='DevSignin'),
    path('dev_signout/', views.DevLogoutPage, name='DevSignout'),
    path('recruiter_signup/', views.recruiterRegister, name='recruiterSignUp'),
    path('recruiter_signin/', views.recruiterSignIn, name='recruiterSignin'),
    path('recruiter_signout/', views.recruiterLogoutPage, name='recruiterSignout'),
    path('devpost/', views.devpost, name='dev post'),
    path('devshow/', views.devshow, name='devshow'),
    path('devProfile/<int:pk>/', views.devProfile, name='devProfile'),
    path('download/<int:pk>/', views.download, name='download'),
    path('', views.Home, name='home'),
    path('contact.html/', views.Contact, name='Contact'),
    path('company.html/', views.Company, name='Company'),
    path('jobpost/', views.jobPost, name='Job Post'),
    path('service/', views.service, name='service'),
    path('jobshow/', views.jobshow, name='jobshow'),
    path('circular/<int:pk>/', views.jobProfile, name='circular'),
    path('newslist/', views.news, name='shownews'),
    path('singlenews/<int:pk>/', views.singlenews, name='singlenews'),


    # Korean Langauge
    path('kor/dev_signup/', views.devRegister, name='korDevSignUp'),
    path('kor/dev_signin/', views.devSignIn, name='korDevSignin'),
    path('kor/dev_signout/', views.DevLogoutPage, name='korDevSignout'),
    path('kor/recruiter_signup/', views.recruiterRegister, name='korrecruiterSignUp'),
    path('kor/recruiter_signin/', views.recruiterSignIn, name='korrecruiterSignin'),
    path('kor/recruiter_signout/', views.recruiterLogoutPage, name='korrecruiterSignout'),
    path('kor/devpost/', views.devpost, name='kordev post'),
    path('kor/devshow/', views.devshow, name='kordevshow'),
    path('kor/devProfile/<int:pk>/', views.devProfile, name='kordevProfile'),
    path('kor/download/<int:pk>/', views.download, name='kordownload'),
    path('kor/', views.Home, name='korhome'),
    path('kor/contact.html/', views.Contact, name='korContact'),
    path('kor/company.html/', views.Company, name='korCompany'),
    path('kor/jobpost/', views.jobPost, name='korJob Post'),
    path('kor/service/', views.service, name='korservice'),
    path('kor/jobshow/', views.jobshow, name='korjobshow'),
    path('kor/circular/<int:pk>/', views.jobProfile, name='korcircular'),
    path('kor/newslist/', views.news, name='korshownews'),
    path('kor/singlenews/<int:pk>/', views.singlenews, name='korsinglenews'),

]