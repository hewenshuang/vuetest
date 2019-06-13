<template>
    <div id="postList" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
      <seachInput></seachInput>
      <div class="sliderImg">
        <slider></slider>
      </div>

      <div v-for="usersList in users">
         <longDiv v-bind:userList="usersList"></longDiv>
      </div>

    </div>
</template>

<script>
  import tag_input from "@/components/input/tag-input";
  import slider from "@/components/showImg/slider";
  import longDiv from "@/components/test/longDiv";
  import seachInput from "../../components/input/seach-input";
  // Vue.http.options.root="http://localhost:8080/";//服务器的根路径名称，后面会自动拼接到ajax路径头中去
    export default {
        name: "postList",

      data(){
        return {
          startY: 0,
          loading:false,
          users:[]
      }},
      components:{seachInput, tag_input,slider,longDiv},
      methods:{
          //获取初十位置的滚动条位置
        touchStart (e) {
          this.startY = e.targetTouches[0].pageY;
        },
        //判断下拉还是上拉
        touchMove(e){
          if (e.targetTouches[0].pageY < this.startY) { // 上拉
            // console.log("上拉");
            // this.judgeScrollBarToTheEnd();
          }else{
            // this.judgeScrollBarToTheTop();
            // console.log("下拉")
          }
        },
        touchEnd(e){
            this.loading=false;
        },
        //判断是否底部
        judgeScrollBarToTheEnd () {
          //变量scrollTop是滚动条滚动时，距离顶部的距离
          var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
          //变量windowHeight是可视区的高度
          var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          //变量scrollHeight是滚动条的总高度
          var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          //滚动条到底部的条件
          if(scrollTop+windowHeight==scrollHeight){
            //写后台加载数据的函数
            if(this.loading) return;
            this.loading=true;
            this.getPost()
            console.log("到达底部");
          }
        },
        //是否顶部
        judgeScrollBarToTheTop () {
          //变量scrollTop是滚动条滚动时，距离顶部的距离
          var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
          //滚动条到底部的条件
          if(scrollTop==0){
            //写后台加载数据的函数
            if(this.loading) return;
            this.loading=true;
            console.log("到达顶部");
          }
        },
        //获取图文列表
        getPost(){
          var that=this
          let params = new URLSearchParams();
          params.append('page',2);
          this.axios({
            method: "post",//指定请求方式
            headers:{ 'Content-Type': 'application/x-www-form-urlencoded'},
            url: " http://localhost:8080/mybatisP/userList ",
            data:params,
          })
            .then(function(res){
              that.users.push(res.data);

              //接口成功返回结果执行
            })
            .catch(function(err){
              //请求失败或者接口返回失败
            })

        }
      }
    }
</script>

<style scoped>
  #postList{
    width: 100%;
    height: 90%;
    padding: 10px;
  }
  .sliderImg{
    top: 40px;
    position: relative;
  }
</style>
