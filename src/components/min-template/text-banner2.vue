<template>
  <div class="text-banner2">
    <div class="text-banner2-img">
      <img :src="items.image" alt=""/>
      <div class="text-banner2-brand">
        <span>精选品牌</span>
        <span>精选品牌</span>
      </div>
    </div>
    <div class="text-banner2-text">
      <p>{{items.title}}</p>
      <p>{{items.text}}</p>
      <p>
        <span>{{items.present_price}}</span>
        <span>{{items.original_price}}</span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'text-banner2',
    props: {
      items: ""
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/min-template/text-banner2.less";
</style>
