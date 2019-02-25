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
  /*进入时的动画*/
  .fade-enter-active{
    transition: all .5s;
  }
  /*离开时的动画*/
  .fade-leave-active {

  }
  /*执行动画的css样式*/
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    background: #fff;
  }
  .scroll-list-wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 52px;
    right: 0;
    margin: auto;
    /*background: red;*/
  }
  @import "../../../assets/less/content/goodthing/index.less";
</style>
