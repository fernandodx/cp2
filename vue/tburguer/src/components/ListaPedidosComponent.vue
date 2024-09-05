<template>
    <div id="pedidos-tabela">
    <MensagemComponent :msg="msg" v-show="msg"/>      <div>
      <div v-if="listaPedidosRealizados.length > 0">  
      <div id="pedidos-tabela-cabecalho">
          <div id="ordem-id">#ID</div>
          <div>Nome</div>
          <div>Hamburguer</div>
          <div>Ponto</div>
          <div>Opcionais</div>
          <div>Status</div>
          <div id="div-acoes">Ações</div>
        </div>
      </div>
      </div>

      <div v-if="listaPedidosRealizados.length === 0">
      <p id="msgnegativa">Nenhum pedido realizado até o momento!</p>
      </div>
        <div
        id="pedidos-tabela-linhas"
        v-for="pedido in listaPedidosRealizados"
        :key="pedido.id">
        <div class="pedidos-tabela-linha">
          <div id="ordem-numero">{{ pedido.id }}</div>
          <div>{{ pedido.nome }}</div>
          <div>
            {{ pedido.hamburguer.nome }}
          </div>
          <div>{{ pedido.ponto.descricao }}</div>
          <div>
            <ul>
              <li
                v-for="(complemento, index) in pedido.complementos"
                :key="index"
              >
                {{ complemento.nome }}
              </li>
            </ul>
            <div class="divisor"></div>
            <ul>
              <li v-for="bebida in pedido.bebidas" :key="bebida.id">
                {{ bebida.nome }}
              </li>
            </ul>
          </div>
          <div>
            <select
              name="status"
              class="status"
              @change="atualizarStatusPedido($event, pedido.id)"
            >
              <option value="">Selecione</option>
              <option
                v-for="status in listaStatusPedido"
                :key="status.id"
                :value="status.id"
                :selected="status.id == pedido.statusId"
              >
                {{ status.descricao }}
              </option>
            </select>
          </div>
          <div id="div-acoes">
            <img
              src="/img/icone_lixeira.png"
              alt="Excluir"
              width="35px"
              height="35px"
              @click="deletarPedido(pedido.id)"
            />
  
            <!-- <button class="cancelar-btn" @click="deletarPedido(pedido.id)">
              Cancelar
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MensagemComponent from './MensagemComponent.vue';
  
  export default {
    name: "ListaPedidosComponent",
    components: {
      MensagemComponent
    },
    data() {
      return {
        listaPedidosRealizados: [],
        listaStatusPedido: [],
        msg: null
      };
    },
    methods: {
      async consultarPedidos() {
        const response = await fetch("http://localhost:3000/pedidos");
        this.listaPedidosRealizados = await response.json();
        console.log(this.listaPedidosRealizados);
      },
      async consultarListaStatus() {
        const response = await fetch("http://localhost:3000/status_pedido");
        this.listaStatusPedido = await response.json();
      },
      async deletarPedido(id) {
        const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
          method: "DELETE",
        });
        this.msg = `Pedido n˚${id}, foi cancelado com sucesso!`;
        setTimeout(() => this.msg = "", 3000);
        this.consultarPedidos();
      },
      async atualizarStatusPedido(event, id) {
        const idPedidoAtualizado = event.target.value;
  
        const body = JSON.stringify({ statusId: idPedidoAtualizado });
  
        const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: body,
        });
        this.msg = `Pedido n˚${id}, foi atualizado com sucesso!`;
        setTimeout(() => this.msg = "", 3000);
      },
    },
    mounted() {
      this.consultarPedidos();
      this.consultarListaStatus();
    },
  };
  </script>
  
  <style scoped>
  #pedidos-tabela {
    width: 100%;
    margin: 0 auto;
  }
  
  #pedidos-tabela-cabecalho,
  #pedidos-tabela-linhas,
  .pedidos-tabela-linha {
    display: flex;
    flex-wrap: wrap;
  }
  
  #pedidos-tabela-cabecalho {
    font-weight: bold;
    padding: 12px;
    border-bottom: 2px solid #222;
  }
  
  #pedidos-tabela-cabecalho div,
  .pedidos-tabela-linha div {
    width: 18%;
  }
  
  .pedidos-tabela-linha {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
  }
  
  #pedidos-tabela-cabecalho #ordem-id,
  .pedidos-tabela-linha #ordem-numero,
  .pedidos-tabela-linha #div-acoes,
  #pedidos-tabela-cabecalho #div-acoes {
    width: 5%;
  }
  
  .pedidos-tabela-linha .div-acoes {
    width: 5%;
  }
  
  select {
    padding: 2px;
    width: 110px;
    border: #222 solid 1px;
    border-radius: 8px;
    height: 36px;
    margin-right: 8px;
    font-size: 12px;
  }
  
  .cancelar-btn {
    background-color: #222;
    color: darkgoldenrod;
    transition: 0.5s;
    font-weight: bold;
    border: 2px solid darkgoldenrod;
    padding: 8px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 8px;
  }
  
  .cancelar-btn:hover {
    background-color: transparent;
    color: #222;
  }
  
  .pedidos-tabela-linha .divisor {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: 2px;
    background-color: darkgoldenrod;
  }

  #msgnegativa{
    text-align: center;
    font-size: 40px;
    margin-bottom: 40px;
  }
  </style>
  