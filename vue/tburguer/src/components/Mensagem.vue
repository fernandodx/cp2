<template>
    <div :class="['mensagem', tipo]">
        <img :src="icone" alt="Mensagem" />
        <p>{{ mensagem }}</p>
    </div>
</template>

<script>
export default {
    name: 'Mensagem',
    props: {
        tipo: {
            type: String,
            default: 'sucesso',
            validator: value => ['sucesso', 'erro'].includes(value)
        },
        mensagem: {
            type: String,
            required: true
        }
    },
    computed: {
        icone() {
            return this.tipo === 'sucesso'
                ? '/path-to-success-image.png' 
                : '/path-to-error-image.png'; 
        }
    }
}
</script>

<style scoped>
.mensagem {
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
}

.mensagem img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.mensagem.sucesso {
    background-color: #d4edda;
    color: #155724;
}

.mensagem.erro {
    background-color: #f8d7da;
    color: #721c24;
}
</style>
