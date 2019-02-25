<template>
  <div>
    <transition name="index">
      <router-view/>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'index'
  }
</script>
<style>
  /*进入时的动画*/
  .index-enter-active{
    transition: all .5s;
  }
  /*离开时的动画*/
  .index-leave-active {

  }
  /*执行动画的css样式*/
  .index-enter, .index-leave-to /* .index-leave-active below version 2.1.8 */ {
    opacity: 0;
    background: #fff;
  }
  .cube-dialog-main {
    border-radius: 20px;
  }
</style>
