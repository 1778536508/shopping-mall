<template>
  <div class="home-list">
    <ul>
      <li v-for="(item, index) in list">
        <span></span>
        <a :href="item.url">{{item.name}}</a>
        <b></b>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'list',
    data() {
      return {
        list: [
          {
            url: 'javascript:;',
            name: '起居'
          },
          {
            url: 'javascript:;',
            name: '大V'
          },
          {
            url: 'javascript:;',
            name: '当下'
          },
          {
            url: 'javascript:;',
            name: '最in'
          }

        ]
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/min-template/homelist.less";
</style>
