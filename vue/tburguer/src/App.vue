<template>
  <div>
    <NavBarComponent :descImg="descricao" :urlLogo="urlFoto"/>
    <banner-component/>
    <router-view/>
    <footer-component/> 
  </div>
</template>

<script>
import BannerComponent from './components/BannerComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';


  export default {
    name: "App",
    data() {
      return {
        descricao : "Logo TBurguer",
        urlFoto : "/img/logo_tburguer.png"
      }
    },
    components: {
      NavBarComponent,
      FooterComponent,
      BannerComponent,
    }

  }
</script>

<style>

* {
  font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri';
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  margin-top: 16px;

  color: #333;
}



</style>
