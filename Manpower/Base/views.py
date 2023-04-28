from django.shortcuts import render,redirect,get_object_or_404
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages
from .models import ContactUsModel,CustomDeveloperUser,DeveloperData,JobData,CustomRecruitersUser,NewsModel
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect,HttpResponseNotFound
from datetime import datetime
from django.http import FileResponse
import os

# Create your views here.
def Home(request):
    Jobdatas = JobData.objects.all()
    Developers = DeveloperData.objects.all()
    newslists = NewsModel.objects.all()
    return render(request, "index.html", {'Jobdatas':Jobdatas, 'Developers':Developers, 'newslists':newslists})

def news(request):
    newslists = NewsModel.objects.all()
    return render(request, "news.html", {'newslists':newslists})

def singlenews(request,pk):
    Newslists = get_object_or_404(NewsModel, pk=pk)
    return render(request, "singlenews.html", {'Newslists':Newslists})


def devRegister(request):
    if request.method == 'POST':
        dev_name = request.POST.get('developer_name')
        dev_username =  request.POST.get('developer_username')
        email = request.POST.get('developer_email')
        password = request.POST.get('developer_password')
        dev_user = CustomDeveloperUser(DevName= dev_name, UserName= dev_username, email=email, password=password)
        dev_user.save()
        # Create a new user
        my_user = User.objects.create_user(username=dev_username,email=email, password=password)
        my_user.save()

        return redirect('DevSignin')
    else:
        return render(request, 'dev_signup.html')


def devSignIn(request):
    if request.method == 'POST':
        username = request.POST.get('signin_username')
        password = request.POST.get('signin_password')
        user=authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            print("got here")
            return redirect('home')
        else:
            return HttpResponse ("Username or Password is incorrect!!!")
    else:
        return render (request,'dev_signin.html')
    
def DevLogoutPage(request):
    logout(request)
    return redirect('DevSignin')
       
def Contact(request):
    if request.method == 'POST':
        name = request.POST.get('contact_form_name')
        email = request.POST.get('contact_form_email')
        message = request.POST.get('contact_form_body')
        contact = ContactUsModel(name=name, email=email, message=message)
        contact.save()
        return HttpResponse('Thank you for contacting us!')
    else:
        return render(request, 'contact.html')

def Company(request):
    return render(request, "company.html")

def jobPost(request):
    if request.method == 'POST':
        dead = request.POST.get('deadline')
        type(dead)
        jobdata = JobData(
          job_title = request.POST.get('job_title'),
          deadline = datetime.strptime(dead, '%Y-%m-%d'),
          company_name = request.POST.get('company_name'),
          company_location = request.POST.get('company_location'),
          job_type = request.POST.get('job_type'),
          num_of_employees = request.POST.get('num_of_employees'),
          company_description = request.POST.get('company_description'),
          company_email = request.POST.get('company_email'),
          company_phone = request.POST.get('company_phone'),

          role_obj1 = request.POST.get('role_obj1'),
          role_obj2 = request.POST.get('role_obj2'),
          role_obj3 = request.POST.get('role_obj3'),
          role_obj4 = request.POST.get('role_obj4'),
          role_obj5 = request.POST.get('role_obj5'),
          role_obj6 = request.POST.get('role_obj6'),
          role_obj7 = request.POST.get('role_obj7'),
          role_obj8 = request.POST.get('role_obj8'),
          role_obj9 = request.POST.get('role_obj9'),
          role_obj10 = request.POST.get('role_obj10'),
          
          job_skills1 = request.POST.get('job_skills1'),
          job_skills2 = request.POST.get('job_skills2'),
          job_skills3 = request.POST.get('job_skills3'),
          job_skills4 = request.POST.get('job_skills4'),
          job_skills5 = request.POST.get('job_skills5'),
          job_skills6 = request.POST.get('job_skills6'),
          job_skills7 = request.POST.get('job_skills7'),
          job_skills8 = request.POST.get('job_skills8'),
          job_skills9 = request.POST.get('job_skills9'),
          job_skills10 = request.POST.get('job_skills10'),

          min_qua = request.POST.get('min_qua'),
          pref_qua = request.POST.get('pref_qua'),
          salary_range = request.POST.get('salary_range'),
          benefits = request.POST.get('benefits'),
          circular = request.FILES.get('circular')
        )

        jobdata.save()
        return redirect('home')
    else:
        return render(request, "jobpost.html")
    

