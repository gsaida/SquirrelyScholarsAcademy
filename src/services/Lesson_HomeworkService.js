import axios from 'axios';
const http = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Authorization": "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWlkYTEiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjgxOTM4NDY4fQ.xgKJLuFMqPjKGo2xgHKUQojhjU45_8_kZIAArh0cV11Tlj_4Z9450Dg6Ag5T9DzSRbUtNpJMgqp5XE33KquPLQ",
  },
});
export default {
  getLessons(lesson) {
    return http.get(`/lesson/`, lesson)
  },

  addLesson(lesson) {
    return http.post('/courses/lesson', lesson);
  },
  addHomework(homework) {
    return http.post('/gradebook/create', homework);
  },

  updateGrade(homework) {
    return http.post('/gradebook/update', homework)
  }
}