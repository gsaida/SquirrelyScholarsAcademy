<template>
  <div class="student-enroll">
    <!-- <button v-if="showButton" type="button" v-on:click="getCourses()"> -->
    <h1>Enroll In Courses</h1>
    <!-- </button> -->
    <div id="container" v-for="course in courses" :key="course.courseId">
      <h2>{{ course.courseName }}</h2>
      <p>Description: {{ course.courseDescription }}</p>
      <p>Price: {{ course.price }}</p>
      <p>Difficulty Level: {{ course.difficultyLevel }}</p>
      <div class="button-container">
        <button
          class="enroll"
          button
          type="submit"
          v-on:click="handleClick(course.courseId)"
        >
          Enroll
        </button>
        <!-- <create-course/> -->
      </div>
    </div>
  </div>
</template>
<script>
import StudentService from "../services/StudentService";
// import CreateCourse from './CreateCourse.vue'
export default {
  name: "student-enroll",
  // components: {
  //   CreateCourse
  // },
  // props: ['courseId'],
  // components: {
  //   CreateCourse
  // },
  data() {
    return {
      courses: [],
      showButton: true,
      homework: {
        homeworkId: "",
        courseId: 0,
        userId: "",
        userName: "",
        userAnswer: "",
        gradedStatus: "",
        instructorComments: "",
      },
    };
  },
  created() {
    this.getCourses();
  },
  // computed: {
  //   isDisabled: setDisabled(){
  //   }
  // },
  methods:
    // {
    //   find(){
    //     isDisabled = !isDisabled
    // }}
    //   removeCourse(this.courses, course) {
    //     const index = array.indexOf(course.courseId===courseId);
    //     return this.courses.splice(index, 1);
    //  },
    {
      handleCourseCreated(courseId) {
        this.homework.courseId = courseId;
      },
      getCourses() {
        StudentService.getAllCourses()
          .then((response) => {
            console.log(response.data);
            this.courses = response.data;
            this.showButton = false;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      handleClick(courseId) {
        // console.log("CourseId:" + courseId);
        this.homework.courseId = courseId;
        // console.log("Homework obj " + this.homework.courseId);
       StudentService.addHomework(this.homework)
          .then((response) => {
            if (response.status === 200) {
              alert("You are enrolled!");
              this.$router.go();
              // const index = this.courses.findIndex(
              //   (course) => course.courseId === courseId
              // );
              // this.courses.splice(index, 1);
              this.courses.splice((this.courses.findIndex((c) =>
              c.courseId===courseId),1))
            }
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
};
</script>
<style>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
}
#container {
  background-color: black;
  width: 300px;
  margin-bottom: 20px;
  padding: 10px;
  margin-left: 30px;
  flex-direction: row;
}
#container h2 {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>