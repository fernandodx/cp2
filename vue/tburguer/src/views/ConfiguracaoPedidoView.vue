<template>
    <div>
        <h1>Configurar Pedido</h1>
        <pedido-component/>
    </div>
</template>

<script>
    import PedidoComponent from '../components/PedidoComponent.vue';

    export default {
        name: "ConfiguracaoPedidoView",
        data() {
            return {
                hamburguerSelecionado : null,
            };
        },
        components: { PedidoComponent },
        mounted() {
            console.log(this.$router.query.burguer);
        }
    }
</script>

<style scoped>

</style>