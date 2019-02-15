<template>
  <div>
    <div class="content-scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :data="items">

        <div class="goodthing-banner">
          <Banner></Banner>
        </div>
        <div class="recommend-area">
          <special-area></special-area>
        </div>
        <div class="other-area">
          <special-area></special-area>
        </div>
        <div class="new-products">
          <div class="new-products-title">
            <p>新上单品</p>
          </div>
          <div class="new-products-content">
            <ul>
              <li v-for="(item, index) in listData">
                <TextBanner2 :items="item"></TextBanner2>
              </li>
            </ul>

          </div>
        </div>


      </cube-scroll>
    </div>
  </div>
</template>
<script>
  import Banner from '../min-template/banner';
  import SpecialArea from '../min-template/special-area';
  import TextBanner2 from '../min-template/text-banner2';
  export default {
    name: 'goodthing',
    components: {
      Banner,
      SpecialArea,
      TextBanner2,
    },
    data() {
      return {
        items: [],
        listData: [
          {
            type: 2,
            image: '../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/Pa1-s-Copy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          }
        ]
      }
    }

  }
</script>
<style lang="less">
  @import "../../assets/less/goodthing/content.less";
</style>
