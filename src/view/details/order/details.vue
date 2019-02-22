<template>
  <div class="main">
    <tab :title="title"></tab>
  </div>
</template>
<script>
import tab from './../../../components/details/order/top'
export default {
  name: "details",
  data() {
    return {
      title: "订单详情"
    }
  },
  created() {},
  components: {
    tab,
  }
};
</script>
<style>
  .main {
    margin-bottom: 52px;
    background-color: #F8F8F8
  }
</style>