<template>
    <div>
        <footer id="footer">
            <p>Bem Vindo: {{ nome }} Olá mundo do Vue com CLI</p>
            <CadastroComponent/>
        </footer>
    </div>
</template>

<script>
    import CadastroComponent from './CadastroComponent.vue'

    export default {
        name : "HomeComponent",
        data() {
            return {
                nome : "Fernando"
            }
        },
        components: {
            CadastroComponent
        }
    }


</script>