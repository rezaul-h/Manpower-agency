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
    path('download_circular/<int:pk>/', views.downloadcopy, name='downloadcopy'),
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
    path('kor/dev_signup/', views.kordevRegister, name='korDevSignUp'),
    path('kor/dev_signin/', views.kordevSignIn, name='korDevSignin'),
    path('kor/dev_signout/', views.korDevLogoutPage, name='korDevSignout'),
    path('kor/recruiter_signup/', views.korrecruiterRegister, name='korrecruiterSignUp'),
    path('kor/recruiter_signin/', views.korrecruiterSignIn, name='korrecruiterSignin'),
    path('kor/recruiter_signout/', views.korrecruiterLogoutPage, name='korrecruiterSignout'),
    path('kor/devpost/', views.kordevpost, name='kordev post'),
    path('kor/devshow/', views.kordevshow, name='kordevshow'),
    path('kor/devProfile/<int:pk>/', views.kordevProfile, name='kordevProfile'),
    path('kor/download/<int:pk>/', views.kordownload, name='kordownload'),
    path('kor/download_circular/<int:pk>/', views.kordownloadcopy, name='kordownloadcopy'),
    path('kor/', views.korHome, name='korhome'),
    path('kor/contact.html/', views.korContact, name='korContact'),
    path('kor/company.html/', views.korCompany, name='korCompany'),
    path('kor/jobpost/', views.korjobPost, name='korJob Post'),
    path('kor/service/', views.korservice, name='korservice'),
    path('kor/jobshow/', views.korjobshow, name='korjobshow'),
    path('kor/circular/<int:pk>/', views.korjobProfile, name='korcircular'),
    path('kor/newslist/', views.kornews, name='korshownews'),
    path('kor/singlenews/<int:pk>/', views.korsinglenews, name='korsinglenews'),

]