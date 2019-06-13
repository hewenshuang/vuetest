<template>
    <div id="slider">
      <ul class="imgBox" v-bind:style="{ left:'-'+(i*fullWidth)+'px'}" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
          <li  :style="{width:fullWidth+'px'}"><img src="static/img/C.png" alt="" class="img"></li>
          <li :style="{width:fullWidth+'px'}"><img src="static/img/java.jpg" alt="" class="img"></li>
          <li :style="{width:fullWidth+'px'}"><img src="static/img/html.jpg" alt="" class="img"></li>
          <li :style="{width:fullWidth+'px'}"><img src="static/img/php.jpg" alt="" class="img"></li>
          <li :style="{width:fullWidth+'px'}"><img src="static/img/net.jpg" alt="" class="img"></li>
          <li :style="{width:fullWidth+'px'}"><img src="static/img/python.png" alt="" class="img"></li>
      </ul>
<!--      <div class="btn btn_l" @click="goLeft">-->
<!--        <img src="static/img/SVG/hn_arrow_left.svg"/>-->
<!--      </div>-->
<!--      <div class="btn btn_r" @click="goRight">-->
<!--        <img src="static/img/SVG/hn_arrow_right.svg"/>-->
<!--      </div>-->

    </div>
</template>

<script>
    export default {
        name: "slider",
      data(){
          return {
            i:0,
            imgNum:6,
            fullWidth:document.documentElement.clientWidth,
            startX:0,
            loading:false
          };
      },
      methods:{
        goLeft:function () {
          this.i--;
          if(this.i == this.imgNum) {
            this.i  = 1;
          }
          if(this.i == -1) {
            this.i  = this.imgNum - 2;
          }

        },
        goRight:function () {
          this.i++;
          if(this.i == this.imgNum) {

            this.i  = 1;
          }
          if(this.i == -1) {
            this.i  = this.imgNum - 2;
          }
        },
        touchMove(e){
          if (e.targetTouches[0].pageX < this.startX) { // 上拉
            if(this.loading) return;
            this.goRight();
            this.loading=true;
          }else{
            // this.judgeScrollBarToTheTop();

            if(this.loading) return;
            this.goLeft();
            this.loading=true;
          }
        },
        touchEnd(e){
          this.loading=false;
        },  touchStart (e) {
          this.startX = e.targetTouches[0].pageX;

        },
      }
    }
</script>

<style scoped>
#slider{
  height: 150px;
  position: relative;
  overflow: hidden;
  border: 0px;
}

#slider .imgBox {
  width: 3000px;
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  margin: 0;
  padding: 0;
  border: 0;
}
#slider .imgBox li {
  float: left;
  overflow: hidden;
  height: 150px;
  outline-style: none;
  margin: 0;
  padding: 0;
  border: 0;
}
#slider .imgBox .img {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}

#slider .btn {
  width: 32px;
  height: 32px;
  background-color: rgba(76,194,255,0.15);
  position: absolute;
  top: 80px;
}

#slider .btn_l {
  left: 15px;
}

#slider  .btn_r {
  right: 15px;
}
  /*过渡效果*/

  .imgBox{
    transition:1s ease all;
    -webkit-tansition:1s ease all;
    -moz-transition:1s ease all;
    -o-transition:1s ease all;
  }
</style>
