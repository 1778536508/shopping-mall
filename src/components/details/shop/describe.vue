<template>
  <div class="describe">
    <div class="content">
      <h1>空气层美棉提花四件套</h1>
      <p class="info">Type产品详情基本叙述语段产品详情基本叙述语段Type产品详情基本叙述语段产品语段产品详情基本叙述语段</p>
      <div class="num">
        <div class="group">
          <span>组合价</span>
        </div>
        <div class="selected">
          <span>精选</span>
        </div>
        <div class="price">
          <span>¥ 2340.00</span>
        </div>
        <div class="nprice">
          <span>¥ 2340.00</span>
        </div>
      </div>
    </div>
    <div class="option">
      <div class="option-item">
        <div class="name">
          <p>已选</p>
        </div>
        <div class="info">名称type1+名称type2+名称type2+名是</div>
        <div class="add">
          <i @click="showBox(1)"></i>
        </div>
      </div>
      <div class="option-item">
        <div class="name">
          <p>服务</p>
        </div>
        <div class="service">
          <span class="check">
            <i></i>
            <p>包邮</p>
          </span>
          <span class="check">
            <i></i>
            <p>免费上面组装</p>
          </span>
          <span class="check">
            <i></i>
            <p>现货</p>
          </span>
          <span class="check">
            <i></i>
            <p>到店自取</p>
          </span>
          <span class="no-check">
            <i></i>
            <p>供货商售后</p>
          </span>
          <span class="no-check">
            <i></i>
            <p>供货商售后</p>
          </span>
          <span class="check">
            <i></i>
            <p>到店自取</p>
          </span>
          <span class="no-check">
            <i></i>
            <p>供货商售后</p>
          </span>
          <span class="no-check">
            <i></i>
            <p>供货商售后</p>
          </span>
        </div>
        <div class="add">
          <i @click="showBox(4)"></i>
        </div>
      </div>
      <div class="option-item">
        <div class="name">
          <p>送至</p>
        </div>
        <div class="address">
          <i></i>
          <p>字段填写用户地址位置位置位置位字段填写用户地址位置位置位置位</p>
        </div>
        <div class="add">
          <i @click="showBox(3)"></i>
        </div>
      </div>
    </div>
    <groupBox v-if="code == 1" @onInit="initCode"></groupBox>
    <singleBox v-if="code == 2" @onInit="initCode"></singleBox>
    <deliveryBox v-if="code == 3" @onInit="initCode"></deliveryBox>
    <serviceBox v-if="code == 4" @onInit="initCode"></serviceBox>
  </div>
</template>

<script>
import groupBox from "./foot/group.vue";
import singleBox from "./foot/single.vue";
import deliveryBox from "./foot/delivery.vue";
import serviceBox from "./foot/service.vue";
export default {
  name: "silid",
  data() {
    return {
      code: 0,
    };
  },
  computed: {},
  components: {
    groupBox,
    singleBox,
    deliveryBox,
    serviceBox
  },
  created() {},
  mounted() {},
  methods: {
    showBox(index) {
        console.log("index --- >", index)
        this.code = index;
    },
    initCode(code) {
        console.log("code --- >", code);
        this.code = code;
    }
  }
};
</script>
<style lang="less">
@import "./../../../assets/less/details/shop/describe";
</style>
