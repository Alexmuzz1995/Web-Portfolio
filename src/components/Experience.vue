<template>
  <div class="experiencePage" id="experiencePage">

    <div class="title">Experience</div>

    <div class="xp-container">
      <div class="work">
        <div title="" tag="article">
          <img class="bluedog-logo" src="./../assets/BD_Logo.png" alt="BlueDogTraining">
          <div class="jobDesc">
            Full time role in Software development and IT support.
            
            <br><br> 
            I assist with implementing new features to our website and software to help improve the effectiveness of the training team as well as helping to maintain the current systems. 
            I also assist with IT support with employees and customers when required.

            <br><br>
            This is the tech stack that is in use
            <br><br> 
            HTML | PHP | CSS | ELM | MySQL | Laravel | JavaScript | Node | Git
          </div>
        </div>
      </div>

      <div class="skills">
        <div data-aos-easing="ease-in-sine" data-aos="zoom-in-up" data-aos-delay="250" data-aos-duration="1000">
            <strong class="pt-4">PHP</strong>
            <b-progress :value="skills.php" variant="danger" class="mb-4"></b-progress>
        </div>

        <div data-aos-easing="ease-in-sine" data-aos="zoom-in-up" data-aos-delay="250" data-aos-duration="1250">
            <strong>CSS</strong>
            <b-progress :value="skills.css" variant="primary" class="mb-4"></b-progress>
        </div>

        <div data-aos-easing="ease-in-sine" data-aos="zoom-in-up" data-aos-delay="250" data-aos-duration="1500">
            <strong>MySQL</strong>
            <b-progress :value="skills.sql" variant="warning" class="mb-4"></b-progress>
        </div>

        <div data-aos-easing="ease-in-sine" data-aos="zoom-in-up" data-aos-delay="250" data-aos-duration="1750">
            <strong>JavaScript</strong>
            <b-progress :value="skills.javascript" variant="dark" class="mb-4"></b-progress>
        </div>

        <div data-aos-easing="ease-in-sine" data-aos="zoom-in-up" data-aos-delay="250" data-aos-duration="2000">
          <strong>Git</strong>
            <b-progress :value="skills.git" variant="success" class="mb-4"></b-progress>
        </div>          
      </div>
    </div>
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue'
export default {
  name: 'Experience',
  data: function() {
    return {
      skills: {
          "html": 80
        , "css": 40       
        , "php": 70
        , "sql": 65
        , "javascript": 50
        , "git": 70
      }
    }
  },
  components: {
    BProgress
  },
  props: {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap');
.experiencePage {
  background: -webkit-linear-gradient(110deg, #f1ecf3 40%, rgba(0, 0, 0, 0) 30%), -webkit-radial-gradient(farthest-corner at 0% 0%, #d9d6db 70%, #d7d1da 70%);
  background: -o-linear-gradient(110deg, #d1cbd4 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #837e86 70%, #cdc6d1 70%);
  background: -moz-linear-gradient(110deg, #d4cfd6 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #bab4be 70%, #ddd1e2 70%);
  background: linear-gradient(110deg, #336fbd 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #5a8cd6 70%, #7698f5 70%);  
  height: calc(100vh - 60px);
}
.xp-container {
  height: calc(100% - 120px);
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bluedog-logo {
  width: 50%;
  padding-bottom: 3rem;
}

.skills {
  height: 60%;
  width: 45%;
  font-size: 21px;
  display: flex;
  flex-direction: column;
}
.work {
  display: flex;
  height: 80%;
  width: 45%;
  color: white;
}

.title {
  font-family: 'Bungee Inline', cursive;
  font-size: 3rem;
  color: rgb(255, 255, 255);
  padding-top: 30px;
}
.work .jobDesc {
  font-size: 18px;
}
</style>
