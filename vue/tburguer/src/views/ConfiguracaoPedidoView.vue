<template>
    <div>
        <h1>PEDIDO SELECIONADO</h1>
        <PedidoComponent/>

    </div>
</template>

<script>
import PedidoComponent from '@/components/PedidoComponent.vue';

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