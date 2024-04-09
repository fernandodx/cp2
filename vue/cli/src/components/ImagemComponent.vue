<template>
  <div class="container">
    <p>Nome da image: {{ nomeImagem }}</p>
    <img v-show="imageVisivel" :src="urlImagem" :alt="altImagem" />
    <button @click="apareceEsconde(), segundoMetodo()">Aparece/Esconde</button>
  </div>
</template>

<script>
export default {
  name: "ImagemComponent",
  data() {
    return {
      imageVisivel: false,
      altImagem: "Banner da Imagem",
   //   urlImagem:
       // "https://blog.ipleaders.in/wp-content/uploads/2021/08/law-firm-1.jpg",
    };
  },
  methods: {
    apareceEsconde() {
        
        console.log("FUI CLICADO!");
        this.imageVisivel =! this.imageVisivel;
        this.$emit('visibilidadeImg', this.imageVisivel);
    },
    segundoMetodo (){
        setTimeout(function() {
            console.log("Segundo Metodoo Chamado!")
        }, 2000);
        
    }
  },
  props: {
    nomeImagem: String,
    urlImagem: String
  },
  emits:  ["visibilidadeImg"]

}
</script>

<style scoped>
button {
  padding: 12px;
  font-weight: bold;
  color: cyan;
  background-color: azure;
  border: solid 2px darkcyan;
  border-radius: 8px;
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
    background-color: darkcyan;
    color: azure;

}

img {
  width: 300px;
  height: auto;
  border: solid 4px darkcyan;
  margin: 16px;
  border-radius: 16px;
  box-shadow: 2px 2px 10px 2px darkcyan;
}
</style>