<template>
    <div>
        <footer id="footer">
            <p>Construido por <a href="https://www.instagram.com/ellysrebeca/" target="_blanck">Ellys Rebeca</a> &copy; 2024</p>
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
	color: darkgoldenrod; 
}

footer a:hover{
	color: #fff;
}
</style>