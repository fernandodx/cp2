<template>
  <div>
    <usuario-component/>
    <home-component/>
    <h1>Título padrão</h1>
    <p class="subtitulo">SubTitulo</p>
    <estilo-component/>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue';
import UsuarioComponent from './components/UsuarioComponent.vue';
import EstiloComponent from './components/EstiloComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    UsuarioComponent,
    EstiloComponent
  },
  created() {
    console.log("Create");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  errorCaptured(){
    console.log("errorCreated");
  },
  unmounted() {
    console.log("unmounted")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
