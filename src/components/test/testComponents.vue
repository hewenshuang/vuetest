
<template>
  <div>
    <head1></head1>
    <div class="container">
      <left1></left1>
      <main1 v-bind:users="users"></main1>
    </div>
    <foot1></foot1>
  </div>
</template>

<script>
  import  foot from '@/components/test/foot'
  import  left from '@/components/test/left'
  import  head1 from '@/components/test/head'
  import  main1 from '@/components/test/main'
  /* eslint-disable no-new */

    export default {
      name: "testComponents",
      data(){
        return {users:[{username:'何文双',password:'与608',show:false}]}
      },
      components:{"head1":head1,"left1":left,"foot1":foot,"main1":main1}
    }
</script>

<style scoped>
.container{
  display: flex;
}
</style>
