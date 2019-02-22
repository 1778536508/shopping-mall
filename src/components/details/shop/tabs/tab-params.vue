<template>
  <div class="tab-params">
    <img v-lazy="topImg" alt>
    <ul class="content">
      <li>
        <div class="title">品牌名称</div>
        <div class="text">{{data.item.brandName}}</div>
      </li>
      <li>
        <div class="title">产品编码</div>
        <div class="text">{{data.item.productCode}}</div>
      </li>
      <li>
        <div class="title">产品品类</div>
        <div class="text">{{data.item.productType}}</div>
      </li>
      <li>
        <div class="title">产品名称</div>
        <div class="text">{{data.item.productName}}</div>
      </li>
      <li>
        <div class="title">名称语段</div>
        <div class="text">{{data.item.extendedField1}}</div>
      </li>
      <li>
        <div class="title">名称语段</div>
        <div class="text">{{data.item.extendedField2}}</div>
      </li>
      <li>
        <div class="title">名称语段</div>
        <div class="text">{{data.item.extendedField3}}</div>
      </li>
      <li>
        <div class="title">名称语段</div>
        <div class="text">{{data.item.extendedField4}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
var image1 = require("@/assets/imgaes/top.png");
export default {
  name: "silid",
  data() {
    return {
      topImg: image1,
    };
  },
  props: {
    data: Object
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "./../../../../assets/less/details/shop/tab-params.less";
</style>
