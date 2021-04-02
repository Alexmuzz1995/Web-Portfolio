<template>
  <div class="experiencePage">

    <div class="title">Experience</div>

  </div>
</template>

<script>
export default {
  name: 'Experience',
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
  background: -webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  background: -o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  background: -moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);  
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
</style>
