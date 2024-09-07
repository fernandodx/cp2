<template>
    <div>
        <MensagemComponent v-if="mensagem" :tipo="mensagem.tipo" :mensagem="mensagem.texto" />

        <div v-if="listaPedidosRealizado.length > 0" id="pedidos-tabela">
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

        <div v-else>
            <p>Nenhum pedido encontrado.</p>
        </div>
    </div>
</template>

<script>
import MensagemComponent from './MensagemComponent.vue';

export default {
    name: "ListaPedidoComponent",
    components: { MensagemComponent },
    data() {
        return {
            listaPedidosRealizado: [],
            listaStatusPedido: [],
            mensagem: null
        }
    },
    methods: {
        async consultarPedidos() {
            const response = await fetch("http://localhost:3000/pedidos");
            this.listaPedidosRealizado = await response.json();
        },
        async consultarStatus() {
            const response = await fetch("http://localhost:3000/status_pedido");
            this.listaStatusPedido = await response.json();
        },
        async deletarPedido(id) {
            try {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "DELETE"
                });

                if (response.ok) {
                    this.mensagem = { tipo: 'sucesso', texto: 'Pedido deletado com sucesso!' };
                    this.consultarPedidos();
                } else {
                    throw new Error('Erro ao deletar o pedido.');
                }
            } catch (error) {
                this.mensagem = { tipo: 'erro', texto: 'Erro ao deletar o pedido. Tente novamente.' };
            }
        },
        async atualizarStatusPedido(event, id) {
            const idPedidoAtualizado = event.target.value;

            const atualizacaoJson = JSON.stringify({ statusId: idPedidoAtualizado });

            try {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: atualizacaoJson
                });

                if (response.ok) {
                    this.mensagem = { tipo: 'sucesso', texto: 'Status atualizado com sucesso!' };
                    this.consultarPedidos(); // Atualiza a lista após a mudança de status
                } else {
                    throw new Error('Erro ao atualizar o status.');
                }
            } catch (error) {
                this.mensagem = { tipo: 'erro', texto: 'Erro ao atualizar o status. Tente novamente.' };
            }
        }
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
    border: #222 solid 1px;
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
