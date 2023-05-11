import axios from 'axios';
const http = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Authorization": "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGFya2RlbW8iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjgyMDkzNzk0fQ.zBr81UhLAKPd-9MZTnIwed30N4A299EfihRJwh23XrwcXoCjEqXhycwiLWJzEvWKiylF-7q1g9GVWfXc65mm6w",
  },
});
export default {

  getAllCourses() {
    return http.get('/courses');
  },
    getAllCoursesForStudent() {
        return http.get('/course');
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
    
  
