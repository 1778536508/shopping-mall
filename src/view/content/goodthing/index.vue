<template>
  <div class="goodthing">
    <search-index></search-index>
    <!--<good-thing></good-thing>-->
    <!--内容-->
    <router-view></router-view>
    <!--end-->
  </div>
</template>
<script>
  import SearchIndex from '../../../components/min-template/search';

  export default {
    name: 'goodthingIndex',
    components: {
      SearchIndex,
    }
  }
</script>
<style lang="less">
  @import "../../../assets/less/goodthing/goodthing.less";
</style>
