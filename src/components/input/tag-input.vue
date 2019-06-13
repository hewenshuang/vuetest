<template>
    <div id="tag-input">
      <div class="input-content">
        <img src="static/icon/search-pic.png" >
        <input type="text" class="search-input" placeholder="请输入搜索内容">
        <button class="search-button">搜索</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tag-input"
    }
</script>

<style scoped>
#tag-input{
  position:fixed;
  width:100%;
  height:50px;
  background:gray;
  display:flex;
  flex-direction:column;
  top: 0;
  background:rgba(255,255,255,0);
  z-index: 2;
}
.input-content{
  background:white;
  display:flex;
  align-items:center;
  margin:auto;
  height:30px;
  width: 90%;
  border-radius:5px 5px;
}
.input-content input{
  border: 0px;
  height: 85%;
  outline:none;
  flex:10;
}
.input-content img{
  width: 21px;
}
.input-content button{
  border: 0px;
  background: skyblue;
  height: 100%;
  border-radius: 3px;
  flex:2;
}
</style>
