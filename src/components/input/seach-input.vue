<template>
  <div id="seach-input">
      <input type="text" class="input" placeholder="请输入搜索内容">
  </div>
</template>

<script>
    export default {
        name: "seach-input"
    }
</script>

<style scoped>
#seach-input{
 position:fixed;
  width: 95%;
  height:50px;
  background:rgba(255,255,255,0);
  z-index: 2;
}
.input-content{
  width: 95%;
  margin:10px auto;

}
  .input{
    width: 100%;
    height: 30px;
    border-radius:30px;
    background-color:rgb(234,234,234);
    text-align: center;
    outline:none;
    line-height: 30px;
    border: 0px;
    color: rgb(165,165,165);
  }
</style>
