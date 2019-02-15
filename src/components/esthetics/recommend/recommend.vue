<template>
  <div class="recommend-list">
    <ul class="recommend-list-pics">
      <li class="recommend-list-pics-item" v-for="(item, index) in uilts">
        <TextBanner1 v-if="item.type == 1" :item="item"></TextBanner1>
        <TextBanner2 v-if="item.type == 2" :items="item"></TextBanner2>
      </li>
    </ul>
  </div>
</template>
<script>
  import TextBanner1 from '../../min-template/text-banner1';
  import TextBanner2 from '../../min-template/text-banner2'
  export default {
    name: 'recommend',
    props: {
      uilts: ''
    },
    components: {
      TextBanner1,
      TextBanner2
    },
    data() {
      return {
        // uilts: [
        //   {
        //     type: 1,
        //     image: '../../../static/imgaes/GrouCopy.png',
        //     text: '我是标题，我若超出两行文字将显示省略号， 牛逼了'
        //   },
        //   {
        //     type: 2,
        //     image: '../../../static/imgaes/GroupCopy.png',
        //     title: '产品名称',
        //     text: '产品简介',
        //     present_price: '￥2899',
        //     original_price: '￥3299'
        //   },
        //   {
        //     type: 2,
        //     image: '../../../static/imgaes/GroupCopy.png',
        //     title: '产品名称',
        //     text: '产品简介',
        //     present_price: '￥2899',
        //     original_price: '￥3299'
        //   },
        //   {
        //     type: 1,
        //     image: '../../../static/imgaes/GrouCopy.png',
        //     text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
        //   },
        //   {
        //     type: 1,
        //     image: '../../../static/imgaes/GrouCopy.png',
        //     text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
        //   },
        //   {
        //     type: 2,
        //     image: '../../../static/imgaes/GroupCopy.png',
        //     title: '产品名称',
        //     text: '产品简介',
        //     present_price: '￥2899',
        //     original_price: '￥3299'
        //   },
        //   {
        //     type: 2,
        //     image: '../../../static/imgaes/GroupCopy.png',
        //     title: '产品名称',
        //     text: '产品简介',
        //     present_price: '￥2899',
        //     original_price: '￥3299'
        //   },
        //   {
        //     type: 1,
        //     image: '../../../static/imgaes/GrouCopy.png',
        //     text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
        //   },
        //   {
        //     type: 1,
        //     image: '../../../static/imgaes/GrouCopy.png',
        //     text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
        //   },
        //   {
        //     type: 2,
        //     image: '../../../static/imgaes/GroupCopy.png',
        //     title: '产品名称',
        //     text: '产品简介',
        //     present_price: '￥2899',
        //     original_price: '￥3299'
        //   },
        //   {
        //     type: 2,
        //     image: '../../../static/imgaes/GroupCopy.png',
        //     title: '产品名称',
        //     text: '产品简介',
        //     present_price: '￥2899',
        //     original_price: '￥3299'
        //   },
        //   {
        //     type: 1,
        //     image: '../../../static/imgaes/GrouCopy.png',
        //     text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
        //   },
        // ]
      }
    }
  }
</script>
<style lang="less">
  @import "../../../assets/less/content/recommend.less";
</style>
