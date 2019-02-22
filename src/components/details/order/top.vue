<template>
  <div class="top-title">
      <p>{{title}}</p>
  </div>
</template>

<script>
// 测试图片 模拟线上图片
export default {
  name: "silid",
  data() {
    return { };
  },
  props: {
      title: String
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
@import "./../../../assets/less/details/order/top";
</style>
