<template>
  <div id="app">
    <Navigation/>
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import DropdownMenuVue from "./components/DropdownMenu.vue";
export default {
  components:{
    name: 'App',
    Navigation,
    DropdownMenuVue,
    
  },
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
