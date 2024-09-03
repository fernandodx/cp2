<template>
    <div>
      <form id="pedido-form" @submit="criarPedido">
        <!-- Exibição do Hamburguer -->
        <div>
          <p id="nome-hamburguer-content">
            {{ burguer && burguer.nome ? burguer.nome : "-" }}
          </p>
          <img id="foto-content" :src="burguer && burguer.foto ? burguer.foto : ''" />
        </div>
        <!-- Formulário do Pedido -->
        <div class="inputs" id="form-pedido">
          <label for="nome_cliente">Nome</label>
          <input type="text" id="nome-cliente" v-model="nomeCliente" placeholder="Digite seu Nome" />
        </div>
        <div class="inputs">
          <label for="ponto-carne">Ponto da carne</label>
          <select id="ponto-carne" v-model="pontoCarneSelecionado">
            <option value="" disabled>Selecione o ponto</option>
            <option v-for="pontoCarne in listaPontoCarne" :key="pontoCarne.id" :value="pontoCarne">
              {{ pontoCarne.descricao }}
            </option>
          </select>
        </div>
        <div id="opcionais-titulo" class="inputs">
          <label id="opcionais-titulo" for="Opcionais">Selecione os opcionais</label>
          <label id="opcionais-subtitulo" for="Complemento">Adicione um complemento</label>
          <div class="checkbox-container" v-for="complemento in listaComplementos" :key="complemento.id">
            <input type="checkbox" :name="complemento.nome" v-model="listaComplementosSelecionados" :value="complemento" />
            <span>{{ complemento.nome }}</span>
          </div>
          <label for="Complemento">Adicione uma Bebida</label>
          <div class="checkbox-container" v-for="bebida in listaBebidas" :key="bebida.id">
            <input type="checkbox" :name="bebida.nome" :value="bebida" v-model="listaBebidasSelecionadas" />
            <span>{{ bebida.nome }}</span>
          </div>
        </div>
        <div class="inputs">
          <input type="submit" class="submit-btn" value="Confirmar Pedido" />
        </div>
      </form>
  
      <!-- Exibição de Mensagens -->
      <Mensagem v-if="mensagem.exibir" :tipo="mensagem.tipo" :texto="mensagem.texto" />
  
      <!-- Botão de Navegação Pós-Cadastro -->
      <button v-if="pedidoCriado" @click="navegarParaLista">Ir para Lista de Pedidos</button>
    </div>
  </template>
  
  <script>
  import Mensagem from './MensagemComponent.vue';  // Importando o componente de mensagem
  
  export default {
    name: "PedidoComponent",
    components: { Mensagem },
    data() {
      return {
        nomeCliente: "",
        pontoCarneSelecionado: "",
        listaPontoCarne: [],
        listaComplementos: [],
        listaBebidas: [],
        listaComplementosSelecionados: [],
        listaBebidasSelecionadas: [],
        mensagem: {
          exibir: false,
          tipo: '',
          texto: ''
        },
        pedidoCriado: false
      };
    },
    props: {
      burguer: null
    },
    methods: {
      async getTipoPontos() {
        const response = await fetch("http://localhost:3000/tipos_pontos");
        const data = await response.json();
        this.listaPontoCarne = data;
      },
      async getOpcionais() {
        const response = await fetch("http://localhost:3000/opcionais");
        const responseJson = await response.json();
        this.listaComplementos = responseJson.complemento;
        this.listaBebidas = responseJson.bebidas;
      },
      async criarPedido(e) {
        e.preventDefault();
  
        // Validação
        if (!this.nomeCliente || !this.pontoCarneSelecionado) {
          this.exibirMensagem('error', 'Nome e ponto da carne são obrigatórios.');
          return;
        }
  
        const dadosPedido = {
          nome: this.nomeCliente,
          ponto: this.pontoCarneSelecionado,
          bebidas: Array.from(this.listaBebidasSelecionadas),
          complementos: Array.from(this.listaComplementosSelecionados),
          statusId: 5,
          hamburguer: this.burguer
        };
  
        try {
          const response = await fetch("http://localhost:3000/pedidos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dadosPedido)
          });
  
          if (response.ok) {
            this.pedidoCriado = true;
            this.exibirMensagem('success', 'Pedido criado com sucesso!');
          } else {
            throw new Error('Falha ao criar pedido');
          }
        } catch (error) {
          this.exibirMensagem('error', 'Erro ao criar pedido.');
        }
      },
      exibirMensagem(tipo, texto) {
        this.mensagem.tipo = tipo;
        this.mensagem.texto = texto;
        this.mensagem.exibir = true;
        setTimeout(() => {
          this.mensagem.exibir = false;
        }, 3000);
      },
      navegarParaLista() {
        this.$router.push('/lista-pedidos');
      }
    },
    mounted() {
      this.getTipoPontos();
      this.getOpcionais();
    }
  };
  </script>
  
  <style scoped>
  /* Estilos existentes */
  </style>
  