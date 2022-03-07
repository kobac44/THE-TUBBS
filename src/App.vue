<template>
  <div id="app">
    <Navigation/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/teaching">Teaching</router-link> |
      <router-link to="/discography">Discography</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/epk">EPK</router-link> |
      <router-link to="/store">Store</router-link> |
      <router-link to="/contact">Contact</router-link> 
    </div> -->
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation"
export default {
  components:{
    Navigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');


#app {
  font-family: 'Poiret One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgb(184, 187, 187);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;

}
</style>
