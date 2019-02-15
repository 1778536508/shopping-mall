<template>
  <div class="icon-like" >
    <span :class="{active: isActive}" @click="btnActive"></span>
    <span>{{num}}</span>
  </div>
</template>
<script>
  export default {
    name: 'like',
    data() {
      return {
        isActive: false,
        num: 0
      }
    },
    methods: {
      btnActive(event) {
        alert(this.isActive)
        console.log(event.target)
        this.isActive = !this.isActive;

        if(this.isActive) {
          this.num = this.num+1
        } else {
          if(this.num != 0) {
            this.num = this.num-1
          }
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/content/like";
</style>
