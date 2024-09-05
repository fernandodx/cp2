<template>
  <div>
    <h1>Configurar Pedido</h1>
    <PedidoComponent :burguer="this.hamburguerSelecionado" />

  </div>
</template>

<script>

import PedidoComponent from '@/components/PedidoComponent.vue';

export default {
  name: 'ConfiguracaoPedidoView',
  components: {
    PedidoComponent
  },
  data() {
    return {
      hamburguerSelecionado: null,
    };
  },
  mounted() {
   const burguerDecode = decodeURIComponent(this.$route.query.burguer);
   const burguer = JSON.parse(burguerDecode);
   this.hamburguerSelecionado = burguer;
   console.log(`SUCESSO ${this.hamburguerSelecionado}`);
  },
}
</script>
