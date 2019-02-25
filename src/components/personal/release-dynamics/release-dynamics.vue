<template>
  <div class="release-dynamics">
    <HeaderIndex
      :params="{
              back: false,
              searchs: false,
              title: $route.query.title,
              news: false
          }"
    ></HeaderIndex>
    <!--uploadImg.png-->
    <cube-form ref="forms" :model="FormValue" @invalid="submitError" @valid="submitSuccess">
      <cube-form-group>
        <cube-form-item :field="fields[0]">
          <input type="text" v-model="FormValue.titleVal" placeholder="添加标题..." class="release-dynamics-input">
        </cube-form-item>
        <cube-form-item :field="fields[1]">
          <cube-upload
            ref="upload"
            :action="uterUpload.action"
            v-model="FormValue.uploadVal"
            @file-success="successHandler"
            @file-error="errHandler"
            @file-removed="removedFile">
            <div class="clear-fix">
              <cube-upload-file v-for="(file, i) in FormValue.uploadVal" :file="file" :key="i">
               <img :src="file.url" alt="">
              </cube-upload-file>
              <div class="cube-upload-btn-box">
                <cube-upload-btn>
                  <i class="release-dynamics-upload"></i>
                </cube-upload-btn>
              </div>

            </div>
          </cube-upload>
        </cube-form-item>
        <cube-form-item :field="fields[2]">
          <i class="release-dynamics-icon"></i>
          <textarea name="" id="" cols="30" rows="10" placeholder="我想说..." class="release-dynamics-input" v-model="FormValue.textVal"></textarea>
        </cube-form-item>
        <cube-form-item>
          <div class="single-product-btn">
            <router-link
              tag="p"
              :to="{
                path: '/personal/singlelist',
                query: {
                  type: 2
                }
              }"
            >添加标识单品</router-link>
          </div>
        </cube-form-item>
        <div class="single-product-list">
          <ul>
            <li v-for="(item, index) in singleData">
              <single-product :singleData="item"></single-product>
            </li>
          </ul>
        </div>
      </cube-form-group>
    </cube-form>





    <div class="submitRelease">
      <a href="javascript:;" @click="submitRelease">发布</a>
    </div>
  </div>
</template>

<script>
  import SingleProduct from '../../min-template/single';
  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "release-dynamics",
    components: {
      HeaderIndex,
      SingleProduct
    },
    data() {
      return {
        uterUpload: {
          action: '//jsonplaceholder.typicode.com/photos/',
          files: []
        },
        FormValue: {
          titleVal: '',
          uploadVal: [],
          textVal: ''
        },
        fields: [
          {
            type: 'input',
            modelKey: 'titleVal',
            label: '',
            props: {
              placeholder: '添加标题...'
            },
            rules: {
              required: true
            }
          },
          {
            type: 'input',
            modelKey: 'uploadVal',
            label: '',
            rules: {
              required: true
            }
          },
          {
            type: 'input',
            modelKey: 'textVal',
            label: '',
            props: {
              placeholder: '我想说...'
            },
            rules: {
              required: true
            }
          }

        ],
        singleData: [
          {
            url: '../../../static/imgaes/banner.png',
            name: '空气层美棉提花四件套',
            number: 2213
          },
          {
            url: '../../../static/imgaes/banner.png',
            name: '空气层美棉提花四件套',
            number: 2213
          },
          {
            url: '../../../static/imgaes/banner.png',
            name: '空气层美棉提花四件套',
            number: 2213
          }
        ]
      }
    },
    methods: {
      // 图片上传成功
      successHandler() {

      },
      // 图片上传失败
      errHandler(error) {
        console.log('error=>', error);
        this.FormValue.uploadVal.unshift({url: error.url})
        this.$createToast({
          type: 'warn',
          txt: '牛逼了,上传成功',
          time: 1000
        }).show()
      },
      // 删除图片
      removedFile() {

      },
      // 提交成功
      submitSuccess() {
        var _this = this;
        _this.$createToast({
          type: 'correct',
          txt: '发布成功',
        }).show()
        setTimeout(function () {
          _this.$router.go(-1)
        },500)
      },
      // 提交失败
      submitError() {
        // var _this = this;
        // _this.$createToast({
        //   type: 'correct',
        //   txt: '发布失败',
        // }).show()
      },
      // 提交发布
      submitRelease() {
        var _this = this;
        this.$refs.forms.submit();
        if (this.FormValue.uploadVal.length == 0) {
          this.$createDialog({
            type: 'alert',
            title: '温馨提示！',
            content: '请最少添加一张图片喔',
            icon: 'cubeic-alert'
          }).show()
        }

      },
    },
    mounted() {
      window.scrollTo(0, 0);
    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/personal/release-dynamics/release-dynamics.less";
</style>
