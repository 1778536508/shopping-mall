<template>
    <div>
      <div class="personal-box">
        <transition name="personal">
          <router-view/>
        </transition>
      </div>
    </div>
</template>

<script>
  export default {
    name: "index",
  }
</script>

<style lang="less">
  /*进入时的动画*/
  .personal-enter-active{
    transition: all .5s;
  }
  /*离开时的动画*/
  .personal-leave-active {

  }
  /*执行动画的css样式*/
  .personal-enter, .personal-leave-to /* .index-leave-active below version 2.1.8 */ {
    opacity: 0;
    background: #fff;
  }
</style>
