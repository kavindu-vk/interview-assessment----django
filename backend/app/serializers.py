from rest_framework import serializers
from .models import *

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'

class AssessmentAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssessmentArea
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'

class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class SummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Summary
        fields = '__all__'