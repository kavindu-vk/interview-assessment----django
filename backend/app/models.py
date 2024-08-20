from django.db import models

class School(models.Model):
    name = models.CharField(max_length=255)

class Class(models.Model):
    class_name = models.CharField(max_length=255)

class AssessmentArea(models.Model):
    name = models.CharField(max_length=255)

class Student(models.Model):
    fullname = models.CharField(max_length=255)

class Answer(models.Model):
    answers = models.CharField(max_length=255)

class Award(models.Model):
    name = models.CharField(max_length=255)

class Subject(models.Model):
    subject = models.CharField(max_length=255)
    subject_content = models.TextField()

class Summary(models.Model):
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    sydney_participant = models.IntegerField()
    sydney_percentile = models.FloatField()
    assessment_area = models.ForeignKey(AssessmentArea, on_delete=models.CASCADE)
    award = models.ForeignKey(Award, on_delete=models.CASCADE)
    class_name = models.ForeignKey(Class, on_delete=models.CASCADE)
    correct_answer_percentage_per_class = models.FloatField()
    correct_answer = models.CharField(max_length=255)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    participant = models.IntegerField()
    student_score = models.FloatField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    year_level_name = models.CharField(max_length=255)
    answer = models.ForeignKey(Answer, related_name='given_answer', on_delete=models.CASCADE)
