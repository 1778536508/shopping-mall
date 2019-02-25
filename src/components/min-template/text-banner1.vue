<template>
  <div class="list-item-content">
    <img :src="item.image" alt="">
    <div class="upbanner-operation">
      <div class="upbanner-operation-title">
        <p>{{item.text}}</p>
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
  @import "../../assets/less/min-template/text-banner1.less";
</style>
