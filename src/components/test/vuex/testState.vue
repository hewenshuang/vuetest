<template>
  <div>{{ count }}</div>
</template>

<script>
  import store from "@/vuex/store"
    export default {
        name: "testState",
      computed: {
        count () {
          return store.state.count
        }
      }
    }
</script>

<style scoped>

</style>
