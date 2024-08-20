import csv
import os
from django.core.management.base import BaseCommand
from ...models import *

class Command(BaseCommand):
    help = 'Import data from a CSV files to the database'

    def add_arguments(self, parser):
        parser.add_argument('Ganison_dataset', type=str, help='Path to the CSV file')
    def handle(self, *args, **kwargs):
        directory = kwargs['Ganison_dataset']

        # Iterate through all files in the given directory
        for filename in os.listdir(directory):
            if filename.endswith('.csv'):
                file_path = os.path.join(directory, filename)
                self.load_data_from_csv(file_path)

    def load_data_from_csv(self, file_path):
        with open(file_path, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                school, _ = School.objects.get_or_create(name=row['school_name'])
                student, _ = Student.objects.get_or_create(fullname=f"{row['First Name']} {row['Last Name']}")
                class_name, _ = Class.objects.get_or_create(class_name=row['Class'])
                assessment_area, _ = AssessmentArea.objects.get_or_create(name=row['Assessment Areas'])
                award, _ = Award.objects.get_or_create(name=row['award'])
                subject, _ = Subject.objects.get_or_create(
                    subject=row['Subject'],
                    subject_content=row['Subject Contents']
                )
                answer, _ = Answer.objects.get_or_create(answers=row['Answers'])

                # Directly use the instance (first element of the tuple)
                Summary.objects.create(
                    school=school,
                    sydney_participant=row['sydney_participants'],
                    sydney_percentile=row['sydney_percentile'],
                    assessment_area=assessment_area,
                    award=award,
                    class_name=class_name,
                    correct_answer_percentage_per_class=row['correct_answer_percentage_per_class'],
                    correct_answer=row['Correct Answers'],
                    student=student,
                    participant=row['participant'],
                    student_score=row['student_score'],
                    subject=subject,
                    year_level_name=row['year'],
                    answer=answer,
                )
        
        self.stdout.write(self.style.SUCCESS(f'Data loaded from {file_path}'))
