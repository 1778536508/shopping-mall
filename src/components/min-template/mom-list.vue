<template>
  <div class="mom-list">
    <img v-if="content" :src="content.url" alt="">
    <p v-if="content" class="mom-title1">{{content.title}}</p>
    <span v-if="content" class="mom-title2">{{content.text}}</span>
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
  @import "../../assets/less/min-template/mom-list.less";
</style>
