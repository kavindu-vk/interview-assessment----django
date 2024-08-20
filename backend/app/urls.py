from django.urls import path, include
from . views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'schools', SchoolViewSet)
router.register(r'classes', ClassViewSet)
router.register(r'assessment-areas', AssessmentAreaViewSet)
router.register(r'students', StudentViewSet)
router.register(r'answers', AnswerViewSet)
router.register(r'awards', AwardViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'summaries', SummaryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]