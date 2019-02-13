<template>
  <div>
      <cube-slide ref="slide" :data="items" @change="changePage" :auto-play="msg">
        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url" class="cube-slide-item-img">
            <img :src="item.image" >
          </a>
        </cube-slide-item>
      </cube-slide>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    data() {
      return {
        msg: false,
        items: [
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/Carousel.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/Carousel.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/Carousel.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/Carousel.png'
          }
        ]
      }
    },
    methods: {
      changePage(current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickHandler(item, index) {
        console.log(item, index)
      }
    }
  }
</script>
<style lang="less">
    @import "../../assets/less/content/banner.less";
</style>
