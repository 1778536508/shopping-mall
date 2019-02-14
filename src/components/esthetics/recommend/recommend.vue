<template>
  <div class="recommend-list">
    <ul class="recommend-list-pics">
      <li class="recommend-list-pics-item" v-for="(item, index) in uilts">
        <TextBanner1 v-if="item.type == 1" :item="item"></TextBanner1>
        <TextBanner2 v-if="item.type == 2"></TextBanner2>
      </li>
    </ul>
  </div>
</template>
<script>
  import TextBanner1 from '../../min-template/text-banner1';
  import TextBanner2 from '../../min-template/text-banner2'
  export default {
    name: 'recommend',
    components: {
      TextBanner1,
      TextBanner2
    },
    data() {
      return {
        uilts: [
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png'
          },
          {
            type: 2,
          },
          {
            type: 2,
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png'
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png'
          },
          {
            type: 2,
          },
          {
            type: 2,
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png'
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png'
          },
          {
            type: 2,
          },
          {
            type: 2,
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png'
          },
        ]
      }
    }
  }
</script>
<style lang="less">
  @import "../../../assets/less/content/recommend.less";
</style>
