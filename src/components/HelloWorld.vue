<template>
  <div>
    {{msg}}
    <cube-button @click="showDiaog">show dialog</cube-button>
    <div v-if="show" class="initShow">
      <cube-loading :size="40"></cube-loading>
    </div>
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp">
        <ul>
          <li v-for="(item, index) in items.goods">
            <h1>{{item.name}}</h1>
            <ol>
              <li v-for="(val, key) in item.foods">
                  <div><b>{{val.name}} </b> <img :src="val.icon" alt=""> <span>价格：{{val.price}}</span> <span>配菜：{{val.description}}</span></div>
                  <img :src="val.image" alt="">
                  <p>{{val.info}}</p>
              </li>
            </ol>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  // cube-ui 模块的按需引入
  import {
    /* eslint-disable no-unused-vars */
    Style, // 必需
    Button,
    loading,
    scroll
  } from 'cube-ui'


export default {
  name: 'HelloWorld',
  components: {
    CubeButton: Button,
    CubeLoading: loading,
    CubeScroll: scroll
  },
  data () {
    return {
      msg: ' 引入cude-ui',
      show: true,
      items: this.json,
      options: {
        startY: 0
      }
    }
  },
  methods: {
    showDiaog() {
      var _this = this;
        this.$createDialog({
        type: 'confirm',
        title: '友情提示！',
        content: '确定设置高度吗？',
          confirmBtn: {
            text: '确定按钮',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消按钮',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            alert('点击确认按钮');
            this.$refs.scroll.scrollTo(
              0,
              -500,
              3000
            )
          },
          onCancel: () => {
            alert('点击取消按钮');
          }
      }).show()
    },
    onPullingDown() {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift(_foods[1])
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    onPullingUp() {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = _foods.slice(0, 5)
          this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },

  },
  mounted() {

    var _this = this;


    setTimeout(function () {
      _this.show = false
    },1000)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .initShow {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0,0,0,0.5);
    .cube-loading {
      width: 40px;
      height: 40px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    z-index: 10;
  }
  .scroll-list-wrap {
    position: fixed;
    top: 130px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    ul {
      width: 100%;
      margin-top: 100px;
      &>li {
        h1 {
          font-size: 30px;
          margin-bottom: 50px;
        }
        width: 100%;
        ol {
          width: 100%;
          li {
            width: 100%;
            div {
              width: 100%;
              margin-top: 50px;
              margin-bottom: 20px;
              b {
                font-size: 15px;
              }
              img {
                width: 20px;
                height: 20px;
              }
              span {
                margin-left: 20px;
              }
            }
            &>img {
              width: 100%;
              margin-bottom: 20px;
            }
            &>p {
              font-size: 18px;
            }
          }
        }
      }
    }
  }


</style>
