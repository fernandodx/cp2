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
                <router-link v-show="botao" id="bt-pedidos" to="/pedidos"><input type="submit" class="submit-btn" value="Ir Para Pedidos"/></router-link>
            </div>
        </form>
        <div id="sucesso">
            <p v-show="suc"><sucesso /></p>
            <p v-show="insuc"><insucesso /></p>
        </div>
    </div>
</template>

<script>
    import sucesso from './SucessoComponent'
    import insucesso from './InsucessoComponent'

    export default {
        name: "PedidoComponent",
        components:{
            sucesso,
            insucesso
        },
        data() {
            return {
                nomeCliente : "",
                pontoCarneSelecionado: "",
                listaPontoCarne : [],
                listaComplementos : [],
                listaBebidas: [],
                listaComplementosSelecionados: [],
                listaBebidasSelecionadas: [],
                suc: false,
                insuc: false,
                botao: false
            }
        },
        props: {
            burguer: null
        },
        methods: {
            async getTipoPontos() {
                const response = await fetch(" http://localhost:3000/tipos_pontos");
                const data = await response.json();
                this.listaPontoCarne = data;
            },
            async getOpcionais() {
                const response = await fetch(" http://localhost:3000/opcionais");
                const responseJson = await response.json();
                this.listaComplementos = responseJson.complemento;
                this.listaBebidas = responseJson.bebidas;
            },
            async criarPedido(e) {
                e.preventDefault();
                if(this.nomeCliente.length == 0){
                    this.suc = false;
                    this.insuc = true;
                    setTimeout(() => {
                        this.insuc = false
                    }, 3000);
                    setTimeout(() => {
                        alert('Campo nome vazio!')
                    }, 1000);
                    
                } else if(this.pontoCarneSelecionado == 0){
                    this.suc = false;
                    this.insuc = true;
                    setTimeout(() => {
                        this.insuc = false
                    }, 3000);
                    setTimeout(() => {
                        alert('É necessário escolher ponto da carne!')
                    }, 1000);
                } else{
                    // 1˚ - Não deixar criar um pedido sem nome, ponto da carne. (ok)
                    // 2˚  - Criar um componente de mensagem de sucesso e erro
                    // - Deve ter imagem de sucesso e erro. (ok)
                    // Esse componente deve ser usado na tela de cadastro do pedido e na tela de lista pedido ao deletar o pedido. 
                    //4˚ - Após o pedido criado, um botão deve aparecer na tela, para navergar para a lista de pedidos.       
                    this.suc = true;
                    this.insuc = false;
                    setTimeout(() => {
                        this.suc = false
                    }, 3000);
                    this.botao = true;
                    const dadosPedido = {
                        nome : this.nomeCliente,
                        ponto: this.pontoCarneSelecionado,
                        bebidas: Array.from(this.listaBebidasSelecionadas),
                        complementos: Array.from(this.listaComplementosSelecionados),
                        statusId: 5,
                        hamburguer: this.burguer 
                    }

                    const dadosPedidoJson = JSON.stringify(dadosPedido);

                    const requisicao = await fetch("http://localhost:3000/pedidos", {
                        method: "POST",
                        headers: {"Content-Type" : "application/json"},
                        body : dadosPedidoJson
                    });
                    }

            }
    

        },
        mounted() {
           this.getTipoPontos(); 
           this.getOpcionais();
        }
    }
</script>

<style scoped>

#foto-content {
    margin-bottom: 16px;
    border-radius: 16px;
    position: relative;
    z-index: -1;
    justify-content: center;
    width: 100%;
    height: 180px;
    object-fit: cover
}

#nome-hamburguer-content {
    font-size: 43px;
    font-weight: bold;
    text-align: start;
    margin-bottom: -90px;
    margin-left: 40px;
    color: antiquewhite;
    padding: 16px;
}

#pedido-form {
    max-width: 750px;
    margin: 0 auto;
}

.inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

label {
    font-weight: bold;
    margin-bottom: 16px;
    color: #222;
    padding: 5px 12px;
    border-left: 4px solid #b8860b;
    display: flex;
}

input, select {
    padding: 12px;
    width: 300px;
    border: #222 solid 1px;
    border-radius: 8px;
    height: 20px;
    height: px;
    font-size: 12px;
}

select {
    height: 50px;
}


#opcionais-titulo {
    width: 100%;
}

#opcionais-subtitulo {
    font-weight: bold;
    color: #222;
    border-left: 4px solid darkslategrey;
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
    font-weight: bold;
    border: solid 2px darkgoldenrod;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    margin: 0 auto;
    font-size: 16px;
    width: 100%;
    height: auto;
    transition: 0.5s;
}

.submit-btn.submit-btn:hover {
    background-color: transparent;
    color: #222;
}

#sucesso{
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 150px;
    right: 250px;
}

#bt-pedidos{
    margin-top: 10px;
}

</style>