<template>
    <div>
        <h1>Pedidos</h1>
        <ListaPedidosComponent/>
    </div>
</template>

<script>
    import ListaPedidosComponent from '@/components/ListaPedidosComponent.vue';
    export default {
        name: "PedidosView",
        components: {
            ListaPedidosComponent
        }
    }

</script>