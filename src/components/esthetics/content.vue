<template>
  <div>
    <cube-tab-panels v-model="ViewContent.selectedLabelSlots">
      <cube-tab-panel label="首页">
        <home/>
      </cube-tab-panel>
      <cube-tab-panel label="推荐">
        <recommend/>
      </cube-tab-panel>
    </cube-tab-panels>
  </div>
</template>
<script>

  import Home from './home/home'  // 首页
  import Recommend from './recommend/recommend'   // 推荐
  export default {
    name: 'homeContent',
    components: {
      Home,
      Recommend
    },
    props: {
      ViewContent: ''
    }
  }
</script>
<style lang="less">

</style>
