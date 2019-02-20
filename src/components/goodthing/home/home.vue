<template>
  <div>
    <div class="goodthing-index">
      <ul class="goodthing-pics">
        <li class="goodthing-item">
          <silde-bar></silde-bar>
        </li>
        <li class="goodthing-item">
          <div class="content-scroll-list-wrap">
            <cube-scroll
              ref="scroll"
              :data="items">

              <div class="goodthing-banner">
                <Banner></Banner>
              </div>
              <div class="recommend-area">

                <div class="special-area">
                  <div class="special-area-title">
                    <p>推荐专区</p>
                  </div>
                  <div class="special-area-imgText">
                    <ul>
                      <router-link
                        :to="{
                          path: '/index/good/list',
                          query: {
                            id: item.id,
                            name: item.name,
                            type: 1
                          }
                        }"
                        tag="li"
                        v-for="(item, index) in itemsData1" :key="index" @click="btnHref(item.id)">
                        <special-area :items="item"></special-area>
                      </router-link>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="other-area">
                <div class="special-area">
                  <div class="special-area-title">
                    <p>推荐专区</p>
                  </div>
                  <div class="special-area-imgText">
                    <ul>
                      <li v-for="(item, index) in itemsData2" :key="index">
                        <special-area :items="item"></special-area>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="new-products">
                <div class="new-products-title">
                  <p>新上单品</p>
                </div>
                <div class="new-products-content">
                  <ul>
                    <li v-for="(item, index) in listData" :key="index">
                      <TextBanner2 :items="item"></TextBanner2>
                    </li>
                  </ul>

                </div>
              </div>
            </cube-scroll>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import SildeBar from '../../min-template/sildeBar';
  import Banner from '../../min-template/banner';
  import SpecialArea from '../../min-template/special-area';
  import TextBanner2 from '../../min-template/text-banner2';
  export default {
    name: 'goodthing',
    components: {
      SildeBar,
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
        ],
        itemsData1: [
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐1',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐2',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐3',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐4',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐5',
            _url: ''
          },
        ],
        itemsData2: [
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            id: 1130,
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
        ]
      }
    },
    methods: {
      btnHref(id) {
        window.location.href = "#/index/good/list?id=" + id;
      }
    }

  }
</script>
<style lang="less">
  @import "../../../assets/less/goodthing/content.less";
</style>
