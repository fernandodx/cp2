<template>
    <div>
        <h1>Configurar Pedido</h1>
        <pedido-component :burguer="this.hamburguerSelecionado"/>
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
            console.log(this.$router.query);
            const burguerDecode = decodeURIComponent(this.$router.query.burguer);
            const burguerJson = JSON.parse(burguerDecode);
         
            this.hamburguerSelecionado = burguerJson;
        }
    }
</script>

<style scoped>

</style>