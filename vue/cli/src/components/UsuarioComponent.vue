<template>
    <div>
          <p>Nome: {{ nome }}</p>
          <p>E-mail: {{ email }}</p>

          <h1 v-show="isNetlixMelhor"> Netflix é melhor</h1>

          <imagem-component @visibilidadeImg="exibirMensagemNetflix" nomeImagem="Netflix" urlImage="https://about.netflix.com/images/meta/netflix-symbol-black.png"/>
          <imagem-component nomeImagem="HBO Max" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTek8mCpf41kM0vQ-VJav-NY16XlEF4L-UMlWinuX4Lqg&s"/>
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
                nome : "Ana Luísa",
                email : "ana.caixeta@estudante.ifb.edu.br",
                isNetlixMelhor: false
            }
        },
        methods: {
            exibirMensagemNetflix(isImagemVisivel){
                if(isImagemVisivel === true){
                    this.isNetlixMelhor = true;
                }
                else{
                    this.isNetlixMelhor = false;
                }
            }
        }
    }

</script>