<template>
  <div class="goodthing">
    <search-index></search-index>
    <!--<good-thing></good-thing>-->
    <!--内容-->
    <div class="goodthing-index">
      <ul class="goodthing-pics">
        <li class="goodthing-item">
          <silde-bar></silde-bar>
        </li>
        <li class="goodthing-item">
          <good-content></good-content>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import SearchIndex from '../../../components/min-template/search';
  import SildeBar from '../../../components/min-template/sildeBar';
  import GoodContent from '../../../components/goodthing/content';
  export default {
    name: 'goodthingIndex',
    components: {
      SearchIndex,
      SildeBar,
      GoodContent,
    }
  }
</script>
<style lang="less">
  @import "../../../assets/less/goodthing/goodthing.less";
</style>
