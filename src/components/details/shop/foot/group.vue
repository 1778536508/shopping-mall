<template>
  <div v-show="show" class="group-box">
    <div class="mask" @click="onHide"></div>
    <div class="operation">
      <div class="title">
        <h1>Type套装名称</h1>
        <p>ype单品详细描述字段-type单品详细描述字段ype单品详细描述字段-type单品详细描述字</p>
      </div>
      <div class="form-box">
        <div class="form">
          <h3>套装规格 Specification</h3>
          <input type="text" placeholder="Type参数">
          <input type="text" placeholder="Type参数">
          <input type="text" placeholder="Type参数">
        </div>
      </div>
      <div class="num-box">
        <div class="num">
          <h3>选购数量 Quantity</h3>
          <div class="num-change">
            <button>-</button>
            <input type="text" value="3">
            <button>+</button>
            <span class="company">件/ piece</span>
          </div>
        </div>
      </div>
      <div class="button-box">
        <div class="button-all">
          <button>加入购物车</button>
          <button>直接购买</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.stop();
  },
  methods: {
    onHide() {
      this.show = false;
      this.move();
      this.$emit("onInit", 0);
    },
    // 禁用滚动条
    stop() {
      let mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    // 取消滑动限制
    move() {
      let mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    }
  }
};
</script>
<style lang="less">
@import "./../../../../assets/less/details/shop/group";
</style>
