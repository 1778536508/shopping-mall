<template>
  <div class="home-upgrade-text" :class="{active: !title.state}">
    <p>{{title.name}}</p>
    <i><img :src="title.icon" alt=""></i>
  </div>
</template>
<script>
  export default {
    name: 'titlename',
    props: {
      title: {}
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/content/list-title.less";
</style>
