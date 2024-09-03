<template>
    <div>
        <form id="pedido-form" @submit="criarPedido($event)">
            <div>
                <p id="nome-hamburguer-content">
                    {{ burguer && burguer.nome ? burguer.nome : "-" }}
                </p>
                <img id="foto-content" :src="burguer && burguer.foto ? burguer.foto : ''"/> 
            </div>
            <div class="inputs" id="form-pedido">
                <label for="nome_cliente">Nome</label>
                <input type="text"
                       id="nome-cliente"
                       name="nome-cliente"
                       v-model="nomeCliente"
                       placeholder="Digite seu Nome"/>
            </div>
            <div class="inputs">
                <label for="ponto-carne">Ponto da carne</label>
                <select
                    id="ponto-carne"
                    name="ponto-carne"
                    v-model="pontoCarneSelecionado">
                    <option value="" selected>Selecione o ponto</option>
                    <option v-for="pontoCarne in listaPontoCarne" 
                            :key="pontoCarne.id" 
                            :value="pontoCarne">{{ pontoCarne.descricao }}</option>
                </select>
            </div>
            <div id="opcionais-titulo" class="inputs">
                <label id="opcionais-titulo" for="Opcionais"> Selecione os opcionais</label>
                <label id="opcionais-subtitulo" for="Complemento">Adicione um complemento</label>
                
                <div class="checkbox-container"
                     v-for="complemento in listaComplementos"
                     :key="complemento.id">

                     <input type="checkbox" :name="complemento.nome"
                            v-model="listaComplementosSelecionados"
                            :value="complemento">
                     <span>{{ complemento.nome }}</span>       
                </div>
                
                <label for="Complemento">Adicione uma Bebida</label>

                <div class="checkbox-container" v-for="bebida in listaBebidas" :key="bebida.id">
                    <input type="checkbox" :name="bebida.nome" :value="bebida" v-model="listaBebidasSelecionadas"/>
                    <span>*{{ bebida.nome }}*</span>
                </div>
            </div>
            <div class="inputs">
                <input type="submit" class="submit-btn" value="Confirmar Pedido"/>
            </div>

            <div v-if="pedidoCriadoComSucesso" class="navegacao">
                <button @click="irParaListaPedidos" class="navegar-btn">Ir para a lista de pedidos</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "PedidoComponent",
    data() {
        return {
            nomeCliente: "",
            pontoCarneSelecionado: "",
            listaPontoCarne: [],
            listaComplementos: [],
            listaBebidas: [],
            listaComplementosSelecionados: [],
            listaBebidasSelecionadas: [],
            pedidoCriadoComSucesso: false, 
        }
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

           
            if (!this.nomeCliente || !this.pontoCarneSelecionado) {
                alert("Nome e ponto da carne são obrigatórios.");
                return;
            }

            const dadosPedido = {
                nome: this.nomeCliente,
                ponto: this.pontoCarneSelecionado,
                bebidas: Array.from(this.listaBebidasSelecionadas),
                complementos: Array.from(this.listaComplementosSelecionados),
                statusId: 5,
                hamburguer: this.burguer
            }

            const dadosPedidoJson = JSON.stringify(dadosPedido);

            try {
                const response = await fetch("http://localhost:3000/pedidos", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: dadosPedidoJson
                });
                
                if (response.ok) {
                    this.pedidoCriadoComSucesso = true;
                   
                    this.nomeCliente = "";
                    this.pontoCarneSelecionado = "";
                    this.listaBebidasSelecionadas = [];
                    this.listaComplementosSelecionados = [];
                } else {
                    alert("Erro ao criar pedido. Tente novamente.");
                }
            } catch (error) {
                alert("Erro na conexão com o servidor.");
            }
        },
        irParaListaPedidos() {
            this.$router.push('/lista-pedidos');
        }
    },
    mounted() {
        this.getTipoPontos();
        this.getOpcionais();
    }
}
</script>

<style scoped>


.navegacao {
    margin-top: 20px;
}

.navegar-btn {
    background-color: #222;
    color: darkgoldenrod;
    font-weight: bold;
    border: solid 2px darkgoldenrod;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    font-size: 16px;
    width: 100%;
    height: auto;
    transition: 0.5s;
}

.navegar-btn:hover {
    background-color: transparent;
    color: #222;
}
</style>
