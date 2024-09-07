<template>
    <div>
      <h1>Menu</h1>
      <div id="scroll-horizontal">
        <div
          id="card-content"
          v-for="burgue in listaMenuHamburgues"
          :key="burgue.id"
        >
          <div id="card-linha">
            <div class="foto-hamburguer">
              <img :src="burgue.foto" :alt="burgue.nome" />
              <div class="card-coluna">
                <p id="nome-content">{{ burgue.nome }}</p>
                <p id="preco-content">R$ {{ burgue.valor }},00</p>
                <p id="descricao-content">{{ burgue.descricao }}</p>
                <button @click="selecionarBurguer(burgue)">Selecionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BannerComponent from "../components/BannerComponent.vue";
  
  export default {
    name: "MenuView",
    components: {
     
    },
    data() {
      return {
        listaMenuHamburgues: [],
      };
    },
    methods: {
      async consultarMenu() {
        const response = await fetch("http://localhost:3000/menu");
        const dados = await response.json();
        this.listaMenuHamburgues = dados.burgues;
      },
      selecionarBurguer(burguerSelecionado) {
        const param = JSON.stringify(burguerSelecionado);
        const burguerJsonEncode = encodeURIComponent(param);
        this.$router.push({path: '/config-pedido', query: {burguer : burguerJsonEncode}});
      },
    },
    mounted() {
      this.consultarMenu();
    },
  };
  </script>
  
  <style scoped>
  #card-content {
    display: inline-block;
    width: 250px;
    min-height: 500px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  #scroll-horizontal {
    flex: 1;
    overflow-x: auto;
    white-space: nowrap;
    width: 600px;
    margin: 0 auto;
    box-shadow: inset -10px 0px 15px -20px gray;
  }
  
  .foto-hamburguer {
    flex-shrink: 0;
  }
  #preco-content {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    color: lightcoral;
  }
  
  #nome-content {
    font-size: large;
    text-align: center;
    margin: 12px;
  }
  #descricao-content {
    color: gray;
    margin-top: 16px;
    margin-bottom: 16px;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* Número de linhas desejado */
    -webkit-box-orient: vertical;
  }
  
  .foto-hamburguer img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px 0 0;
  }
  
  .card-coluna {
    flex-grow: 1;
    padding: 15px;
    height: 100%;
  }
  
  .card-coluna p {
    margin: 0;
  }
  
  .card-linha {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .card-coluna button {
    margin-top: auto;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: 0.3s;
    width: 100%;
  }
  
  .card-coluna button:hover {
    background-color: transparent;
    color: #222;
    border: solid #4caf50 2px;
    border-radius: 5px;
  }
  </style>
  