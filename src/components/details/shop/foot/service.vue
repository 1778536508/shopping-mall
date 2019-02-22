<template>
  <div v-show="show" class="service-box">
    <div class="mask" @click="onHide"></div>
    <div class="operation">
      <div class="title">
        <h1>享受服务</h1>
      </div>
      <ul class="service-list">
        <li :class="{item: true, active: activeIndex == 0}" @click="onSelection(0)">
          <i class="check"></i>
          <div class="info">
            <p class="service-text">破损包退换</p>
            <div class="service-info">签收后72小时内发现商品破损问题，提供售后服务。商品商品破损问题，提供售后服务。破损问题，提供售后服务。</div>
          </div>
        </li>
        <li :class="{item: true, active: activeIndex == 0}" @click="onSelection(0)">
          <i class="check"></i>
          <div class="info">
            <p class="service-text">上门换新</p>
            <div class="service-info">签收15天内因商品性能故障换货，提供上门取件时换新服务。</div>
          </div>
        </li>
        <li :class="{item: true, active: activeIndex == 0}" @click="onSelection(0)">
          <i class="no-check"></i>
          <div class="info">
            <p class="service-text">供应商售后服务</p>
            <div class="service-info">签收后72小时内发现商品破损问题，提供售后服务。</div>
          </div>
        </li>
        <li :class="{item: true, active: activeIndex == 0}" @click="onSelection(0)">
          <i class="check"></i>
          <div class="info">
            <p class="service-text">测试服务名称</p>
            <div class="service-info">测试服务内容描述，测试服务内容描述，测试服务内容描述，测试服务内容描述，测试服务内容描述，测试服务内容描述，测试服务内容描述，测试服务内容描述，测试服务内容描述，测试服务内容描述，测试服务内容描述，</div>
          </div>
        </li>
      </ul>
      <div class="confirm-box">
        <button class="confirm" @click="onConfirm">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      activeIndex: -2
    };
  },
  mounted() {
    this.stop();
  },
  methods: {
    onHide(e) {
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
    },
    // 点击效果
    onSelection(index) {
      this.activeIndex = index;
    },
    onConfirm() {
      this.onHide();
    },
    onEdit() {
      console.log("编辑");
    }
  }
};
</script>
<style lang="less">
@import "./../../../../assets/less/details/shop/service";
</style>
