<template>
    <div id="footer">
        <p>Construido por Felipe A.V.V.G. &copy; 2024</p>
    </div>
</template>

<script>
export default {
       name: "FooterComponent"
}
</script>

<style scoped>
    #footer{
        height: 80PX;
        background-color: darkslateblue;
        color: goldenrod;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #footer p{
        font-size: 14px;

    }
</style>