<template>
  <div v-show="show" class="delivery-box">1
    <div class="mask" @click="onHide"></div>
    <div class="operation">
      <div class="title">
        <h1>送货地址</h1>
      </div>
      <ul class="address-list">
        <li :class="{item: true, active: activeIndex == 0}" @click="onSelection(0)">
          <input type="radio" name="deliver" value="0" v-model="activeIndex">
          <div class="info">
            <p class="address-text">博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼</p>
            <span class="name">XXXX 先生</span>
            <span class="phone">18410180947</span>
          </div>
          <i class="edit" @click.stop="onEdit"></i>
        </li>
        <li :class="{item: true, active: activeIndex == 1}" @click="onSelection(1)">
          <input type="radio" name="deliver" value="1" v-model="activeIndex">
          <div class="info">
            <p class="address-text">博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼</p>
            <span class="name">XXXX 先生</span>
            <span class="phone">18410180947</span>
          </div>
          <i class="edit" @click.stop="onEdit"></i>
        </li>
        <li :class="{item: true, active: activeIndex == 2}" class="item" @click="onSelection(2)">
          <input type="radio" name="deliver" value="2" v-model="activeIndex">
          <div class="info">
            <p class="address-text">博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼</p>
            <span class="name">XXXX 先生</span>
            <span class="phone">18410180947</span>
          </div>
          <i class="edit" @click.stop="onEdit"></i>
        </li>
        <li :class="{item: true, active: activeIndex == 3}" @click="onSelection(3)">
          <input type="radio" name="deliver" value="3" v-model="activeIndex">
          <div class="info">
            <p class="address-text">博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼</p>
            <span class="name">XXXX 先生</span>
            <span class="phone">18410180947</span>
          </div>
          <i class="edit" @click.stop="onEdit"></i>
        </li>
        <li :class="{item: true, active: activeIndex == 4}" @click="onSelection(4)">
          <input type="radio" name="deliver" value="4" v-model="activeIndex">
          <div class="info">
            <p class="address-text">博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼</p>
            <span class="name">XXXX 先生</span>
            <span class="phone">18410180947</span>
          </div>
          <i class="edit"  @click.stop="onEdit"></i>
        </li>
        <li :class="{item: true, active: activeIndex == 5}" @click="onSelection(5)">
          <input type="radio" name="deliver" value="5" v-model="activeIndex">
          <div class="info">
            <p class="address-text">博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼</p>
            <span class="name">XXXX 先生</span>
            <span class="phone">18410180947</span>
          </div>
          <i class="edit"  @click.stop="onEdit"></i>
        </li>
        <li :class="{item: true, active: activeIndex == 6}" @click="onSelection(6)">
          <input type="radio" name="deliver" value="6" v-model="activeIndex">
          <div class="info">
            <p class="address-text">博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼博洛尼房美汇办公楼 1楼</p>
            <span class="name">XXXX 先生</span>
            <span class="phone">18410180947</span>
          </div>
          <i class="edit" @click.stop="onEdit"></i>
        </li>
      </ul>
      <div :class="{'inster-address': true, active: activeIndex == -1}" @click="onSelection(-1)">
        <p class="insert-text">新增地址</p>
        <i class="insert"></i>
      </div>
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
      activeIndex: -2,
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
        console.log("编辑")
    }
  }
};
</script>
<style lang="less">
@import "./../../../../assets/less/details/shop/delivery";
</style>
