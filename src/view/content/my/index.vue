<template>
  <div>
    <transition name="myindex">
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
  .myindex-enter-active{
    transition: all .5s;
  }
  /*离开时的动画*/
  .myindex-leave-active {

  }
  /*执行动画的css样式*/
  .myindex-enter, .myindex-leave-to /* .myindex-leave-active below version 2.1.8 */ {
    opacity: 0;
    background: #fff;
  }
</style>
