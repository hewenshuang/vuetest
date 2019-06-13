<template>
  <div id="main">
    <div v-for="user in users">
      <div >
        <div class="username" @click="show(user)" >
          {{user.username}}
        </div>

          <div class="password" v-show="!user.show">
            {{user.password}}
            <img src="" alt="">
          </div>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "main1",
        props:{
            users:{
              type:Array,
              required:true
            }
        },
        methods:{
          show:function (user) {
            user.show=!user.show
          }
        }
    }
</script>

<style scoped>
  #main{
    flex: 8;
    /*background-color: lightblue;*/
    height: 600px;
  }
</style>
