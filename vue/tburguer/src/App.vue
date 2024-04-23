<template>
  <div>
    <navbar-component/>
    <banner-component/>
    <router-view/>
    <footer-component/>
  </div>
</template>

<script>
import BannerComponent from './components/BannerComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
  
export default {
    name : "App",
    components: {
        BannerComponent,
        FooterComponent,
        NavbarComponent
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
