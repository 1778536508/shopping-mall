<template>
    <div>
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
  import TextBanner2 from '../../min-template/text-banner2';
    export default {
        name: "list",
      components: {
        TextBanner2
      },
      data() {
          return {
            params: window.location.href.split('?id=')[1].split('&name=')[0],
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
          // 此处交互   params 当前分类的参数
          console.log('参数params:' + this.params);
      }
    }
</script>

<style lang="less">
  @import "../../../assets/less/goodthing/list.less";
</style>
