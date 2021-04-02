<template>
    <div>
    <b-navbar class="nav" type="dark" variant="dark">
      <b-navbar-nav>

        <b-nav-item><a href="#homepage" v-smooth-scroll="{ duration: 1000}">Home</a></b-nav-item>

        <b-nav-item><a href="#aboutPage" v-smooth-scroll="{ duration: 1000}">About Me</a></b-nav-item>

        <b-nav-item><a href="#experiencePage" v-smooth-scroll="{ duration: 1000}">Experience</a></b-nav-item>

      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  height: 60px;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
}
li {
  margin: 0 20px;
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
