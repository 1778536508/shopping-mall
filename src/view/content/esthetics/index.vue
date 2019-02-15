<template>
  <div class="esthetics-index">
    <!--头部-->
    <home-header :ViewHeader="ViewData" @btnTable="btnTable"/>
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp">
        <!--内容-->
        <div v-if="ViewData.selectedLabelSlots == '首页'">
          <home @BtnLocationMsg="BtnLocationUp" :momentData="momentData"/>
        </div>
        <div v-if="ViewData.selectedLabelSlots == '推荐'">
          <recommend :uilts="uilts"/>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
  // 美学模块
  import HomeHeader from '../../../components/esthetics/header'     // 头部
  import Home from '../../../components/esthetics/home/home'  // 首页
  import Recommend from '../../../components/esthetics/recommend/recommend'   // 推荐
  export default {
    name: '',
    components: {
      HomeHeader,
      Home,
      Recommend
    },
    watch: {
      'ViewData.selectedLabelSlots': function () {
          this.isRefresh();
      }
    },
    data() {
      return {
        ViewData: {
          selectedLabelSlots: '首页',
          tabs: [{
            label: '首页',
            icon: './../../../static/imgaes/home1-1.png',
            href: '/index/esthetics/home'
          }, {
            label: '推荐',
            icon: './../../../static/imgaes/find1-1.png',
            href: '/index/esthetics/recommend'
          }]
        },
        options: {
          scrollbar: {
            fade: true
          },
          pullDownRefresh: {
            threshold: 90,
            stop: 50,
            txt: '刷新成功'
          },
          pullUpLoad: {
            threshold: 0,
            txt: {
              more: '加载更多',
              noMore: '数据加载完毕'
            }
          },
          click: false
        },
        // 美在当下
        momentData: [
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
        ],
        // 推荐数据
        uilts: [
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png',
            text: '我是标题，我若超出两行文字将显示省略号， 牛逼了'
          },
          {
            type: 2,
            image: '../../../static/imgaes/GroupCopy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/GroupCopy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png',
            text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png',
            text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
          },
          {
            type: 2,
            image: '../../../static/imgaes/GroupCopy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/GroupCopy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png',
            text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png',
            text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
          },
          {
            type: 2,
            image: '../../../static/imgaes/GroupCopy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 2,
            image: '../../../static/imgaes/GroupCopy.png',
            title: '产品名称',
            text: '产品简介',
            present_price: '￥2899',
            original_price: '￥3299'
          },
          {
            type: 1,
            image: '../../../static/imgaes/GrouCopy.png',
            text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
          },
        ],
        num: 0,
      }

    },
    methods: {
      //切换上导航回调
      btnTable() {
        this.isRefresh();
      },
      //重置方法
      isRefresh() {
        var _this = this;
        this.$nextTick(() => {
          //重置内容高度
          _this.$refs.scroll.refresh();
          //重置滑动的高度
          _this.$refs.scroll.scrollTo(0,0);
        })
        _this.num = 0;
      },
      // 点击列表回调
      BtnLocationUp(id) {
          console.log(id);
          this.ViewData.selectedLabelSlots = '推荐';
      },
      //上拉加载
      onPullingDown() {
       console.log('下拉刷新');
       if (this.ViewData.selectedLabelSlots == '首页') {
         this.homeMethods(true);
       } else {
         this.recommendMethods(true);
       }


      },
      //下拉刷新
      onPullingUp() {
        console.log('上拉加载');
        if (this.ViewData.selectedLabelSlots == '首页') {
          this.homeMethods(false);
        } else {
          this.recommendMethods(false);
        }
      },
      // 推荐页加载数据
      recommendMethods(type) {
        var _this = this;
        setTimeout(function () {
          /**
           * @type
           *  true -- 下拉刷新
           *  false -- 上拉加载
           */
          if (type) {
            _this.uilts = [
              {
                type: 1,
                image: '../../../static/imgaes/GrouCopy.png',
                text: '我是标题，我若超出两行文字将显示省略号， 牛逼了'
              },
              {
                type: 2,
                image: '../../../static/imgaes/GroupCopy.png',
                title: '产品名称',
                text: '产品简介',
                present_price: '￥2899',
                original_price: '￥3299'
              },
              {
                type: 2,
                image: '../../../static/imgaes/GroupCopy.png',
                title: '产品名称',
                text: '产品简介',
                present_price: '￥2899',
                original_price: '￥3299'
              },
              {
                type: 1,
                image: '../../../static/imgaes/GrouCopy.png',
                text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
              },
              {
                type: 1,
                image: '../../../static/imgaes/GrouCopy.png',
                text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
              },
              {
                type: 2,
                image: '../../../static/imgaes/GroupCopy.png',
                title: '产品名称',
                text: '产品简介',
                present_price: '￥2899',
                original_price: '￥3299'
              },
            ];
            _this.num = 0;
          } else {

            _this.num++;
            console.log(_this.num);
            if (_this.num < 3) {
              for(var i = 0; i < 1; i++) {
                _this.uilts.push(
                  {
                    type: 1,
                    image: '../../../static/imgaes/GrouCopy.png',
                    text: '我是标题，我若超出两行文字将显示省略号， 牛逼了'
                  },
                  {
                    type: 2,
                    image: '../../../static/imgaes/GroupCopy.png',
                    title: '产品名称',
                    text: '产品简介',
                    present_price: '￥2899',
                    original_price: '￥3299'
                  },
                  {
                    type: 2,
                    image: '../../../static/imgaes/GroupCopy.png',
                    title: '产品名称',
                    text: '产品简介',
                    present_price: '￥2899',
                    original_price: '￥3299'
                  },
                  {
                    type: 1,
                    image: '../../../static/imgaes/GrouCopy.png',
                    text: '我是标题，，我若超出两行文字将显示省略号， 牛逼了'
                  },
                )
              }
            } else {
              _this.$refs.scroll.forceUpdate();
            }
          }

          setTimeout(function () {
            _this.$refs.scroll.forceUpdate();    // 结束下拉动画
            setTimeout(function () {
              _this.$refs.scroll.refresh();
            },1000)
          },500)
        },1000)
      },
      // 首页加载数据
      homeMethods(type) {
        var _this = this;
        setTimeout(function () {
          /**
           * @type
           *  true -- 下拉刷新
           *  false -- 上拉加载
           */
          if (type) {
            _this.momentData = [
              {
                content: {
                  url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550205810540&di=c7c8fd2de5e712ceebc70b20eaada78b&imgtype=0&src=http%3A%2F%2Fcdnimg.fzpig.com%2Fforum%2F201405%2F26%2F061549d6buu8mnrxnjtz4q.jpg',
                  title: '我是主标题1',
                  text: '我是副标题1'
                }
              },
              {
                content: {
                  url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550205810540&di=c7c8fd2de5e712ceebc70b20eaada78b&imgtype=0&src=http%3A%2F%2Fcdnimg.fzpig.com%2Fforum%2F201405%2F26%2F061549d6buu8mnrxnjtz4q.jpg',
                  title: '我是主标题1',
                  text: '我是副标题1'
                }
              },
              {
                content: {
                  url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550205810540&di=c7c8fd2de5e712ceebc70b20eaada78b&imgtype=0&src=http%3A%2F%2Fcdnimg.fzpig.com%2Fforum%2F201405%2F26%2F061549d6buu8mnrxnjtz4q.jpg',
                  title: '我是主标题1',
                  text: '我是副标题1'
                }
              },
              {
                content: {
                  url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550205810540&di=c7c8fd2de5e712ceebc70b20eaada78b&imgtype=0&src=http%3A%2F%2Fcdnimg.fzpig.com%2Fforum%2F201405%2F26%2F061549d6buu8mnrxnjtz4q.jpg',
                  title: '我是主标题1',
                  text: '我是副标题1'
                }
              },
              {
                content: {
                  url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550205810540&di=c7c8fd2de5e712ceebc70b20eaada78b&imgtype=0&src=http%3A%2F%2Fcdnimg.fzpig.com%2Fforum%2F201405%2F26%2F061549d6buu8mnrxnjtz4q.jpg',
                  title: '我是主标题1',
                  text: '我是副标题1'
                }
              }
            ]
            _this.num = 0;
          } else {

            _this.num++;
            console.log(_this.num);
            if (_this.num < 3) {
              for(var i = 0; i < 5; i++) {
                _this.momentData.push(
                  {
                    content: {
                      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550205810540&di=c7c8fd2de5e712ceebc70b20eaada78b&imgtype=0&src=http%3A%2F%2Fcdnimg.fzpig.com%2Fforum%2F201405%2F26%2F061549d6buu8mnrxnjtz4q.jpg',
                      title: '我是主标题1',
                      text: '我是副标题1'
                    }
                  }
                )
              }
            } else {
              _this.$refs.scroll.forceUpdate();
            }
          }

          setTimeout(function () {
            _this.$refs.scroll.forceUpdate();    // 结束下拉动画
            setTimeout(function () {
              _this.$refs.scroll.refresh();
            },1000)
          },500)
        },1000)
      }

    },
    mounted() {
      var _this = this;

      setTimeout(function () {
        _this.isRefresh();
      }, 200)

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
