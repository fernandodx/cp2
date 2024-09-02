<template>
    <div v-if="tipo === 'sucesso'" id="mensagem-sucesso">
        <h1>{{ texto }}</h1>
        <img src="/img/icerto.png" alt="Ícone de sucesso">
    </div>

    <div v-if="tipo === 'erro'" id="mensagem-erro">
        <h1>{{ texto }}</h1>
        <img src="/img/ierro.png" alt="Ícone de erro">
    </div>

    
</template>

<script>
export default {
    name: "MenssagemES",
    props: {
            tipo: String,
            texto: String
    }
}
</script>

<style scoped>
#mensagem-sucesso {
    background-color: #d4edda;
    color: #155724;
    padding: 10px;
    border: 1px solid #c3e6cb;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
}

#mensagem-erro {
    background-color: #f8d7da;
    color: #721c24;
    padding: 10px;
    border: 1px solid #f5c6cb;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
}

img {
    width: 50px;
    height: 50px;
    margin-top: 10px;
}
</style>