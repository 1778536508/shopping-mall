<template>
  <div class="icon-see">
    <span :class="{active: isActive}" @click="btnActive"></span>
    <span>{{num}}</span>
  </div>
</template>
<script>
  export default {
    name: 'see',
    data() {
      return {
        isActive: false,
        num: 0
      }
    },
    methods: {
      btnActive() {
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
  @import "../../assets/less/content/see";
</style>
