<template>
    <div id="testVuex" v-on:click="con">
      {{this.$store.state.count}}
    </div>
</template>

<script>
  import store from "@/vuex/store"
    export default {
        name: "testVuex",
      methods:{
        con(){

        }
      },
      data(){
          return {}
      },
      store
    }
</script>

<style scoped>

</style>
