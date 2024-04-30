<template>
    <div>
        <h1>PEDIDO SELECIONADO</h1>

    </div>
</template>

<script>
    export default {
        name: "ConfiguracaoPedidoView",
        data() {
            return {
                hamburguerSelecionado : null,
            };
        },
        mounted() {
            console.log(this.$router.query.burguer);
        }
    }
</script>

<style scoped>

</style>