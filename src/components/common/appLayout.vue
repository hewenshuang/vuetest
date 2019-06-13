<template>
    <div id="appLayout">
    <div class="tabShow">
      <Router-View></Router-View>
    </div>


      <div class="tabBar">
        <div class="tabBarItem" v-for="item in lists">
          <Router-link to="/container" v-bind:to="item.pagePath">
          <div class="barItemBox" @click="changeTab(item)">
            <div class="barIcon" >
              <img :src='item.showIcom'>
            </div>
            <div class="barText" >
              {{item.text}}
            </div>
          </div>
          </Router-link>
        </div>
      </div>
      </div>
</template>

<script>
  // import tabBar from '@/components/common/tabBar';
  // import container from '@/components/common/container'
  import postList from '@/pages/activity/postList';
  import videoList from '@/pages/activity/videoList';
  import collectPeopleList from '@/pages/activity/collectPeopleList';
  import my from '@/pages/activity/my';

  import Vue from 'vue'
  import Router from 'vue-router'
  Vue.use(Router)

  var routes=[
    {path:"/",component:postList},//默认页
    {path:"/postList",component:postList},
    {path:"/videoList",component:videoList},
    {path:"/collectPeopleList",component:collectPeopleList},
    {path:"/my",component:my}
  ];
 var routerObj=  new Router({
    routes: routes,
    mode:"history" //去掉地址栏的#号
   ,linkActiveClass:"myactive"
  });

    export default {
        name: "appLayout",
      // components:{"tabBar":tabBar,"container":container}
      methods:{
        changeTab:function (item) {
          this.lists.forEach(function (list) {
            list.showIcom=list.iconPath
          });
          item.showIcom=item.selectedIconPath
        }
      },
      data(){
        return {lists:[
            {
              "pagePath": "/postList",
              "text": "阅读",
              showIcom: require("../../../static/tab/yuedu_hl.png"),
              "iconPath": require("../../../static/tab/yuedu.png"),
              "selectedIconPath":require("../../../static/tab/yuedu_hl.png")
            },
            {
              "pagePath": "/videoList",
              "text": "视频",
              showIcom:require( "../../../static/tab/dianying.png"),
              "iconPath":require( "../../../static/tab/dianying.png"),
              "selectedIconPath": require("../../../static/tab/dianying_hl.png")
            },
            {
              "pagePath": "/collectPeopleList",
              "text": "添加视频",
              showIcom:require("../../../static/tab/ciwei.png"),
              "iconPath": require("../../../static/tab/ciwei.png"),
              "selectedIconPath":  require("../../../static/tab/ciwei_hl.png")
            },
            {
              "pagePath": "/my",
              "iconPath": require("../../../static/tab/my-off.png"),
              showIcom:require("../../../static/tab/my-off.png"),
              "selectedIconPath":  require("../../../static/tab/my-on.png"),
              "text": "我的"
            }
          ]}
      },
      router:routerObj
    }
</script>

<style scoped>
#appLayout{
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}
.tabShow{
  display: flex;
  width: 100%;
  height: 90%;
  /*background: #2c3e50;*/
  position: fixed;
  top: 0;
  overflow-y:auto;
}
/*底部选择开始*/
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
  /*路由选中样式*/
  a{
    text-decoration:none;
    color:#999999;
  }
  .myactive{

  }
  .myactive:visited{

  }
/*  底部选择结束*/
</style>
