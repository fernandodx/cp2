<template>
    <div id="pedidos-tabela">
        <!-- Adicione o componente de mensagem para exibir alertas de erro e sucesso -->
        <Mensagem v-if="mensagemSucesso" tipo="sucesso" :mensagem="mensagemSucesso"/>
        <Mensagem v-if="mensagemErro" tipo="erro" :mensagem="mensagemErro"/>

        <!-- Mostrar a tabela apenas se houver pedidos -->
        <div v-if="listaPedidosRealizado.length > 0">
            <div id="pedidos-tabela-cabecalho">
                <div id="ordem-id">#ID</div>
                <div>Nome</div>    
                <div>Hamburguer</div>    
                <div>Ponto</div>    
                <div>Opcionais</div>    
                <div>Status</div>    
                <div id="div-acoes">Ações</div>    
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
        <!-- Mostrar mensagem quando não há pedidos -->
        <div v-else>
            <Mensagem tipo="erro" mensagem="Nenhum pedido encontrado."/>
        </div>
    </div>
</template>

<script>
import Mensagem from './Mensagem.vue';

export default {
    name: "ListaPedidoComponent",
    components: {
        Mensagem
    },
    data() {
        return {
            listaPedidosRealizado: [],
            listaStatusPedido: [],
            mensagemSucesso: "",
            mensagemErro: ""
        }
    },
    methods: {
        async consultarPedidos() {
            try {
                const response = await fetch("http://localhost:3000/pedidos");
                if (response.ok) {
                    this.listaPedidosRealizado = await response.json();
                    this.mensagemErro = '';
                } else {
                    this.mensagemErro = 'Falha ao carregar pedidos.';
                    this.listaPedidosRealizado = [];
                }
            } catch (error) {
                this.mensagemErro = 'Erro na conexão com o servidor.';
            }
        },
        async consultarStatus() {
            try {
                const response = await fetch("http://localhost:3000/status_pedido");
                if (response.ok) {
                    this.listaStatusPedido = await response.json();
                    this.mensagemErro = '';
                } else {
                    this.mensagemErro = 'Falha ao carregar status.';
                }
            } catch (error) {
                this.mensagemErro = 'Erro na conexão com o servidor.';
            }
        },
        async deletarPedido(id) {
            try {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "DELETE"
                });
                if (response.ok) {
                    this.mensagemSucesso = 'Pedido deletado com sucesso!';
                    this.mensagemErro = '';
                    // Atualizar a lista de pedidos após exclusão
                    this.consultarPedidos();
                } else {
                    this.mensagemErro = 'Falha ao deletar pedido.';
                }
            } catch (error) {
                this.mensagemErro = 'Erro na conexão com o servidor.';
            }
        },
        async atualizarStatusPedido(event, id) {
            const idPedidoAtualizado = event.target.value;
            const atualizacaoJson = JSON.stringify({statusId: idPedidoAtualizado});

            try {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "PATCH",
                    headers: {"Content-Type": "application/json"},
                    body: atualizacaoJson
                });
                if (!response.ok) {
                    this.mensagemErro = 'Falha ao atualizar status do pedido.';
                }
            } catch (error) {
                this.mensagemErro = 'Erro na conexão com o servidor.';
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
