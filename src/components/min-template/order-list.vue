<template>
  <div class="order-scroll-list-wrap">
    <cube-scroll
      ref="scroll"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
      <div class="order-list">

        <div class="no-order">
          <i></i>
          <p>您还没有相关的订单</p>
          <span>可以去看看有哪些想买的</span>
        </div>


        <div class="order-recommend-like">
          <p class="order-recommend-like-title">
            <i></i>
            <span>你可能还喜欢</span>
          </p>
          <ul class="order-recommend-like-pics">
            <li class="order-recommend-like-item" v-for="(item, index) in listData" :key="index">
              <text-banner2 :items="item"></text-banner2>
            </li>
          </ul>
        </div>

      </div>
    </cube-scroll>
  </div>
</template>

<script>
  import TextBanner2 from './text-banner2';
  export default {
    name: "order-list",
    components: {
      TextBanner2
    },
    props: {
      orderList: ''
    },
    data() {
      return {
        listData: [
          {
            type: 2,
            image: '../../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          }
        ]
      }
    },
    methods: {
      // 下拉刷新
      onPullingDown() {

      },
      // 上拉加载
      onPullingUp() {

      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/min-template/order-list.less";
</style>
