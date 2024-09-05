<template>
    <div>
        <footer id="footer">
            <p>Desenvolvido por <a href="http://instagram.com/felipealves.steve" target="_blanck">Felipe Alves</a> &copy; 2024</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "FooterComponent"
    }

</script>

<style scoped>

#footer {
    height: 80px;
    background-color: #333;
    border-top: solid 3px darkgoldenrod;
    color: darkgoldenrod;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer a{
	color: #fff;
}

footer a:hover{
	color: #00bcd4;
}
</style>