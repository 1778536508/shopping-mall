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
    <div class="create-address-box">
      <cube-form ref="forms" :model="forms" @validate="validateHandler" @submit="submitHandler" @invalid="invalid" @valid="valid">
        <cube-form-group>
          <ul>
            <li>
              <cube-form-item :field="fields[0]">
                <!--<label for="">收件人</label>-->
                <input type="text" placeholder="填写姓名" v-model="forms.collectValue">
              </cube-form-item>

            </li>
            <li>
              <cube-form-item :field="fields[1]">
                <!--<label for="">联系电话</label>-->
                <input type="text" placeholder="填写手机号" v-model="forms.iphoneValue">
              </cube-form-item>

            </li>
            <li>
              <cube-form-item :field="fields[2]">
                <!--<label for="">所在区域</label>-->
                <!--<span></span>-->
                <a href="javascript:;" @click="BrnAssdress">
                  <span>{{forms.addressValue}}</span>
                  <span>选择地理位置</span>
                </a>
              </cube-form-item>

            </li>
            <li>
              <cube-form-item :field="fields[3]">
                <textarea name="" id="" placeholder="填写详细地址" v-model="forms.detailedValue"></textarea>
              </cube-form-item>
            </li>
          </ul>
          <div class="submitRelease">
            <a href="javascript:;" @click="showToastMask">保存</a>
          </div>
        </cube-form-group>
      </cube-form>
    </div>
  </div>

</template>

<script>
  const dataJson = require('@/assets/data/data.json');
  dataJson.map((item, index) => {
    item.text = item.name;
    item.value = item.name;
    item.children = item.city;
    item.children.map((v, i) => {
      v.text = v.name;
      v.value = v.name;
      v.children = [];
      v.area.map((x, y) => {
        v.children.push(
          {
            text: x,
            value: x
          }
        )
      })
    })
  })
  console.log('dataJson',dataJson);

  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "create-address",
    components: {
      HeaderIndex
    },
    data() {
      return {
        cascadeData: dataJson,
        forms: {
          collectValue: '',
          iphoneValue: '',
          addressValue: '',
          detailedValue: ''
        },
        // 校验
        fields: [
          {
            type: 'input',
            modelKey: 'collectValue',
            label: '收件人',
            props: {
              placeholder: '请输入'
            },
            rules: {
              required: true
            },
            messages: {
              pattern: '收件人不能为空'
            },
          },
          {
            type: 'input',
            modelKey: 'iphoneValue',
            label: '联系电话',
            props: {
              placeholder: '填写手机号'
            },
            rules: {
              required: true
            }
          },
          {
            type: 'input',
            modelKey: 'addressValue',
            label: '所在区域',
            props: {
              placeholder: '请输入'
            },
            rules: {
              required: true
            }
          },
          {
            type: 'textarea',
            modelKey: 'detailedValue',
            label: '',
            props: {
              placeholder: '填写详细地址'
            },
            rules: {
              required: true
            }
          },
        ]

      }
    },
    mounted () {
      this.cascadePicker = this.$createCascadePicker({
        title: '请选择地理位置',
        data: this.cascadeData,
        selectedIndex: [0, 1, 0],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      BrnAssdress() {
        this.cascadePicker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        var _this = this;
        this.$createDialog({
          type: 'confirm',
          icon: 'cubeic-alert',
          title: '您选择的城市为:',
          content: `${selectedVal.join(', ')}`,
          confirmBtn: {
            text: '确定',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            _this.forms.addressValue = `${selectedVal.join(', ')}`
          },
          onCancel: () => {
            this.$createToast({
              type: 'correct',
              time: 1000,
              txt: '点击取消按钮'
            }).show()
          }
        }).show()

      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: '已取消',
          time: 1000
        }).show()
      },
      showToastMask () {
        this.$refs.forms.submit();
      },
      // //表单验证
      validateHandler(valid) {
        // console.log(valid)
      },
      // 提交表单后出发
      submitHandler() {

      },
      // 表单验证失败
      invalid(value) {
        console.log(value)
        this.$createToast({
          type: 'warn',
          txt: '保存失败！请填写完整。',
          time: 1000
        }).show()
      },
      // 表单验证成功
      valid(v1,v2,v3,v4) {
        console.log('value=>',v1,v2,v3,v4)
        var _this = this;
        this.$createToast({
          txt: '正在保存...',
          mask: true,
          time: 1000
        }).show();
        setTimeout(function () {
          _this.$createToast({
            type: 'correct',
            txt: '保存成功',
          }).show()
          setTimeout(function () {
            _this.$router.go(-1)
          },500)

        },1000)
      }









    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/personal/create-address/create-address.less";
</style>
