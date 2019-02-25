<template>
  <div class="goodthing">

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  // import HeaderIndex from '@/components/min-template/headers';

  export default {
    name: 'goodthingIndex',
    components: {
      // HeaderIndex,
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style lang="less">
  @import "../../../assets/less/content/goodthing/index.less";
</style>
