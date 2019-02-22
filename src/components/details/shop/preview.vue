<template>
  <div class="preview" @click="onHide">
    <div class="swiper-container preview-page" @click.stop>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <a href="javaScript:void(0)">
            <img v-lazy="item" alt>
          </a>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "slide",
  data() {
    return {
      showDots: false, // 是否显示轮播图菜单
      initIndex: 0, // 初始化索引
      imgs: [
        require("@/assets/imgaes/silid/silid1.png"),
        require("@/assets/imgaes/silid/silid2.png"),
        require("@/assets/imgaes/silid/silid3.png"),
        require("@/assets/imgaes/silid/silid1.png"),
        require("@/assets/imgaes/silid/silid2.png"),
        require("@/assets/imgaes/silid/silid3.png")
      ]
    };
  },
  props: {
    previewPage: Number,
  },
  created() {
  },
  mounted() {
    this.stop();
    const _this = this;
    var previewPage = new Swiper(".preview-page", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      spaceBetween: 10,
      slidesPerView: 1,
      // freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      initialSlide: _this.previewPage // 默认显示页
    });
  },
  methods: {
    onHide() {
      this.move();
      this.$emit("closeImage")
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
  }
};
</script>
<style lang="less">
@import "./../../../assets/less/details/shop/preview";
</style>
