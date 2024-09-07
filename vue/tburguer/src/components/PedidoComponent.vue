<template>
    <div>
      <div>
        <form id="pedido-form" @submit="criarPedido($event)">
          <MensagemComponent :msg="msg" v-show="msg"/>
          <div>
            <p id="nome-hambuguer-content">
              {{ burguer && burguer.nome ? burguer.nome : "-" }}
            </p>
            <img
              id="foto-content"
              :src="burguer && burguer.foto ? burguer.foto : '-'"
            />
          </div>
        
          <div class="inputs" id="form-pedido">
            <label for="nome-cliente">Nome</label>
            <input
              type="text"
              id="nome-cliente"
              name="nome-cliente"
              v-model="nomeCliente"
              placeholder="Digite seu nome"
            />
          </div>
          <div class="inputs">
            <label for="ponto-carne">Ponto da carne</label>
            <select
              id="ponto-carne"
              name="ponto-carne"
              v-model="pontoCarneSelecionado"
            >
              <option value="">Selecione o Ponto</option>
              <option
                v-for="pontoCarne in listaPontoCarne"
                :key="pontoCarne.id"
                :value="pontoCarne"
              >
                {{ pontoCarne.descricao }}
              </option>
            </select>
          </div>
          <div id="opcionais-title" class="inputs">
            <label id="opcionais-title" for="opcionais"
              >Selecione os opcionais</label
            >
            <label id="opcionais-subtitle" for="Complemento"
              >Adicione um complemento</label
            >
  
            <div
              class="checkbox-container"
              v-for="complemento in listaComplementos"
              :key="complemento.id"
            >
              <input
                type="checkbox"
                :name="complemento.nome"
                v-model="listaComplementoSelecionado"
                :value="complemento"
              />
              <span>{{ complemento.nome }}</span>
            </div>
            <label id="opcionais-subtitle" for="Complemento"
              >Adicione a bebdida</label
            >
  
            <div
              class="checkbox-container"
              v-for="bebida in listaBebidas"
              :key="bebida.id"
            >
              <input
                type="checkbox"
                :name="bebida.nome"
                v-model="listaBebidasSelecionadas"
                :value="bebida"
              />
              <span>{{ bebida.nome }}</span>
            </div>
          </div>
          <div class="inputs">
            <input type="submit" class="submit-btn" value="Confirmar Pedido" />
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>

  import MensagemComponent from './MensagemComponent.vue';
  export default {
    name: "PedidoComponent",
    components: { 
      MensagemComponent,
     },
    data() {
      return {
        nomeCliente: null,
        pontoCarneSelecionado: "",
        listaPontoCarne: [],
        listaComplementos: [],
        listaBebidas: [],
        listaComplementoSelecionado: [],
        listaBebidasSelecionadas: [],
        msg: null,
      };
    },
    props: {
      burguer: null,
    },
    methods: {
      async getTipoPontos() {
        const response = await fetch("http://localhost:3000/tipos_pontos");
        const data = await response.json();
        this.listaPontoCarne = data;
        console.log(data);
      },
      async getListaOpcionais() {
        const response = await fetch("http://localhost:3000/opcionais");
        const data = await response.json();
        this.listaComplementos = data.complemento;
        this.listaBebidas = data.bebidas;
        console.log(data);
      },
        async criarPedido(e) {
        e.preventDefault();
        if (!(this.nomeCliente && this.pontoCarneSelecionado)){
          this.msg = "NOME e PONTO DA CARNE são campos obrigatórios! Favor os preencha.";
          setTimeout(() => this.msg = "", 3000);
          return;
        }
  
        const dadosPedido = {
          nome: this.nomeCliente,
          ponto: this.pontoCarneSelecionado,
          bebidas: Array.from(this.listaBebidasSelecionadas),
          complementos: Array.from(this.listaComplementoSelecionado),
          statusId: 6,
          hamburguer: this.burguer,
        };
        const dadosPedidoJson = JSON.stringify(dadosPedido);
  
        const req = await fetch("http://localhost:3000/pedidos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dadosPedidoJson,
        });
        const res = await req.json();
        this.msg = `Pedido n˚ ${res.id} gerado!`;
        setTimeout(() => {
          this.msg = "";
          this.nomeCliente = null;
          this.pontoCarneSelecionado = "";
          this.listaBebidasSelecionadas = [];
          this.listaComplementoSelecionado = [];},3000);
      },
      scrollParaMensagem() {
        // Encontrar o elemento usando o ID
        const elementoDeDestino = document.getElementById("form-pedido");
  
        if (elementoDeDestino) {
          // Rolar até o elemento usando scrollIntoView
          elementoDeDestino.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    mounted() {
      this.getTipoPontos();
      this.getListaOpcionais();
    },
  };
  </script>
  
  <style scoped>
  #foto-content {
    margin-bottom: 16px;
    border-radius: 16px;
    position: relative; /* Adicionado: definindo posição relativa */
    z-index: -1;
    justify-content: center;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  #nome-hambuguer-content {
    font-size: 43px;
    font-weight: bold;
    text-align: start;
    margin-bottom: -90px;
    margin-left: 40px;
    z-index: 1;
    color: white;
    padding: 16px;
  }
  
  #pedido-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 12px;
    border-left: 4px solid darkgoldenrod;
  }
  
  input,
  select {
    padding: 6px;
    width: 300px;
    border: #222 solid 1px;
    border-radius: 8px;
    height: 36px;
    font-size: 12px;
  }
  
  #opcionais {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  #opcionais-title {
    width: 100%;
  }
  
  #opcionais-subtitle {
    font-weight: normal;
    color: #353434;
    border-left: 4px solid darkolivegreen;
  }
  
  .checkbox-container {
    display: flex;
    align-items: flex-start;
    align-content: center;
    width: 100%;
    margin-bottom: 16px;
  }
  
  .checkbox-container span,
  .checkbox-container input {
    width: auto;
    height: 20px;
  }
  
  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }
  
  .submit-btn {
    background-color: #222;
    color: darkgoldenrod;
    border: darkgoldenrod solid 2px;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    margin: 0 auto;
    font-size: 16px;
    width: 100%;
    height: auto;
    transition: 0.5s;
  }
  
  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
  </style>
  