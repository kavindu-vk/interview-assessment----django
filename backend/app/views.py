from django.shortcuts import render
from rest_framework import viewsets
from . models import *
from .serializers import *

class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class ClassViewSet(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

class AssessmentAreaViewSet(viewsets.ModelViewSet):
    queryset = AssessmentArea.objects.all()
    serializer_class = AssessmentAreaSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

class AwardViewSet(viewsets.ModelViewSet):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class SummaryViewSet(viewsets.ModelViewSet):
    queryset = Summary.objects.all()
    serializer_class = SummarySerializer