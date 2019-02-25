<template>
    <div>
      <header-index
        :params="{
        back: false,
        searchs: false,
        title: $route.query.title,
        news: true
      }"></header-index>
      <div class="list-scroll-list-wrap">
        <cube-scroll
          ref="scroll"
          :data="listData">
            <ul class="goodthing-list-pics">
              <li v-for="(item, index) in listData" class="goodthing-list-pics-item" :key="index">
                <text-banner2 v-if="item" :items="item" ></text-banner2>
              </li>
            </ul>
        </cube-scroll>
      </div>

    </div>
</template>

<script>
  import HeaderIndex from '../../min-template/headers';
  import TextBanner2 from '../../min-template/text-banner2';
    export default {
      name: "list",
      beforeCreate() {
        // 动态改变路由meta值
      },
      components: {
        HeaderIndex,
        TextBanner2,
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
      mounted() {

      }
    }
</script>

<style lang="less">
  @import "../../../assets/less/goodthing/list/list.less";
</style>
