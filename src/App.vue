<template>
  <div id="app">

<!--    <div class="testBox">-->
<!--      <div class="test"></div>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  margin: 0px;
  padding: 0px;
}
  .testBox{
    height: 200px;
    background: #42b983;
  }
  .test{
    width: 50px;
    height: 100%;
    background: red;

  }
</style>
