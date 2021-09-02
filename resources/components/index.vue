<template>
  <div>
    <!-- navigation - pages?? how to be handled on basic website -->
    <bar-top />
    <div id="router-holder">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      BarTop: () => import("./navigation/topBanner.vue"),
    },
  };
</script>

<style lang="scss" scoped>
</style>