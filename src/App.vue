<template>
  <div id="app">
    <header>

      <monitor-nav></monitor-nav>

      <router-view> </router-view>
    </header>

  </div>

</template>

<script>


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body{
    font-family: Calibri;
    background-color: white;

  }

  header{
    width: 100vw;
    padding: 15px;
  }
</style>
