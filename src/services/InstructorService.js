import axios from 'axios';
const http = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Authorization": "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cm95cmljaGJlcnRAZGVtby5jb20iLCJhdXRoIjoiUk9MRV9JTlNUUlVDVE9SIiwiZXhwIjoxNjgyMDkxNTg4fQ.3w4cIUvBwBNFrxKUlEI_rK-PLf_GgG4wh-cM9cYo02RLSEnD-mY9xfGEji4isxWHAcINPfosWX43eDEVM1jzlQ",
  },
});
export default {
    getAllCourses() {
        return http.get('/courses');
      },
    
      createCourse(course) {
        return http.post(`/courses`,course);
      },
      
      getInstructorGradebook(){
        return http.get('instructor/courses/gradebook');
      },
      getStudentGradebook(){
        return http.get('student/gradebook');
      },
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
      },
      getReportCardByUserId(id){
        return http.get(`/user/${id}/reports`);
      },
    
      getReportCardsbyCourseId(id){
        return http.get(`/course/${id}/reports`)
      }
    }
    