<template>
  <div class="goodthing">
    <header-index></header-index>

    <!--<good-thing></good-thing>-->
    <!--内容-->
    <router-view></router-view>
    <!--end-->
  </div>
</template>
<script>
  import HeaderIndex from '../../../components/min-template/headers';

  export default {
    name: 'goodthingIndex',
    components: {
      HeaderIndex,
    },
    methods: {

    }
  }
</script>
<style lang="less">
  @import "../../../assets/less/goodthing/goodthing.less";
</style>