def jobProfile(request, pk):
    recruiterProfiles = get_object_or_404(JobData, pk=pk)
    return render(request, "recruiterProfile.html", {'recruiterProfiles':recruiterProfiles})

def service(request):
    return render(request, "services.html")

def signup(request):
    return render(request, "signup.html")

def signin(request):
    return render(request, "signin.html")
                
def devpost(request):
    if request.method == 'POST':
        # DevUser=request.user,
        image_file = request.FILES.get('image_file')
        first_name=request.POST.get('job_form_first_name')
        last_name=request.POST.get('job_form_last_name')
        email=request.POST.get('job_form_email')
        phone_number=request.POST.get('job_form_phone')
        location=request.POST.get('job_form_location')
        linkedin_link=request.POST.get('job_form_linkedin_profile')
        github_link=request.POST.get('job_form_github_profile')
        description=request.POST.get('job_form_description')
        # Education
        institute1 = request.POST.get('job_form_institute1') 
        degree1 = request.POST.get('job_form_degree1')
        duration1 = request.POST.get('job_form_duration1')
        result1 = request.POST.get('job_form_result1')
        institute2 = request.POST.get('job_form_institute2') 
        degree2 = request.POST.get('job_form_degree2')
        duration2 = request.POST.get('job_form_duration2')
        result2 = request.POST.get('job_form_result2')
        # Work experience
        company1 = request.POST.get('job_form_company1') 
        position1 = request.POST.get('job_form_position1')
        start1 = request.POST.get('job_form_start1')
        start1 = datetime.strptime(start1, "%Y-%m-%d")
        end1 = request.POST.get('job_form_end1')
        end1 = datetime.strptime(end1, '%Y-%m-%d')
        company2 = request.POST.get('job_form_company2') 
        position2 = request.POST.get('job_form_position2')
        start2 = request.POST.get('job_form_start2')
        start2 = datetime.strptime(start2, '%Y-%m-%d')
        end2 = request.POST.get('job_form_end1')
        end2 = datetime.strptime(end2, '%Y-%m-%d')
        # skills
        Speciality1 = request.POST.get('Speciality1') 
        Speciality2 = request.POST.get('Speciality2')
        Speciality3 = request.POST.get('Speciality3')
        Speciality4 = request.POST.get('Speciality4')
        Languages1 = request.POST.get('Languages1') 
        Languages2 = request.POST.get('Languages2')
        Languages3 = request.POST.get('Languages3')
        Languages4 = request.POST.get('Languages4')
        Tools1 = request.POST.get('Tools1') 
        Tools2 = request.POST.get('Tools2')
        Tools3 = request.POST.get('Tools3')
        Tools4 = request.POST.get('Tools4')
        Interpersonal1 = request.POST.get('Interpersonal1') 
        Interpersonal2 = request.POST.get('Interpersonal2')
        Interpersonal3 = request.POST.get('Interpersonal3')
        Interpersonal4 = request.POST.get('Interpersonal4')
        # projects
        project1name = request.POST.get('project1name')
        project1desc = request.POST.get('project1desc')
        project2name = request.POST.get('project2name') 
        project2desc = request.POST.get('project2desc')
        project3name = request.POST.get('project3name')
        project3desc = request.POST.get('project3desc')
        # Research works
        paper1name = request.POST.get('paper1name')
        paper1doi = request.POST.get('paper1doi')
        paper2name = request.POST.get('paper2name') 
        paper2doi = request.POST.get('paper2doi')
        paper3name = request.POST.get('paper3name')
        paper3doi = request.POST.get('paper3doi')
        # Certifications
        Certifications1name = request.POST.get('Certifications1name')
        Certifications1link = request.POST.get('Certifications1link')
        Certifications2name = request.POST.get('Certifications2name') 
        Certifications2link = request.POST.get('Certifications2link')
        Certifications3name = request.POST.get('Certifications3name')
        Certifications3link = request.POST.get('Certifications3link')
        # Extracurricular
        Activities1 = request.POST.get('Activities1')
        Activities2 = request.POST.get('Activities2')
        Activities3 = request.POST.get('Activities3') 
        Activities4 = request.POST.get('Activities4')
        # CV
        job_form_cv=request.FILES.get('job_form_cv')

        # print(Activities4)
        dev_data = DeveloperData(image_file=image_file, first_name=first_name, last_name=last_name, email=email, phone_number=phone_number, location=location,
                                 linkedin_link=linkedin_link, github_link=github_link, description=description, institute1=institute1, 
                                 degree1=degree1, duration1=duration1, result1=result1, institute2=institute2, degree2=degree2,duration2=duration2,
                                 result2=result2,company1=company1, position1=position1, start1=start1, end1=end1,
                                 company2=company2, position2=position2, start2=start2, end2=end2,
                                 Speciality1=Speciality1, Speciality2=Speciality2, Speciality3=Speciality3,Speciality4=Speciality4,
                                 Languages1=Languages1, Languages2=Languages2, Languages3=Languages3,Languages4=Languages4,
                                 Tools1=Tools1,Tools2=Tools2,Tools3=Tools3,Tools4=Tools4,
                                 Interpersonal1=Interpersonal1,Interpersonal2=Interpersonal2,Interpersonal3=Interpersonal3,Interpersonal4=Interpersonal4,
                                 project1name=project1name,project2name=project2name,project3name=project3name, project1desc=project1desc,project2desc=project2desc,project3desc=project3desc,
                                 paper1name=paper1name,paper2name=paper2name,paper3name=paper3name,paper1doi=paper1doi,paper2doi=paper2doi,paper3doi=paper3doi,
                                 Certifications1name=Certifications1name,Certifications2name=Certifications2name,Certifications3name=Certifications3name, Certifications1link=Certifications1link,Certifications2link=Certifications2link,Certifications3link=Certifications3link,
                                 Activities1=Activities1,Activities2=Activities2,Activities3=Activities3,Activities4=Activities4,job_form_cv=job_form_cv                                
                                 )
        # dev_data.DevUser
        # dev_data.DevUser = request.user

        dev_data.save()
        return redirect('home')
    else:
        # print("came here")
        return render(request, "devpost.html")

