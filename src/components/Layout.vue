<template>
  <div class="Layout">
    <NavBar />
    <HomePage />
    <About />
    <Experience />
  </div>
</template>

<script>
import NavBar from './Navbar'
import HomePage from './Homepage'
import About from './About'
import Experience from './Experience.vue'
export default {
  name: 'Layout',
  components: {
    NavBar,
    HomePage,
    About,
    Experience
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
