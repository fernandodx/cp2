<template>
    <div class="container">
        <img :src="urlImagem" :alt="altImagem">
    </div>
</template>

<script>

    export default {
        name: "ImagemComponent",
        data() {
            return {
                altImagem: "Banner da Imagem",
                urlImagem : "https://blog.ipleaders.in/wp-content/uploads/2021/08/law-firm-1.jpg"
            }
        }
    }

</script>

<style scoped>

    img {
        width: 300px;
        height: auto;
        border: solid 4px darkcyan;
        margin: 16px;
        border-radius: 16px;
        box-shadow: 2px 2px 10px 2px darkcyan;
    }

</style>