<template>
  <div class="boutique">
    <div class="boutique-item">
      <h3>精选推荐</h3>
      <div class="swiper-container gallery-boutique">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in boutiques" :key="index">
            <a href="javaScript:void(0)">
              <img v-lazy="item.image" alt>
            </a>
            <p class="name">{{item.name}}</p>
            <p class="info">{{item.info}}</p>
            <span class="price">¥ {{item.price}}</span>
            <span class="price">¥ {{item.noPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 测试图片 模拟线上图片
var mask1 = require("@/assets/imgaes/silid/mask1.png");
var mask2 = require("@/assets/imgaes/silid/mask2.png");
var mask3 = require("@/assets/imgaes/silid/mask3.png");
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "silid",
  data() {
    return {
      boutiques: [
        {
          url: "",
          image: mask1,
          name: "Triangle三角",
          info: "Type产品简介type,Raisdi喀斯柯达，啊速度OAO啥都uu舞曲",
          price: "2,899",
          noPrice: "2,899"
        },
        {
          url: "",
          image: mask2,
          name: "Triangle三角",
          info: "Type产品简介type,Raisdi喀斯柯达，啊速度OAO啥都uu舞曲",
          price: "2,899",
          noPrice: "2,899"
        },
        {
          url: "",
          image: mask3,
          name: "Triangle三角",
          info: "Type产品简介type,Raisdi喀斯柯达，啊速度OAO啥都uu舞曲",
          price: "2,899",
          noPrice: "2,899"
        },
        {
          url: "",
          image: "mask2",
          name: "Triangle三角",
          info: "Type产品简介type,Raisdi喀斯柯达，啊速度OAO啥都uu舞曲",
          price: "2,899",
          noPrice: "2,899"
        }
      ]
    };
  },
  created() {},
  mounted() {
    var galleryTop = new Swiper(".gallery-boutique", {
      slidesPerView: 2.4,
      spaceBetween: 10,
      freeMode: true
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "./../../../assets/less/details/shop/boutique";
</style>
