<template>
  <div>
    <!-- navigation - pages?? how to be handled on basic website -->

    <div id="router-holder">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    BarTop: () => import("./navigation/topBanner.vue"),
  };
</script>

<style lang="scss" scoped>
</style>