def jobshow(request):
    if request.method == 'POST':
        search_string = request.POST.get('searchquery')
        results = JobData.objects.filter(job_title__icontains=search_string)
        return render(request,"jobsearchresult.html", {'results':results} )

    else:
        Jobdata = JobData.objects.all()
        return render(request, "jobshow.html", {'Jobdatas':Jobdata})

def devshow(request):
    if request.method == 'POST':
        search_string = request.POST.get('searchquery')
        results = DeveloperData.objects.filter(first_name__icontains=search_string)
        return render(request,"devsearchresult.html", {'results':results} )
    else:
        Developers = DeveloperData.objects.all()
        return render(request, "devshow.html", {'Developers':Developers})

def devProfile(request, pk):
    DeveloperProfiles = get_object_or_404(DeveloperData, pk=pk)
    return render(request, "devProfile.html", {'DeveloperProfiles':DeveloperProfiles})

def download(request, pk):
    document = get_object_or_404(DeveloperData, pk=pk)
    response = HttpResponse(document.job_form_cv, content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="{document.job_form_cv.name}"'
    return response

def downloadcopy(request, pk):
    document = get_object_or_404(JobData, pk=pk)
    response = HttpResponse(document.job_form_cv, content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="{document.circular.name}"'
    return response

def recruiterRegister(request):
    if request.method == 'POST':
        dev_name = request.POST.get('developer_name')
        dev_username =  request.POST.get('developer_username')
        email = request.POST.get('developer_email')
        password = request.POST.get('developer_password')
        dev_user = CustomRecruitersUser(RecruitersName= dev_name, RecruitersUserName= dev_username, Recruitersemail=email, Recruiterspassword=password)
        dev_user.save()
        # Create a new user
        recruiter_user = User.objects.create_user(username=dev_username,email=email, password=password)
        recruiter_user.save()

        return redirect('recruiterSignin')
    else:
        return render(request, 'recruiter_signup.html')


def recruiterSignIn(request):
    if request.method == 'POST':
        username = request.POST.get('signin_username')
        password = request.POST.get('signin_password')
        recruiter_user=authenticate(request,username=username,password=password)
        if recruiter_user is not None:
            login(request,recruiter_user)
            return redirect('home')
        else:
            return HttpResponse ("Username or Password is incorrect!!!")
    else:
        return render (request,'recruiter_signin.html')
    
def recruiterLogoutPage(request):
    logout(request)
    return redirect('recruiterSignin')




