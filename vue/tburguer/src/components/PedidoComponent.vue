<template>
    <div>
        <form id="pedido-fora">
            <div>
                <p id="nome-hamburguer-content">
                    Diretoria
                </p>
                <img id="foto-content" src="">
            </div>

            <div class="inputs" id="form-pedido">
                <label for="nome_cliente">Nome</label>
                <input type="text"
                        id="nome-cliente"
                        name="nome-cliente"
                        placeholder="Digite seu nome">
            </div>

            <div class="inputs">
                <label for="ponto-carne">Ponto da carne</label>
                <input type="text"
                        id="ponto-carne"
                        name="ponto-carne"
                        option value="">
            </div>
        
        </form>

    </div>
</template>

<script>
    export default {
        name: "PedidoComponent"
    }
</script>

<style scoped>

</style>