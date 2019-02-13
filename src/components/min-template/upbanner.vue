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
          <img :src="item.image" alt="">
          <div class="upbanner-operation">
            <div class="upbanner-operation-title">
              <p>我是标题，，我若超出两行文字将显示省略号， 牛逼了</p>
            </div>
            <div>
              <up-like/>
              <up-see/>
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
  import UpLike from './like';
  import UpSee from './see'
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
      UpLike,
      UpSee
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
