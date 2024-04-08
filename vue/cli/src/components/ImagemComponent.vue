<template>
    <div class="container">
        <p>Nome da Imagem: {{ nomeImagem }}</p>
        <img v-show="imagemvVisivel" :src="urlImage" :alt="altImage"/>
        <button @click="apareceEsconde(), segundoMetodo()">Aparece/Esconde</button>
    </div>
</template>

<script>
    export default {
        name: "ImagemComponent",
        data() {
            return {
                altImage: "Banner da Imagem",
                //urlImage: "https://blog.ipleaders.in/wp-content/uploads/2021/08/law-firm-1.jpg",
                imagemvVisivel: false
            }
        },
        methods: {
            apareceEsconde() {
                this.imagemvVisivel = !this.imagemvVisivel;
                this.$emit('visibilidadeImg', this.imagemvVisivel);
            },
            segundoMetodo (){
                setTimeout(function(){
                    console.log("Segundo Método Chamado")
                }, 2000);
            }
        },
        props: {
            nomeImagem: String, 
            urlImage: String
        },
        emits: ["visibilidadeImg"]
    }
</script>

<style scoped>
    button {
        padding: 12px;
        font-weight: bold;
        color: darkcyan;
        background-color: azure;
        border: solid 2px darkcyan;
        border-radius: 8px;
        transition: 0.5s;
        cursor: pointer;
    }

    button:hover{
        background: darkcyan;
        color: azure;
    }

    .container {
        display: flex;
        flex-direction: column;
        widows: 50%;
        align-items: center;
        margin: 16px;
        border-bottom: solid 2px lightblue;
        padding: 16px;
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