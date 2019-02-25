<template>
  <div>
    <!--banner-->
    <home-banner></home-banner>
    <!--list-->
    <home-list></home-list>
    <!--软件升级-->
    <div class="home-upgrade">
      <list-title :title="upgrade.title1"></list-title>
      <div class="home-upgrade-banner">
        <p class="home-upgrade-banner-title">{{upgrade.title2.name}}</p>
        <img :src="upgrade.title2.image" alt="">
      </div>

      <!--<up-banner :items="upgrade.listData" :msgState="upgrade.msgState"></up-banner>-->
      <div class="home-upbanner">
        <cube-scroll
          v-if="upgrade.msgState"
          ref="scroll1"
          :data="upgrade.listData"
          :options="upgrade.options"
          direction="horizontal"
          class="horizontal-scroll-list-wrap">
          <ul class="list-wrapper" v-if="upgrade.listData.length > 0">
            <li v-for="(item, index) in upgrade.listData" class="list-item">
              <text-banner1 :item="item"></text-banner1>
              <!--更多-->
              <div class="banner-more" @click="BtnLocation(item.id)">
                <div>
                  <p>
                    <span>更多</span>
                    <i></i>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll>
        <!--<div class="life-loading" v-if="!msgState">-->
          <!--<cube-loading></cube-loading>-->
        <!--</div>-->
      </div>

    </div>
    <!--品质生活-->
    <div>
      <list-title :title="qualityLife.title"></list-title>
      <div class="quality-life">
        <ul>
          <li :class="{active: qualityLife.isActive}" @click="btntemplate('Beau')">
            <div class="list-img">
              <img src="../../../../static/imgaes/Shape.png" alt="">
            </div>
            <div class="list-text">
              <a href="javascript:;">乐享起居</a>
              <span>Enioy living</span>
            </div>
          </li>
          <li :class="{active: !qualityLife.isActive}" @click="btntemplate('Happy')">
            <div class="list-img">
              <img src="../../../../static/imgaes/Shapo.png" alt="">
            </div>
            <div class="list-text">
              <a href="javascript:;">美学精选</a>
              <span>High qualite life</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="home-upbanner">
        <cube-scroll
          v-if="qualityLife.msgState"
          ref="scroll2"
          :data="qualityLife.listData"
          :options="qualityLife.options"
          direction="horizontal"
          class="horizontal-scroll-list-wrap">
          <ul class="list-wrapper" v-if="qualityLife.content.length > 0">
            <li v-for="(item, index) in qualityLife.content" class="list-item">

              <text-banner1 :item="item"></text-banner1>
              <!--更多-->
              <div class="banner-more" @click="BtnLocation(item.id)">
                <div>
                  <p>
                    <span>更多</span>
                    <i></i>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll>
        <div class="life-loading" v-if="!qualityLife.msgState">
        <cube-loading></cube-loading>
        </div>
      </div>


      <!--<up-banner :items="qualityLife.content" :msgState="qualityLife.msgState"></up-banner>-->
    </div>
    <!--美在当下-->
    <div class="moment-list">
      <list-title :title="moment.title"></list-title>
      <ul>
        <li v-for="(item, index) in momentData">
          <mom-list :content="item.content"></mom-list>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import HomeBanner from '../../min-template/banner';
  import HomeList from '../../min-template/homelist';
  import TextBanner1 from '../../min-template/text-banner1'
  import ListTitle from '../../min-template/list-title';
  import MomList from '../../min-template/mom-list'
  export default {
    name: 'home',
    props: {
      momentData: ""
    },
    components: {
      HomeBanner,
      HomeList,
      TextBanner1,
      ListTitle,
      MomList,
    },
    watch: {
      'qualityLife.content': function () {
        //每次切换  回到第一张
        this.$refs.scroll2.scrollTo(0,0)
      },
    },
    data() {
      return {
        //软件升级
        upgrade: {
          options: {
            click: false
          },
          msgState: true,
          title1: {
            state: true,
            name: '软件升级',
            icon: '../../../static/imgaes/Softupg.png'
          },
          title2: {
            name: '我是标题，此处可编辑',
            image: '../../../static/imgaes/Mask.png'
          },
          listData: [
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            }
          ],
        },
        //品质生活
        qualityLife: {
          isActive: true,      //美学精选
          msgState: true,
          content: [],
          options: {
            click: false
          },
          title: {
            state: true,
            name: '品质生活',
            icon: '../../../static/imgaes/pinuality.png'
          }
        },
        //美在当下
        moment: {
          title: {
            state: false,
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
    },
    methods: {
      btntemplate(str) {
        if (str == 'Beau') {
          //乐享起居
          this.qualityLife.isActive = true;
          this.lodingStime();
          this.qualityLife.content = [
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GrouCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GrouCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GrouCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GrouCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GrouCopy.png'
            }
          ]
        } else {
          //美学精选
          this.qualityLife.isActive = false;
          this.lodingStime();
          this.qualityLife.content = [
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            },
            {
              id: 102,
              url: 'javascript:;',
              text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
              image: '../../../static/imgaes/GroupCopy.png'
            }
          ]
        }
      },
      lodingStime() {
        var _this = this;
        _this.qualityLife.msgState = false
        setTimeout(function () {
          _this.qualityLife.msgState = true
        },1000)
      },
      BtnLocation(id) {
          this.$emit("BtnLocationMsg", id);
      }
    },
    mounted() {
      this.qualityLife.content = [
        {
          id: 102,
          url: 'javascript:;',
          text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
          image: '../../../static/imgaes/GrouCopy.png'
        },
        {
          id: 102,
          url: 'javascript:;',
          text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
          image: '../../../static/imgaes/GrouCopy.png'
        },
        {
          id: 102,
          url: 'javascript:;',
          text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
          image: '../../../static/imgaes/GrouCopy.png'
        },
        {
          id: 102,
          url: 'javascript:;',
          text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
          image: '../../../static/imgaes/GrouCopy.png'
        },
        {
          id: 102,
          url: 'javascript:;',
          text: '我是标题，我若超出两行文字将显示省略号， 牛逼了',
          image: '../../../static/imgaes/GrouCopy.png'
        }
      ]
    }
  }
</script>
<style lang="less">
  @import "../../../assets/less/esthetics/home/home.less";
</style>
