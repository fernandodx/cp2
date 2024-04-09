<template>
    <div>
          <p>Nome: {{ nome }}</p>
          <p>E-mail: {{ email }}</p>  

          <h1 v-show="isBotafogoCampeao">Botafogo Campeão</h1>

           <imagem-component 
                 @visibilidadeImg="exibirMsgBotafogo"
                    nomeImagem="Botafogo" 
                    urlImagem="https://i.pinimg.com/564x/0b/a2/4f/0ba24f3a70f175037300d8a6dfe9c946.jpg"/>

           <imagem-component 
                    nomeImagem="Time feio" 
                    urlImagem="https://dad.puc-rio.br/wp-content/uploads/2018/04/Flamengo1-1200x635.png"/>         

    </div>
</template>

<script>
import ImagemComponent from './ImagemComponent.vue'




    export default {
        name: "UsuarioComponent",
        components: {
            ImagemComponent 
            },
        data(){
            return {
                nome : "Fernando",
                email : "fernando.dias@ifb.edu.br",
                isBotafogoCampeao : false
            }
        },
        methods: {
            exibirMsgBotafogo(isImagemVisivel){
                console.log("exibirMsgBotafogo sendo chamado");
                if(isImagemVisivel === true){
                    this.isBotafogoCampeao = true;
                }else{
                    this.isBotafogoCampeao = false;
                }
            }
        }
    }

</script>