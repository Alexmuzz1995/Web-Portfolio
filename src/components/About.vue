<template>
  <div class="aboutPage" id="aboutPage">
    <div class="about-wrapper">

      <div class="title">About Me</div>

      <div class="profilePic">
          <img class="mePic" src="./../assets/me.jpg" data-aos-easing="ease-in-sine" data-aos="fade-right" data-aos-delay="250" data-aos-duration="1000" />
      </div>
        
      <div class="about" data-aos-easing="ease-in-sine" data-aos="fade-left" data-aos-delay="250" data-aos-duration="1000" >
          <div class="content">
                I’m a Web Developer located in Brisbane, Australia looking to refine my skills and be a part of unique and cutting-edge projects.<br><br>
                After a career in the Military I wanted to change direction and be part of something more creative and challenging, thus far development has exceeded that expectation. 
                I am still new to the industry but have gained extensive insight into taking a project from concept to reality. I am keen to continue improving my abilities 
                so I may create even bigger and better applications.
          </div>
      </div>

      <div class="social" >

        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="750" data-aos-duration="1250">
          <a href="https://www.linkedin.com/in/alex-murray-398993198/" target="_blank"><img src="./../assets/LinkedIn.png" class="socialPic"></a>
        </div>

        <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="750" data-aos-duration="1250">
          <a href="https://www.github.com/Alexmuzz1995/" target="_blank"><img src="./../assets/Git-Icon.png" class="socialPic"></a>
        </div>

        <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="750" data-aos-duration="1250">
          <b-button variant="link" v-b-popover.hover.top="'Alexmuzz1995@gmail.com'" title="Email">
              <img src="./../assets/gmail.webp" class="socialPic" type="img"  data-toggle="popover" data-placement="bottom">
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap');

.aboutPage {
  background: linear-gradient(110deg, #eea943 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #ffc608 66%, #ffed4b 66%);  
  height: calc(100vh);
  display: flex;
  justify-content: center;
}
.title {
  font-family: 'Bungee Inline', cursive;
  font-size: 3rem;
  color: rgb(7, 6, 6);
  padding-top: 80px;
  padding-bottom: 40px;
}
.about-wrapper {
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  font-size: 20px;
  text-align: center;
}
.profilePic {
  padding-bottom: 60px;
}
.mePic {
  max-height: 300px;
  border-radius: 50%;
}
.socialPic {
  max-height: 60px;
}
.social {
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.social > div {
  padding: 10px 50px 10px 50px;
}
.about {
  padding-bottom: 60px;
}
</style>
