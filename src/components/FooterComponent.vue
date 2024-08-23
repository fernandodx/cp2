<template>
    <div>
        <footer id="footer">
            <p>Construido por Fernando Dias de Souza &copy; 2024</p>
        </footer>
    </div>
</template>
<script>
export default {
  name: 'FooterComponent',
};
</script>
<style scoped>
    #footer {
        height: 80px;
        background-color: #333;
        color: goldenrod;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #footer p {
        font-size: 14px;
    }

</style>
