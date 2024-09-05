<template>
    <div>
        <nav id="nav">
            <router-link to="/" id="logo-url">
                <img :src="urlLogo" :alt="descImg" id="logo">
            </router-link>
            <router-link to="/menu">Menu</router-link>
            <router-link to="/pedidos">Pedidos</router-link>
        </nav>
    </div>
    
</template>

<script>
    export default {
        name: "NavBarComponent",
        props: {
            urlLogo : String,
            descImg : String
        }
    }

</script>

<style scoped>

#nav {
    background-color: #333;
    border-bottom: 3px solid darkgoldenrod;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#nav #logo-url {
    margin: auto;
    margin-left: 0;
}

#logo {
    width: 40px;
    height: 40px;
}

#nav a {
    color: darkgoldenrod;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}

#nav a:hover {
    color: antiquewhite;
}


</style>