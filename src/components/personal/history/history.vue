<template>
  <div>
    <HeaderIndex
      :params="{
              back: false,
              searchs: false,
              title: $route.query.title,
              news: false
          }"
    ></HeaderIndex><div class="history-scroll-list-wrap">
    <cube-scroll
      ref="scroll">
      <div class="history-pics">
        <ul>
          <li v-for="(item, index) in historyList" :key="index">
            <history-list :itemsList="item"></history-list>
          </li>
        </ul>

      </div>
    </cube-scroll>
    <div class="submitRelease">
      <a href="javascript:;">发布</a>
    </div>
  </div>

  </div>

</template>

<script>
  import HistoryList from '../../min-template/history-list';
  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "history",
    components: {
      HistoryList,
      HeaderIndex
    },
    data() {
      return {
        historyList: [
          {
            date: '1月24日',
            url: '../../../static/imgaes/squareCopy.png',
            title: '套装名称名称名称名称名称名称名称名称名称',
            txt: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
            price: '￥2,899',
          },
          {
            date: '1月24日',
            url: '../../../static/imgaes/squareCopy.png',
            title: '套装名称名称名称名称名称名称名称名称名称',
            txt: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
            price: '￥2,899',
          },
          {
            date: '1月24日',
            url: '../../../static/imgaes/squareCopy.png',
            title: '套装名称名称名称名称名称名称名称名称名称',
            txt: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
            price: '￥2,899',
          },
          {
            date: '1月24日',
            url: '../../../static/imgaes/squareCopy.png',
            title: '套装名称名称名称名称名称名称名称名称名称',
            txt: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
            price: '￥2,899',
          },
          {
            date: '1月24日',
            url: '../../../static/imgaes/squareCopy.png',
            title: '套装名称名称名称名称名称名称名称名称名称',
            txt: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
            price: '￥2,899',
          },
          {
            date: '1月24日',
            url: '../../../static/imgaes/squareCopy.png',
            title: '套装名称名称名称名称名称名称名称名称名称',
            txt: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
            price: '￥2,899',
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/personal/history/history.less";
</style>
