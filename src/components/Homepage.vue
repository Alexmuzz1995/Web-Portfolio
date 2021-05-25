<template>
  <div class="homepage" id="homepage">
    <img class="folioBg" src="./../assets/backgroundHome.jpg"/>

    <div class="content">
      <div data-aos="fade-left" data-aos-easing="ease" data-aos-delay="1000" data-aos-duration="1500">
        <h1>Hi, My name is Alex Murray.</h1>
        </div>
        <div data-aos="fade-right" data-aos-easing="ease" data-aos-delay="1000" data-aos-duration="1500">
          <h2>I'm a Web Developer located in Brisbane, Australia.</h2>
      </div>
    </div>

    <div class="scroll" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1500" data-aos-duration="1500">
      Scroll down <br>
      <a href="#aboutPage" v-smooth-scroll="{ duration: 1000}">
        <b-icon 
          class="chevron"
          font-scale="6"
          icon="chevron-down"
          animation="throb"
          scale="0.50">
        </b-icon>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Homepage',
  components: {
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');

.scrollButton {
  margin-block-end: auto;
  z-index: 1;
}

.homepage {
  background-color: rgb(78, 81, 83);
  height: 100vh;
  width: 100vw;
  display: flex;
}
.content {
  width: 100vw;
  padding-top: 300px;
}
.folioBg {
  object-fit: cover;
  position: absolute;
  width: 100vw;
  height: calc(100vh);
  left: 0;
}
h1 {
    left: 0;
    width: 100%;
    color: rgb(250, 244, 212);
    font-size: 3rem;
    font-family: 'Bungee Inline', cursive;
    padding-bottom: 2rem;
}
h2 {
    width: 100%;
    color: rgb(250, 244, 212);
    font-size: 2rem;
    font-family: 'Bungee Inline', cursive;
}
.scroll {
    position: absolute;
    bottom: 5px;
    width: 200px;
    margin: auto;
    display: block;
    cursor: pointer;
    left: 0;
    right: 0;
    text-transform: uppercase;
    color: rgb(250, 244, 212);
}
a:link, a:visited {
  color: rgb(250, 244, 212);
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
a:hover {
  color: rgb(255, 200, 47);
}
</style>
