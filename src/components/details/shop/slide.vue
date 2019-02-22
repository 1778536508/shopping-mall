<template>
  <div class="slide">
    <div class="slide-top">
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
            <a href="javaScript:void(0)" @click="showImagePreview(index)">
              <img v-lazy="item" alt>
            </a>
          </div>
        </div>
        <div class="heart">
          <i class="icon-heart"></i>
        </div>
      </div>
      <i class="icon-return" @click="backOff"></i>
      <i class="icon-remind" @click="news">
        <div class="num">
          <p>12</p>
        </div>
      </i>
    </div>
    <div class="slide-list">
      <div class="swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
            <img v-lazy="item" alt>
          </div>
        </div>
      </div>
    </div>
    <!-- <preview v-if="isPreview" :previewPage="previewPage" @closeImage="closeImagePreview"></preview> -->
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import preview from './preview'
export default {
  name: "slide",
  data() {
    return {
      showDots: false, // 是否显示轮播图菜单
      initIndex: 0, // 初始化索引
      isPreview: false,
      previewPage: 0,
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
  created() {},
  components: {
    preview
  },
  mounted() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  },
  methods: {
    backOff() {
      console.log("后退");
    },

    news() {
      console.log("消息列表");
    },

    showImagePreview(index) {
      this.previewPage = index;
      this.isPreview = true;
    },

    closeImagePreview() {
      this.isPreview = false;
    }

  }
};
</script>
<style lang="less">
@import "./../../../assets/less/details/shop/slide";
</style>