<template>
  <div v-if="mensagem" :class="['mensagem-container', tipo]">
    <span>{{ mensagem }}</span>
    <div class="icon-container">
      <font-awesome-icon :icon="tipoIcon" />
    </div>
  </div>
</template>

<script>
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'MensagemComponent',
  props: {
    tipo: {
      type: String,
      required: true
    },
    mensagem: {
      type: String,
      required: true
    }
  },
  computed: {
    tipoIcon() {
      return this.tipo === 'sucesso' ? faCheck : faTimes;
    }
  }
}
</script>

<style scoped>
.mensagem-container {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.mensagem-container.sucesso {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  text-align: center;
}

.mensagem-container.erro {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  text-align: center;
}

.icon-container {
  margin-left: 12px;
}
</style>
