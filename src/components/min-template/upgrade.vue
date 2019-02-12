<template>
  <div class="home-upgrade">
    <div class="home-upgrade-text">
      <p>软件升级</p>
      <i></i>
    </div>
    <div class="home-upgrade-banner">
      <img :src="upurl" alt="">
    </div>
    <up-banner></up-banner>

  </div>
</template>
<script>
  import UpBanner from './upbanner'
  export default {
    name: '软件升级',
    components: {
      UpBanner
    },
    data() {
      return {
        upurl: '../../../static/imgaes/CombinedShape.png'
      }
    }
  }
</script>
<style lang="less">
 @import "../../assets/less/content/upgrade";
</style>
