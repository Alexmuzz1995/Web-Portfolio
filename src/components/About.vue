<template>
  <div class="aboutPage" id="aboutPage">

    <div class="title">About Me</div>

    <div class="profilePic">
        <img class="mePic" src="./../assets/me.jpg" data-aos="fade-in-right" data-aos-easing="ease" data-aos-delay="500" data-aos-duration="1500"/>
    </div>
      
      <!-- <div class="About">
          <b-card border-variant="light" class="text-center h-100">
            <b-card-text class="content">
                I’m Web Developer located in Brisbane, Australia looking for success and to refine my development abilities. I completed a Diploma of Software Development at Tafe Queensland mid-2020.<br>
            <br>At Tafe I studied Java, C# and SQL but after my time at Tafe I found a passion and started pursuing Web development by teaching myself JavaScript, CSS and HTML as well as using various frameworks like Vue.js. I thoroughly enjoy the creation process of a website or application and hope to be part of a team that’ll give me the skills and freedom to create unique projects.<br>
            <br>
              I look forward to hearing from you and hopefully becoming a party of your team.</b-card-text>
          </b-card>
      </div> -->

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
  height: calc(100vh - 60px);
  display: flex;
}
.title {
  font-family: 'Bungee Inline', cursive;
  font-size: 3rem;
  color: rgb(255, 255, 255);
  padding-top: 2rem;
  position: absolute;
  margin: auto;
  display: block;
  left: 0;
  right: 0;
}
.About {
  /* max-width: 500px; */
  float: right;
  padding-right: 8rem;
  padding-top: 12rem;
}
.content {
  font-size: 10px;
  text-align: center;
}
.profilePic {
    float: left;
    padding-left: 8rem;
    padding-top: 12rem;
}
.mePic {
  max-height: 300px;
  border-radius: 50%;
}
</style>
