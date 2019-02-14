<template>
  <div class="list-item-content">
    <img :src="item.image" alt="">
    <div class="upbanner-operation">
      <div class="upbanner-operation-title">
        <p>我是标题，，我若超出两行文字将显示省略号， 牛逼了</p>
      </div>
      <div>
        <up-like/>
        <up-see/>
      </div>
    </div>
  </div>
</template>
<script>
  import UpLike from './like';
  import UpSee from './see'
  export default {
    name: 'text-banner1',
    props: {
      item: ""
    },
    components: {
      UpLike,
      UpSee
    },
  }

</script>
<style lang="less">
  @import "../../assets/less/content/text-banner1.less";
</style>
