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
    <div class="address-scroll-list-wrap">
      <cube-scroll
        ref="scroll">
        <div class="address-list">
          <ul class="address-list-pics">
            <cube-radio-group>
              <li v-for="(item, index) in addressData.options" :key="index" class="address-list-item">
                <div class="address-list-title">
                  <p>{{item.title}}</p>
                  <div>
                    <span>{{item.name}}</span>
                    <span>{{item.ipone}}</span>
                  </div>
                </div>
                <p class="address-list-address">
                  <cube-radio
                    :option="item"
                    :hollow-style="false"
                    v-model="addressData.value">
                    <span class="address-list-address-name">{{item.label}}</span>
                  </cube-radio>
                  <i class="add-icon"></i>
                  <i class="add-icon" @click="BtnRemove(item.value)"></i>
                </p>
              </li>
            </cube-radio-group>
          </ul>
          <router-link
            :to="{
              path: '/personal/createaddress',
              query: {
                title: '添加地址'
              }
            }"
            tag="div"
            class="address-create">
            <span>新增地址</span>
            <i></i>
          </router-link>
        </div>
      </cube-scroll>
    </div>
  </div>

</template>
<script>
  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "addresss",
    components: {
      HeaderIndex
    },
    data() {
      return {
        addressData: {
          value: '',
          options: [
            {
              title: '博洛尼房美汇办公楼 1楼',
              name: 'XXXX先生',
              ipone: 1767267367,
              label: '设为默认收货地址',
              value: 1
            },
            {
              title: '博洛尼房美汇办公楼 2楼',
              name: 'XXXX先生',
              ipone: 1767267367,
              label: '设为默认收货地址',
              value: 2
            },
            {
              title: '博洛尼房美汇办公楼 3楼',
              name: 'XXXX先生',
              ipone: 1767267367,
              label: '设为默认收货地址',
              value: 3,
            },
            {
              title: '博洛尼房美汇办公楼 4楼',
              name: 'XXXX先生',
              ipone: 1767267367,
              label: '设为默认收货地址',
              value: 4
            },
            {
              title: '博洛尼房美汇办公楼 5楼',
              name: 'XXXX先生',
              ipone: 1767267367,
              label: '设为默认收货地址',
              value: 5
            },
            {
              title: '博洛尼房美汇办公楼 6楼',
              name: 'XXXX先生',
              ipone: 1767267367,
              label: '设为默认收货地址',
              value: 6,
            }
          ]
        }
      }
    },
    methods: {
      BtnRemove(id) {
        this.$createDialog({
          type: 'confirm',
          // icon: 'cubeic-alert',
          title: '删除地址？',
          // content: '我是内容',
          confirmBtn: {
            text: '确定',
            active: false,
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
            console.log('id',id)
            this.removeFun(id);
          },
          onCancel: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '已取消'
            }).show()
          }
        }).show()
      },
      removeFun(id) {
        var _this = this;
        _this.addressData.options.map((v,i) => {
          if (v.value == id) {
            _this.addressData.options.splice(i, 1);
          }
        })
        this.$createToast({
          type: 'correct',
          time: 1000,
          txt: '删除成功'
        }).show()
      }
    },
    mounted() {
      var _this = this;
      console.log(this.$route.query.valData)
      if (this.$route.query.valData) {
        this.addressData.options.unshift(
          {
            title: _this.$route.query.valData.addressValue + ',' + _this.$route.query.valData.detailedValue,
            name: _this.$route.query.valData.collectValue,
            ipone: _this.$route.query.valData.iphoneValue,
            label: '设为默认收货地址',
            value: _this.$route.query.valData.iphoneValue
          }
        )
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/personal/address/address.less";
</style>
