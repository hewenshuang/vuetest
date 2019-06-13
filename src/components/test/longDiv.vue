<template>
    <div class="longDiv">
      <div v-for="user in userList">
        {{user.username}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "longDiv",
      props:{
        userList:{
          type:Array,
          required:true
        }
      },
    }
</script>

<style scoped>
.longDiv{
}
</style>
