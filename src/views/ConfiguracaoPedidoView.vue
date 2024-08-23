<template>
    <div>
        <h1>Configurar Pedido</h1>
        <pedido-component :burguer="this.hamburguerSelecionado"/>

    </div>
</template>

<script>
import PedidoComponent from '../components/PedidoComponent.vue';

export default {
  name: 'ConfiguracaoPedidoView',
  data() {
    return {
      hamburguerSelecionado: null,
    };
  },
  components: { PedidoComponent },
  mounted() {
    const { query } = this.$route;
    if (query.burguer) {
      try {
        const decodedBurger = JSON.parse(decodeURIComponent(query.burguer));
        this.hamburguerSelecionado = decodedBurger;
      } catch (error) {
        console.error('Erro ao decodificar o burguer:', error);
      }
    } else {
      console.error('Nenhum parâmetro \'burguer\' encontrado na query');
    }
  },
};
</script>

<style scoped>

</style>
