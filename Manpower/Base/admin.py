from django.contrib import admin
from .models import ContactUsModel,CustomDeveloperUser, DeveloperData,JobData,CustomRecruitersUser,NewsModel


# Register your models here.
# Username: hellowecanwork
# Password: hellowecanwork
class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message', 'created_at')

class DevUserAdmin(admin.ModelAdmin):
    list_display = ('DevName', 'UserName', 'email', 'password')

class RecruiterUserAdmin(admin.ModelAdmin):
    list_display = ['RecruitersName', 'RecruitersUserName', 'Recruitersemail', 'Recruiterspassword']

class NewsAdmin(admin.ModelAdmin):
    list_display = ['headline', 'author', 'Date', 'newsimage','summary','body','tags']

class DeveloperAdmin(admin.ModelAdmin):
    list_display = ['image_file','first_name', 'last_name', 'email', 'phone_number', 'location', 'linkedin_link', 'github_link', 'description',
                    'institute1','degree1', 'duration1', 'result1', 'institute2', 'degree2', 'duration2' , 'result2', 'company1', 'position1', 'start1', 'end1','company2', 'position2', 'start2', 'end2',
                    'Speciality1','Speciality2', 'Speciality3', 'Speciality4', 'Languages1', 'Languages2', 'Languages3' , 'Languages4', 'Tools1', 'Tools2', 'Tools3', 'Tools4','Interpersonal1', 'Interpersonal2', 'Interpersonal3', 'Interpersonal4',
                    'project1name','project2name', 'project3name', 'project1desc', 'project2desc', 'project3desc', 'paper1name' , 'paper2name', 'paper3name', 'paper1doi', 'paper2doi', 'paper3doi','Certifications1name', 'Certifications2name', 'Certifications3name', 'Certifications1link','Certifications2link','Certifications3link',
                    'Activities1','Activities2','Activities3','Activities4','job_form_cv']
    
class CircularAdmin(admin.ModelAdmin):
    list_display = ['image_file','first_name', 'last_name', 'email', 'phone_number', 'location', 'linkedin_link', 'github_link', 'description',
                    'institute1','degree1', 'duration1', 'result1', 'institute2', 'degree2', 'duration2' , 'result2', 'company1', 'position1', 'start1', 'end1','company2', 'position2', 'start2', 'end2',
                    'Speciality1','Speciality2', 'Speciality3', 'Speciality4', 'Languages1', 'Languages2', 'Languages3' , 'Languages4', 'Tools1', 'Tools2', 'Tools3', 'Tools4','Interpersonal1', 'Interpersonal2', 'Interpersonal3', 'Interpersonal4',
                    'project1name','project2name', 'project3name', 'project1desc', 'project2desc', 'project3desc', 'paper1name' , 'paper2name', 'paper3name', 'paper1doi', 'paper2doi', 'paper3doi','Certifications1name', 'Certifications2name', 'Certifications3name', 'Certifications1link','Certifications2link','Certifications3link',
                    'Activities1','Activities2','Activities3','Activities4','job_form_cv']
    
class JobDataAdmin(admin.ModelAdmin):
    list_display = ['job_title','deadline', 'company_name', 'company_location', 'job_type', 'num_of_employees', 'company_description', 'company_email', 'company_phone',
                    'role_obj1','role_obj2', 'role_obj3', 'role_obj4', 'role_obj5', 'role_obj6', 'role_obj7' , 'role_obj8', 'role_obj9', 'role_obj10',
                    'job_skills1', 'job_skills2','job_skills3', 'job_skills4', 'job_skills5', 'job_skills6', 'job_skills7', 'job_skills8','job_skills9', 'job_skills10',
                    'min_qua','pref_qua', 'salary_range', 'benefits', 'circular']

admin.site.register(ContactUsModel, ContactUsAdmin)
admin.site.register(CustomDeveloperUser, DevUserAdmin)
admin.site.register(DeveloperData, DeveloperAdmin)
admin.site.register(JobData, JobDataAdmin)
admin.site.register(CustomRecruitersUser, RecruiterUserAdmin)
admin.site.register(NewsModel, NewsAdmin)