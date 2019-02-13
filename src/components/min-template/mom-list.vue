<template>
  <div class="mom-list">
    <img :src="content.url" alt="">
    <p class="mom-title1">{{content.title}}</p>
    <span class="mom-title2">{{content.text}}</span>
    <div class="likeSee">
      <like></like>
      <see></see>
    </div>
  </div>
</template>
<script>
  import Like from './like';
  import See from './see'
  export default {
    name: 'momList',
    components: {
      Like,
      See
    },
    props: {
      content: {}
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/content/mom-list.less";
</style>
