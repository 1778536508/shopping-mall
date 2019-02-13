<template>
  <div class="home-upgrade">
    <list-title :title="content"></list-title>
    <div class="home-upgrade-banner">
      <p class="home-upgrade-banner-title">{{title}}</p>
      <img :src="upurl" alt="">
    </div>
    <up-banner :items="listData" :msgState="msgState"></up-banner>

  </div>
</template>
<script>
  import ListTitle from './list-title'
  import UpBanner from './upbanner'
  export default {
    name: 'upgrade',
    components: {
      ListTitle,
      UpBanner
    },
    data() {
      return {
        msgState: true,
        upurl: '../../../static/imgaes/Mask.png',
        title: '我是标题，此处可编辑',
        content: {
          name: '软件升级',
          icon: '../../../static/imgaes/Softupg.png'
        },
        listData: [
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/GroupCopy.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/GroupCopy.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/GroupCopy.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/GroupCopy.png'
          },
          {
            url: 'javascript:;',
            image: '../../../static/imgaes/GroupCopy.png'
          }
        ]
      }
    }
  }
</script>
<style lang="less">
 @import "../../assets/less/content/upgrade";
</style>
