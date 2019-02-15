<template>
  <div class="special-area">
    <div class="special-area-title">
      <p>推荐专区</p>
    </div>
    <div class="special-area-imgText">
      <ul>
        <li v-for="(item, index) in items">
          <i>
            <img :src="item.icon" alt=""/>
          </i>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "special-area",
    data() {
      return {
        items: [
          {
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
          {
            icon: '../../static/imgaes/Pa1-s-Copy.png',
            name: '生活套餐',
            _url: ''
          },
        ]
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/min-template/special-area.less";
</style>
