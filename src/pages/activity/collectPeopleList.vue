<template>
  <div id="collectPeopleList">
    <testState></testState>
  </div>
</template>

<script>
  import testVuex from "../../components/test/vuex/testVuex"
  import testState from "@/components/test/vuex/testState"
    export default {
        name: "collectPeopleList",
      components:{testState}
    }
</script>

<style scoped>

</style>
