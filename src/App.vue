<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link :to="{ name: 'CardPage' }">card</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

#nav {
    padding: 30px;
    z-index: 2000;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
