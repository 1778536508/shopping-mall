<template>
  <div class="esthetics-index">
    <!--头部-->
    <home-header :ViewHeader="ViewData" @btnTable="btnTable"/>
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll">
        <!--内容-->
        <home-content :ViewContent="ViewData"/>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
  // 美学模块
  import HomeHeader from '../../../components/esthetics/header'     // 头部
  import HomeContent from '../../../components/esthetics/content'   // 内容
  export default {
    name: '',
    components: {
      HomeHeader,
      HomeContent,
    },
    data() {
      return {
        ViewData: {
          selectedLabelSlots: '首页',
          tabs: [{
            label: '首页',
            icon: './../../../static/imgaes/home1-1.png',
            src: '/index'
          }, {
            label: '推荐',
            icon: './../../../static/imgaes/find1-1.png',
            src: '/index/find'
          }]
        }
      }
    },
    methods: {
      btnTable() {
        this.isRefresh();
      },
      isRefresh() {
        var _this = this;
        setTimeout(function () {
          _this.$refs.scroll.refresh();
          _this.$refs.scroll.scrollTo(0,0);
        },100)
      }
    },
    mounted() {
      this.isRefresh();

      // console.log(this.$refs.scroll.refresh)
    },
  }
</script>
<style lang="less" scoped>
  .esthetics-index {
    width: 100%;
    height: 100%;
    .scroll-list-wrap {
      position: fixed;
      top: 39px;
      left: 0;
      bottom: 52px;
      right: 0;
      margin: auto;
    }
  }
</style>
