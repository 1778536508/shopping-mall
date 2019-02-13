<template>
  <div class="moment-list">
    <list-title :title="content"></list-title>
    <ul>
      <li v-for="(item, index) in obj">
        <mom-list :content="item.content"></mom-list>
      </li>
    </ul>
  </div>
</template>
<script>
  import ListTitle from './list-title'
  import MomList from './mom-list'
  export default {
    name: 'moment',
    components: {
      ListTitle,
      MomList
    },
    data() {
      return {
        content: {
          name: '美在当下',
          icon: '../../../static/imgaes/dang.png'
        },
        obj: [
          {
            content: {
              url: '../../../static/imgaes/banner.png',
              title: '我是主标题',
              text: '我是副标题'
            }
          },
          {
            content: {
              url: '../../../static/imgaes/banner.png',
              title: '我是主标题',
              text: '我是副标题'
            }
          },
          {
            content: {
              url: '../../../static/imgaes/banner.png',
              title: '我是主标题',
              text: '我是副标题'
            }
          },
          {
            content: {
              url: '../../../static/imgaes/banner.png',
              title: '我是主标题',
              text: '我是副标题'
            }
          },
          {
            content: {
              url: '../../../static/imgaes/banner.png',
              title: '我是主标题',
              text: '我是副标题'
            }
          },
          {
            content: {
              url: '../../../static/imgaes/banner.png',
              title: '我是主标题',
              text: '我是副标题'
            }
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/content/moment.less";
</style>
