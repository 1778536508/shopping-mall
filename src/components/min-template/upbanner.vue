<template>
  <div class="home-upbanner">
    <cube-scroll
      ref="scroll"
      :data="items"
      direction="horizontal"
      class="horizontal-scroll-list-wrap">
      <ul class="list-wrapper">
        <li v-for="(item, index) in items" class="list-item">
          <img :src="item.image" alt="">
        </li>
      </ul>
    </cube-scroll>

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
            image: '../../../static/imgaes/GrouCopy.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/GrouCopy.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/GrouCopy.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/GrouCopy.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/GrouCopy.png'
          }
        ]
      }
    },

  }
</script>
<style lang="less">
  @import "../../assets/less/content/upbanner.less";
</style>
