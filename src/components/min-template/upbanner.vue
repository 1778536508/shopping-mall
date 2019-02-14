<template>
  <div class="home-upbanner">
    <cube-scroll
      v-if="msgState"
      ref="scroll"
      :data="items"
      :options="options"
      direction="horizontal"
      class="horizontal-scroll-list-wrap">
      <ul class="list-wrapper" v-if="items.length > 0">
        <li v-for="(item, index) in items" class="list-item">

          <text-banner :item="item"></text-banner>
          <!--更多-->
          <div class="banner-more">
            <div>
              <p>
                <span>更多</span>
                <i></i>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </cube-scroll>
    <div class="life-loading" v-if="!msgState">
      <cube-loading></cube-loading>
    </div>
  </div>
</template>
<script>
  import TextBanner from './text-banner1'
  export default {
    name: 'banner',
    props: {
      items: "",
      msgState: ""
    },
    watch: {
      items: function () {
        //每次切换  回到第一张
        this.$refs.scroll.scrollTo(0,0)
      }
    },
    components: {
      TextBanner
    },
    data() {
      return {
        msg: false,
        // items: [
        //   {
        //     url: 'javascript:;',
        //     image: '../../../static/imgaes/GrouCopy.png'
        //   },
        //   {
        //     url: 'javascript:;',
        //     image: '../../../static/imgaes/GrouCopy.png'
        //   },
        //   {
        //     url: 'javascript:;',
        //     image: '../../../static/imgaes/GrouCopy.png'
        //   },
        //   {
        //     url: 'javascript:;',
        //     image: '../../../static/imgaes/GrouCopy.png'
        //   },
        //   {
        //     url: 'javascript:;',
        //     image: '../../../static/imgaes/GrouCopy.png'
        //   }
        // ]
        options: {
          click: false
        }
      }
    },

  }
</script>
<style lang="less">
  @import "../../assets/less/content/upbanner.less";
</style>
