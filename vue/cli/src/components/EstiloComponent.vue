<template>
    <div>
        <h1>Titulo padrão</h1>
        <p class="subtitulo"> SubTitulo estiloso</p>
    </div>
    
</template>

<script>
    export default {
        name: "EstiloComponent"
    }
</script>

<style scoped>

    h1 {
        color: pink;
    }

    .subtitulo {
        text-align: center;
        font-family: 'Gill Sans';
        color: red;
    }


</style>