<template>
  <div class="grid-scroll-list-wrap">
    <cube-scroll
      ref="scroll"
      :data="isType == 1 ? releaseContent : LikeContent"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
        <div class="grid-list">
            <ul>
              <!--<cube-upload-->
                <!--v-if="isType == 1"-->
                <!--ref="upload"-->
                <!--v-model="uterUpload.files"-->
                <!--:action="uterUpload.action"-->
                <!--@files-added="addedHandler"-->
                <!--@file-success="BtnSuccess"-->
                <!--@file-error="errHandler">-->
                <!--<div class="clear-fix">-->
                  <!--<cube-upload-btn :multiple="false">-->
                    <router-link :to="{
                      path: '/personal/dynamics',
                      query: {
                        title: '发布最新动态'
                      }
                    }" class="grid-upload">
                      <i><i></i></i>
                      <p>发布最新动态</p>
                    </router-link>
                  <!--</cube-upload-btn>-->
                <!--</div>-->
              <!--</cube-upload>-->

              <li v-for="(item, index) in isType == 1 ? releaseContent : LikeContent" :key="index"><img :src="item.url" alt=""></li>
            </ul>
        </div>
    </cube-scroll>
  </div>
</template>

<script>
  export default {
    name: "gridImg",
    props: {
      isType: ''
    },
    data() {
      return {
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
              noMore: '没有更多的比赛啦'
            }
          },
          click: false
        },
        releaseContent: [
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
        ],
        LikeContent: [
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
        ],
        uterUpload: {
          action: '//jsonplaceholder.typicode.com/photos/',
          files: []
        }
      }
    },
    methods: {
      onPullingDown () {
        this.loadMatch('down')
      },
      onPullingUp () {
        this.loadMatch('up')
      },
      loadMatch (type) {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            let match = []
            for (let index = 5; index > 0; index--) {
              match.push(this.isType == 1 ? this.releaseContent[index] : this.LikeContent[index])
            }
            if (type === 'down') {
              this.isType == 1 ? this.releaseContent.unshift(...match) : this.LikeContent.unshift(...match)
            } else if (type === 'up') {
              this.isType == 1 ? (this.releaseContent = this.releaseContent.concat(match)) : (this.LikeContent = this.LikeContent.concat(match))
            }
          } else {
            this.$refs.scroll.forceUpdate()
            if (type === 'up') {
              setTimeout(() => {
                this.$refs.scroll.scroll.scrollBy(0, 64, 800)
              }, 1000)
            }
          }
        }, 1000)
      },
      // 上传upload
      // addedHandler() {
      //   // const file = this.files[0]
      //   // file && this.$refs.upload.removeFile(file)
      //   // console.log(this.files);
      //
      // },
      // // 上传成功
      // BtnSuccess(file) {
      //   console.log(file)
      // },
      // // 上传失败
      // errHandler(file) {
      //   console.log(file)
      //   this.releaseContent.unshift({url: file.url})
      //   // const msg = file.response.message
      //   this.$createToast({
      //     type: 'warn',
      //     txt: '牛逼了,上传成功',
      //     time: 1000
      //   }).show()
      // }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/min-template/grid-img.less";
</style>
