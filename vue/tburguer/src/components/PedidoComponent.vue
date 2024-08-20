<template>
    <div>
        <form id="pedido-form">
            <div>
                <p id="nome-hamburguer-content">
<<<<<<< HEAD
                   {{ burguer.nome }} 
                </p>
                <img id="foto-content" :src="burguer.foto"/> 
=======
                    {{ burguer && burguer.nome ? burguer.nome : "-" }}
                </p>
                <img id="foto-content" :src="burguer && burguer.foto ? burguer.foto : ''"/> 
>>>>>>> 22b26c5538c0892168cfc28fbb9e93e468320f41
            </div>
            <div class="inputs" id="form-pedido">
                <label for="nome_cliente">Nome</label>
                <input type="text"
                       id="nome-cliente"
                       name="nome-cliente"
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
                <div class="checkbox-container">
                    <input type="checkbox" name="coca" value="Coca"/>
                    <span>Coca-Cola</span>
                    <input type="checkbox" name="fanta" value="Fanta">
                    <span>Fanta</span>
                </div>
            </div>
            <div class="inputs">
                <input type="submit" class="submit-btn" value="Confirmar Pedido"/>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "PedidoComponent",
        data() {
            return {
                pontoCarneSelecionado: "",
                listaPontoCarne : [],
                listaComplementos : [],
                listaBebidas: [],
                listaComplementosSelecionados: []
            }
        },
<<<<<<< HEAD
        props(){
=======
        props: {
>>>>>>> 22b26c5538c0892168cfc28fbb9e93e468320f41
            burguer: null
        },
        methods: {
            async getTipoPontos() {
                const response = await fetch("https://tburguer.wiremockapi.cloud/tipos_pontos");
                const data = await response.json();
                this.listaPontoCarne = data;
<<<<<<< HEAD
                console.log(this.listaPontoCarne);
            },
            async getOpcionais (){
                const response = await fecth:
                cont responseJson= await response.json();
                this.listaComplementos = responseJson.complemento;
                this.

            }

            

=======
            },
            async getOpcionais() {
                const response = await fetch("https://tburguer.wiremockapi.cloud/opcionais");
                const responseJson = await response.json();
                this.listaComplementos = responseJson.complemento;
                this.listaBebidas = responseJson.bebidas;
            }
>>>>>>> 22b26c5538c0892168cfc28fbb9e93e468320f41
            //TODO criar um metodo para preencher o complemento e a bebida.
            //EndPoints: /opcionais 


        },
        mounted() {
           this.getTipoPontos(); 
           this.getOpcionais();
            //TODO Vou precisar pegar o Argumento Hamburguer e preencher os campos obrigatórios. 

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
    border-left: 4px solid darkgoldenrod;
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







</style>