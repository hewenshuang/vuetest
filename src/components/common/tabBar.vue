<template>
    <div class="tabBar">
        <div class="tabBarItem" v-for="item in lists">
          <div class="barItemBox" @click="changeTab(item)">
            <div class="barIcon" >
              <img :src='item.showIcom'>
            </div>
            <div class="barText" >
              {{item.text}}
            </div>
          </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "tabBar",
      methods:{
        changeTab:function (item) {
          console.log(a)
          console.log(b)
          this.lists.forEach(function (list) {
            list.showIcom=list.iconPath
          });
          item.showIcom=item.selectedIconPath
        }
      },
      data(){
          return {lists:[
              {
                "pagePath": "pages/posts/post",
                "text": "阅读",
                 showIcom: require("../../../static/tab/yuedu_hl.png"),
                "iconPath": require("../../../static/tab/yuedu.png"),
                "selectedIconPath":require("../../../static/tab/yuedu_hl.png")
              },
              {
                "pagePath": "pages/videoList/videoList",
                "text": "视频",
                 showIcom:require( "../../../static/tab/dianying.png"),
                "iconPath":require( "../../../static/tab/dianying.png"),
                "selectedIconPath": require("../../../static/tab/dianying_hl.png")
              },
              {
                "pagePath": "pages/collectPeople/collectPeople",
                "text": "添加视频",
                showIcom:require("../../../static/tab/ciwei.png"),
                "iconPath": require("../../../static/tab/ciwei.png"),
                "selectedIconPath":  require("../../../static/tab/ciwei_hl.png")
              },
              {
                "pagePath": "pages/my/my",
                "iconPath": require("../../../static/tab/my-off.png"),
                showIcom:require("../../../static/tab/my-off.png"),
                "selectedIconPath":  require("../../../static/tab/my-on.png"),
                "text": "我的"
              }
            ]}
      }
    }
</script>

<style scoped>
  .tabBar{
    display: flex;
    width: 100%;
    height: 10%;
    /*background: #2c3e50;*/
    position: fixed;
    bottom: 0;
  }
  .tabBarItem{
    flex:1;
  }
  .barIcon{
    height: 25px;
    text-align: center;
  }
  .barIcon>img{
    height: 100%;
    margin:auto;
  }
</style>
