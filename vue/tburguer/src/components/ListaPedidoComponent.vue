<template>
    <div id="pedidos-tabela">
        <!-- Adicione o componente de mensagem para exibir alertas de erro e sucesso -->
        <div>
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

        <!-- Quando não tiver nenhum pedido. Somente o componente de mensagem é para ser apresentado. A tabela deve ser escondida. -->
        
        <div class="pedidos-tabela-linha"
            v-for="pedido in listaPedidosRealizado" :key="pedido.id">
            <div id="ordem-numero">{{ pedido.id }}</div>
            <div>{{ pedido.nome }}</div>
            <div>{{ pedido.hamburguer.nome }}</div>
            <div>{{ pedido.ponto.descricao }}</div>
            <div>
                <ul>
                    <li v-for="(complemento, index) in pedido.complementos" :key="index">
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
                <select name="status" class="status">
                    <option value="">Selecione</option>
                    <option v-for="status in listaStatusPedido" :key="status.id"
                            :value="status.id"
                            :selected="status.id == pedido.statusId">
                        {{ status.descricao }}
                    </option>
                </select>
            </div>
            <div id="div-acoes">
                <img src="/img/icone_lixeira.png"
                     alt="Excluir"
                     width="35px"
                     height="35px"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListaPedidoComponent",
    data() {
        return {
            listaPedidosRealizado: [],
            listaStatusPedido: []
        }
    },
    methods: {

        //ConsultarPedidos
        async consultarPedidos() {
            const response = await fetch("https://tburguer.wiremockapi.cloud/pedidos");
            this.listaPedidosRealizado = await response.json();
        },
        //Consultar Status
        async consultarStatus() {
            const response = await fetch("https://tburguer.wiremockapi.cloud/status_pedido");
            this.listaStatusPedido = await response.json();
        }

        //deletar Pedido

        //Atualizar o pedido

    },
    mounted() {
        this.consultarPedidos();
    }
}

</script>

<style scoped>

</style>