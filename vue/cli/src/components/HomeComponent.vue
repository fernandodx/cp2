<template>
    <div>
        <footer id="footer">
            <p>Bem Vindo: {{ nome }} Olá mundo do Vue com CLI</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name : "HomeComponent",
        data() {
            return {
                nome : "Fernando"
            }
        }
    }


</script>