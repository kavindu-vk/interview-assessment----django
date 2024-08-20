import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const fetchSchools = () => axios.get(`${API_URL}schools/`);
export const fetchClasses = () => axios.get(`${API_URL}classes/`);
export const fetchAssessmentAreas = () => axios.get(`${API_URL}assessment-areas/`);
export const fetchStudents = () => axios.get(`${API_URL}students/`);
export const fetchAnswers = () => axios.get(`${API_URL}answers/`);
export const fetchAwards = () => axios.get(`${API_URL}awards/`);
export const fetchSubjects = () => axios.get(`${API_URL}subjects/`);
export const fetchSummaries = () => axios.get(`${API_URL}summaries/`);