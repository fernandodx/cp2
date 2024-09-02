<template>
  <div>
    <h1>Bem-vindo à nossa Página Inicial!</h1>
    <p>Descubra os hamburgueres deliciosos que oferecemos:</p>
    <div id="carrossel-container">
      <div id="carrossel">
        <div id="scroll-horizontal">
          <div id="card-content" v-for="burguer in listaMenuHamburgues" :key="burguer.id">
            <div id="card-linha">
              <div class="foto-hamburguer">
                <img :src="burguer.foto" :alt="burguer.nome" />
                <div class="card-coluna">
                  <p id="nome-content">{{ burguer.nome }}</p>
                  <p id="preco-content">R$ {{ burguer.valor }},00</p>
                  <p id="descricao-content">{{ burguer.descricao }}</p>
                  <button @click="selecionarBurguer(burguer)">Selecionar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      listaMenuHamburgues: [],
      carrosselInterval: null,
    };
  },
  methods: {
    async consultarMenu() {
      try {
        const response = await fetch("http://localhost:3000/menu");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const dados = await response.json();
        this.listaMenuHamburgues = dados.burgues || [];
        this.iniciarCarrossel();
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    },
    selecionarBurguer(burguerSelecionado) {
      const param = JSON.stringify(burguerSelecionado);
      const burguerJsonEncode = encodeURIComponent(param);
      this.$router.push({ path: '/config-pedido', query: { burguer: burguerJsonEncode } });
    },
    iniciarCarrossel() {
      const container = document.getElementById('scroll-horizontal');
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
      let scrollPosition = 0;

      this.carrosselInterval = setInterval(() => {
        scrollPosition += 1;
        if (scrollPosition > scrollWidth - containerWidth) {
          scrollPosition = 0;
        }
        container.scrollLeft = scrollPosition;
      }, 10);
    }
  },
  mounted() {
    this.consultarMenu();
  },
  beforeDestroy() {
    clearInterval(this.carrosselInterval);
  }
}
</script>

<style scoped>
  #carrossel-container {
    overflow: hidden;
    width: 73%;
    margin: 0 auto;
  }

  #carrossel {
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
  }

  #scroll-horizontal {
    display: flex;
    align-items: center;
    transition: transform 0.5s ease-in-out;
  }

  #card-content {
    display: inline-block;
    width: 300px;
    min-height: 500px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px #444;
    position: relative;
  }

  .foto-hamburguer {
    flex-shrink: 0;
  }

  .foto-hamburguer img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px 0 0 ;
  }

  #nome-content {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin: 12px;
  }

  #preco-content {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    color: green;
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
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
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
    flex-direction: row;
    height: 100%;
  }

  .card-coluna button {
    margin-top: auto;
    padding: 10px;
    background-color: rgb(12, 169, 124);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: 0.5s;
    width: 100%;
  }

  .card-coluna button:hover {
    background-color: transparent;
    color: rgb(6, 87, 85);
    border: solid 1px rgb(6, 87, 85);
    border-radius: 5px;
  }
</style>
