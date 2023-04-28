from django.db import models
from django.contrib.auth.hashers import make_password,check_password 
from django.contrib.auth.models import User



# Contact us Model
class ContactUsModel(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

# Registration for Developers
class CustomDeveloperUser(models.Model):
    DevName = models.CharField(max_length=100)
    UserName = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def set_password(self, password):
        self.password = make_password(password)

    def check_password(self, password):
        return check_password(password, self.password)

# Registration for Recruiters
class CustomRecruitersUser(models.Model):
    RecruitersName = models.CharField(max_length=100)
    RecruitersUserName = models.CharField(max_length=100)
    Recruitersemail = models.EmailField(unique=True)
    Recruiterspassword = models.CharField(max_length=255)

    def set_password(self, Recruiterspassword):
        self.Recruiterspassword = make_password(Recruiterspassword)

    def check_password(self, Recruiterspassword):
        return check_password(Recruiterspassword, self.Recruiterspassword)

class DeveloperData(models.Model):
    # DevUser = models.ForeignKey(User, on_delete=models.CASCADE)
    image_file = models.ImageField(upload_to='images/', blank=True, null=True, default=None)
    first_name = models.CharField(max_length=100, blank=True, null=True, default=None)
    last_name = models.CharField(max_length=100, blank=True, null=True, default=None)
    email = models.EmailField(max_length=100, blank=True, null=True, default=None)
    phone_number = models.CharField(max_length=20, blank=True, null=True, default=None)
    location = models.CharField(max_length=100, blank=True, null=True, default=None)
    linkedin_link = models.URLField(max_length=200, blank=True)
    github_link = models.URLField(max_length=200, blank=True)
    description = models.TextField(blank=True, null=True, default=None)
    # BSC
    institute1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    degree1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    duration1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    result1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    # MSC
    institute2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    degree2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    duration2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    result2 = models.CharField(max_length=100, blank=True, null=True, default=None)

    # Work Experience
    company1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    position1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    start1 = models.DateTimeField( blank=True, null=True,default=None )
    end1 = models.DateTimeField(blank=True, null=True,default=None)
    company2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    position2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    start2 = models.DateTimeField(blank=True, null=True,default=None)
    end2 = models.DateTimeField(blank=True, null=True,default=None)

    # skills
    Speciality1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Speciality2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Speciality3 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Speciality4 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Languages1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Languages2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Languages3 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Languages4 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Tools1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Tools2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Tools3 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Tools4 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Interpersonal1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Interpersonal2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Interpersonal3 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Interpersonal4 = models.CharField(max_length=100, blank=True, null=True, default=None)

    # projects
    project1name = models.CharField(max_length=100, blank=True, null=True, default=None)
    project2name = models.CharField(max_length=100, blank=True, null=True, default=None)
    project3name = models.CharField(max_length=100, blank=True, null=True, default=None)
    project1desc = models.CharField(max_length=100, blank=True, null=True, default=None)
    project2desc = models.CharField(max_length=100, blank=True, null=True, default=None)
    project3desc = models.CharField(max_length=100, blank=True, null=True, default=None)
    
    # Research works
    paper1name = models.CharField(max_length=100, blank=True, null=True, default=None)
    paper2name = models.CharField(max_length=100, blank=True, null=True, default=None)
    paper3name = models.CharField(max_length=100, blank=True, null=True, default=None)
    paper1doi = models.CharField(max_length=100, blank=True, null=True, default=None)
    paper2doi = models.CharField(max_length=100, blank=True, null=True, default=None)
    paper3doi = models.CharField(max_length=100, blank=True, null=True, default=None)
    
    # Certifications
    Certifications1name = models.CharField(max_length=100, blank=True, null=True, default=None)
    Certifications2name = models.CharField(max_length=100, blank=True, null=True, default=None)
    Certifications3name = models.CharField(max_length=100, blank=True, null=True, default=None)
    Certifications1link = models.CharField(max_length=100, blank=True, null=True, default=None)
    Certifications2link = models.CharField(max_length=100, blank=True, null=True, default=None)
    Certifications3link = models.CharField(max_length=100, blank=True, null=True, default=None)
    
    # Extracurricular
    Activities1 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Activities2 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Activities3 = models.CharField(max_length=100, blank=True, null=True, default=None)
    Activities4 = models.CharField(max_length=100, blank=True, null=True, default=None)

    # CV
    job_form_cv = models.FileField(upload_to='CV/',blank=True, null=True, default=None)

class JobData(models.Model):
    job_title = models.CharField(max_length=200)
    deadline = models.DateField()
    company_name = models.CharField(max_length=200)
    company_location = models.CharField(max_length=200)
    job_type = models.CharField(max_length=200, null=True, blank=True)
    num_of_employees = models.IntegerField(null=True, blank=True)
    company_description = models.TextField(max_length=2000, null=True, blank=True)
    company_email = models.EmailField()
    company_phone = models.CharField(max_length=20)

    role_obj1 = models.CharField(max_length=200, null=True, blank=True)
    role_obj2 = models.CharField(max_length=200, null=True, blank=True)
    role_obj3 = models.CharField(max_length=200, null=True, blank=True)
    role_obj4 = models.CharField(max_length=200, null=True, blank=True)
    role_obj5 = models.CharField(max_length=200, null=True, blank=True)
    role_obj6 = models.CharField(max_length=200, null=True, blank=True)
    role_obj7 = models.CharField(max_length=200, null=True, blank=True)
    role_obj8 = models.CharField(max_length=200, null=True, blank=True)
    role_obj9 = models.CharField(max_length=200, null=True, blank=True)
    role_obj10 = models.CharField(max_length=200, null=True, blank=True)

    job_skills1 = models.CharField(max_length=200, null=True, blank=True)
    job_skills2 = models.CharField(max_length=200, null=True, blank=True)
    job_skills3 = models.CharField(max_length=200, null=True, blank=True)
    job_skills4 = models.CharField(max_length=200, null=True, blank=True)
    job_skills5 = models.CharField(max_length=200, null=True, blank=True)
    job_skills6 = models.CharField(max_length=200, null=True, blank=True)
    job_skills7 = models.CharField(max_length=200, null=True, blank=True)
    job_skills8 = models.CharField(max_length=200, null=True, blank=True)
    job_skills9 = models.CharField(max_length=200, null=True, blank=True)
    job_skills10 = models.CharField(max_length=200, null=True, blank=True)

    min_qua = models.TextField(max_length=200, null=True, blank=True)
    pref_qua = models.TextField(max_length=200, null=True, blank=True)
    salary_range= models.TextField(max_length=200, null=True, blank=True)
    benefits= models.TextField(max_length=200, null=True, blank=True)
    circular = models.FileField(upload_to='Circular/',blank=True, null=True, default=None)


class NewsModel(models.Model):
    headline = models.CharField(max_length=200, null=True, blank=True)
    author = models.CharField(max_length=200, null=True, blank=True)
    Date = models.DateTimeField(auto_now_add=True)
    newsimage= models.ImageField(upload_to='images/', blank=True, null=True, default=None)
    summary = models.TextField(max_length=2000, null=True, blank=True)
    body = models.TextField(max_length=3000, null=True, blank=True)
    tags = models.CharField(max_length=200, null=True, blank=True)

