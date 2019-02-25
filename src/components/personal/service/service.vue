<template>
    <div>
      <HeaderIndex
        :params="{
              back: false,
              searchs: false,
              title: $route.query.title,
              news: false
          }"
      ></HeaderIndex>
      <div class="news-scroll-list-wrap" id="news-scroll-list-wrap">
        <ul class="news-chat-pics" ref="scrollPics">
          <li v-for="(item, index) in newsData" :key="index" class="news-chat-pics-item" :class="{active: item.type == 2}">
            <div>
              <ul>
                <li>
                  <i><img :src="item.head_icon" alt=""></i>
                </li>
                <li>
                  <p>{{item.text}}</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="news-input">
        <ul class="news-input-pics">
          <li><i></i></li>
          <li><input type="text" class="news-input-dialogue" placeholder="对话输入框..." v-model="value"></li>
          <li @click="BtnSendOut"><p :class="{active: !value}">发送</p></li>
          <li><i></i></li>
        </ul>
      </div>
    </div>
</template>

<script>
  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "service",
    components: {
      HeaderIndex
    },
    data() {
      return {
        value: '',
        newsData: [
          {
            type: 1,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是美学共和的小M，请问有什么可以帮助到您？'
          },
          {
            type: 2,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是XXXXXXXXX'
          },
          {
            type: 1,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是美学共和的小M，请问有什么可以帮助到您？'
          },
          {
            type: 1,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是美学共和的小M，请问有什么可以帮助到您？'
          },
          {
            type: 2,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是XXXXXXXXX'
          },
          {
            type: 2,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是XXXXXXXXX'
          },
          {
            type: 1,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是美学共和的小M，请问有什么可以帮助到您？'
          },
          {
            type: 2,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是XXXXXXXXX'
          },
          {
            type: 1,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是美学共和的小M，请问有什么可以帮助到您？'
          },
          {
            type: 1,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是美学共和的小M，请问有什么可以帮助到您？'
          },
          {
            type: 2,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是XXXXXXXXX'
          },
          {
            type: 2,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: '您好，我是XXXXXXXXX111111111111'
          }
        ]
      }
    },
    methods: {
      BtnSendOut() {
        // console.log(this.options.startY);
        var _this = this;
        if (this.value) {
          this.newsData.push({
            type: 2,
            head_icon: '../../../static/imgaes/head_icon.png',
            text: this.value
          })
          this.value = '';
          setTimeout(function () {
            window.scrollTo(0, document.getElementById('news-scroll-list-wrap').scrollHeight);
          }, 500)
        } else {

        }


      }
    },
    mounted() {
      setTimeout(function () {
        window.scrollTo(0, document.getElementById('news-scroll-list-wrap').scrollHeight);
      },500)

    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/personal/service/service.less";
</style>
