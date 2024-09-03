<template>
    <div v-if="exibir" :class="['mensagem', tipo]" role="alert">
      <button class="fechar" @click="fecharMensagem">×</button>
      <div class="icone">
        <img :src="iconeSrc" alt="Ícone de mensagem" width="24" height="24"/>
      </div>
      <div class="texto">{{ texto }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MensagemComponent",
    props: {
      tipo: {
        type: String,
        required: true,
        validator(value) {
          return ['success', 'error', 'info'].includes(value);
        }
      },
      texto: {
        type: String,
        required: true
      },
      exibir: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      iconeSrc() {
        switch (this.tipo) {
          case 'success':
            return '/img/icone_sucesso.png';  // Ajuste o caminho se necessário
          case 'error':
            return '/img/icone_erro.png';     // Ajuste o caminho se necessário
          case 'info':
            return '/img/icone_info.png';     // Ajuste o caminho se necessário
          default:
            return '';
        }
      }
    },
    methods: {
      fecharMensagem() {
        this.$emit('update:exibir', false);
      }
    }
  };
  </script>
  
  <style scoped>
  .mensagem {
    display: flex;
    align-items: center;
    padding: 12px;
    margin: 10px 0;
    border-radius: 8px;
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid transparent;
    font-size: 14px;
  }
  
  .mensagem.success {
    background-color: #d4edda;
    color: #155724;
    border-color: #c3e6cb;
  }
  
  .mensagem.error {
    background-color: #f8d7da;
    color: #721c24;
    border-color: #f5c6cb;
  }
  
  .mensagem.info {
    background-color: #d1ecf1;
    color: #0c5460;
    border-color: #bee5eb;
  }
  
  .fechar {
    position: absolute;
    top: 8px;
    right: 12px;
    background: none;
    border: none;
    font-size: 18px;
    color: currentColor;
    cursor: pointer;
  }
  
  .icone {
    margin-right: 12px;
  }
  
  .texto {
    flex: 1;
  }
  </style>
  