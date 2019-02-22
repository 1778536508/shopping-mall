<template>
  <div class="main">
    <slide></slide>
    <describe></describe>
    <boutique></boutique>
    <tab></tab>
  </div>
</template>
<script>
import slide from './../../../components/details/shop/slide' // 轮播图
import describe from './../../../components/details/shop/describe'
import boutique from './../../../components/details/shop/boutique'
import tab from './../../../components/details/shop/tab'
export default {
  name: "details",
  data() {
    return {}
  },
  created() {},
  components: {
    slide,
    describe,
    boutique,
    tab
  }
};
</script>
<style>
  .main {
    margin-bottom: 52px;
    background-color: #F8F8F8
  }
</style>