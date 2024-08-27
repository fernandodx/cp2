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
                <select name="status" class="status" @change="atualizarStatusPedido($event, pedido.id)">
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
                     height="35px"
                     @click="deletarPedido(pedido.id)"/>
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
            const response = await fetch("http://localhost:3000/pedidos");
            this.listaPedidosRealizado = await response.json();
        },
        //Consultar Status
        async consultarStatus() {
            const response = await fetch("http://localhost:3000/status_pedido");
            this.listaStatusPedido = await response.json();
        },
        async deletarPedido(id) {
            
            //3˚ - Ao deletar o pedido, deve ser exibido a mensagem do componente de sucesso. 
                // Após isso a lista deve ser atualizada.

            const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                method: "DELETE"
            });
        },
        async atualizarStatusPedido(event, id) {
            const idPedidoAtualizado = event.target.value;
            console.log(idPedidoAtualizado);

            const atualizacaoJson = JSON.stringify({statusId : idPedidoAtualizado});

            const response = await fetch(`http://localhost:3000/pedidos/${id}`,{
                method : "PATCH",
                headers: {"Content-Type" : "application/json"},
                body: atualizacaoJson
            });


        }


        //Atualizar o pedido

    },
    mounted() {
        this.consultarPedidos();
        this.consultarStatus();
    }
}

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

select {
    padding: 2px;
    width: 110px;
    border: #222 solid 1 px;
    height: 36px;
    margin-right: 8px;
    font-size: 12px;
}

.pedidos-tabela-linha .divisor {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: 2px;
    background-color: darkgoldenrod;
}




</style>