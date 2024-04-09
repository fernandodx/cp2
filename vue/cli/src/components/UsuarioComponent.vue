<template>
    <div>
          <p>Nome: {{ nome }}</p>
          <p>E-mail: {{ email }}</p>  

        <h1 v-show="isFlamengoCampeao">Flamengo Campeão</h1>


           <imagem-component 
           @visibilidadeImg="exigirMsgFlamengo"
           nomeImagem="Imagem Teste"
           urlImagem="https://th.bing.com/th/id/OIP.DH_XHziuOGLfjtKKiZUKQwHaEo?rs=1&pid=ImgDetMain" />

           <imagem-component nomeImagem="Imagem Teste"
           urlImagem="https://th.bing.com/th/id/R.890f25e991b8f73861172bb9ec44322c?rik=IaZJ03oTjlWe9Q&pid=ImgRaw&r=0"/>

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
                isFlamengoCampeao: false
            }
        },
        methods: {
            exigirMsgFlamengo(isImagemVisivel) {
                console.log("ExibirMsgFlamengo sendo chamado")
                if(isImagemVisivel ==true){
                    this.isFlamengoCampeao = true;
                }else{
                    this.isFlamengoCampeao = false;
                }
            }
        }
    }

</script>