<template>
  <div>
    <list-title :title="title"></list-title>
    <div class="quality-life">
      <ul>
        <li :class="{active: isActive}" @click="btntemplate('Beau')">
          <div class="list-img">
            <img src="../../../static/imgaes/Shape.png" alt="">
          </div>
          <div class="list-text">
            <a href="javascript:;">乐享起居</a>
            <span>Enioy living</span>
          </div>
        </li>
        <li :class="{active: !isActive}" @click="btntemplate('Happy')">
          <div class="list-img">
            <img src="../../../static/imgaes/Shapo.png" alt="">
          </div>
          <div class="list-text">
            <a href="javascript:;">美学精选</a>
            <span>High qualite life</span>
          </div>
        </li>
      </ul>
    </div>

    <up-banner :items="content" :msgState="msgState"></up-banner>


  </div>
</template>
<script>
  import ListTitle from './list-title'
  import UpBanner from './upbanner'
  //HappyBanner
  export default {
    name: 'Qualitylife',
    components: {
      ListTitle,
      UpBanner
    },
    data() {
      return {
        isActive: false,      //美学精选
        msgState: true,
        content: [],
        title: {
          name: '品质生活',
          icon: '../../../static/imgaes/pinuality.png'
        }
      }
    },
    methods: {
      btntemplate(str) {
        if (str == 'Beau') {
          //乐享起居
          this.isActive = true;
          this.lodingStime();
          this.content = [
            {
              url: 'javascript:;',
              image: '../../../static/imgaes/GrouCopy.png'
            },
            {
              url: 'javascript:;',
              image: '../../../static/imgaes/GrouCopy.png'
            },
            {
              url: 'javascript:;',
              image: '../../../static/imgaes/GrouCopy.png'
            },
            {
              url: 'javascript:;',
              image: '../../../static/imgaes/GrouCopy.png'
            },
            {
              url: 'javascript:;',
              image: '../../../static/imgaes/GrouCopy.png'
            }
          ]
        } else {
          //美学精选
          this.isActive = false;
          this.lodingStime();
          this.content = [
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
      },
      lodingStime() {
        var _this = this;
        _this.msgState = false
        setTimeout(function () {
          _this.msgState = true
        },1000)
      }
    },
    mounted() {
      this.content = [
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
</script>
<style lang="less">
  @import "../../assets/less/content/quality-life.less";
  /*进入时的动画*/
  .fead-enter-active{
    transition: all .5s;
  }
  /*离开时的动画*/
  .fead-leave-active {

  }
  /*执行动画的css样式*/
  .fead-enter, .fead-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    color: #00F7DE;
    background: #fff;
    box-sizing: border-box;
    padding-left: 500px;
  }
</style>
