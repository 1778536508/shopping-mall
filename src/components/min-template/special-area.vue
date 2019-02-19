<template>
    <div class="special-area-box">
      <i>
        <img :src="items.icon" alt=""/>
      </i>
      <p>{{items.name}}</p>
    </div>
</template>

<script>
  export default {
    name: "special-area",
    props: {
      items: ''
    },
    data() {
      return {

      }
    },
    methods: {
      // btnHref(id) {
      //   window.location.href = "#/index/good/list?id=" + id;
      // }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/min-template/special-area.less";
</style>
