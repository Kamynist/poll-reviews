<template >
  <nav>
    <router-link to="/">Список</router-link> |
    <router-link to="/poll">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <span style="font-size: 6px;">
    Powered by Aleksey
  </span>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 1000px;
  font-size: 16px;
  margin: 0 auto;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
