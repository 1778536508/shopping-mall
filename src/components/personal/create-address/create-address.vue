<template>
  <div class="create-address-box">
    <ul>
      <li>
        <label for="">收件人</label>
        <input type="text" placeholder="填写姓名">
      </li>
      <li>
        <label for="">联系电话</label>
        <input type="text" placeholder="填写手机号">
      </li>
      <li>
        <label for="">所在区域</label>
        <a href="javascript:;" @click="BrnAssdress">选择地理位置</a>
      </li>
      <li>
        <textarea name="" id="" placeholder="填写详细地址"></textarea>
      </li>
    </ul>
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
  export default {
    name: "create-address",
    data() {
      return {
        cascadeData: dataJson
      }
    },
    mounted () {
      this.cascadePicker = this.$createCascadePicker({
        title: 'Cascade Picker',
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
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/personal/create-address.less";
</style>
