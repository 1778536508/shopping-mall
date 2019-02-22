<template>
  <div class="items">
    <ul class="items-box">
      <li v-for="(item, index) in tabs" :key="index">
        <a
          href="javaScript:void(0)"
          @click="clickHandler(index)"
          :class="{'items-active' : tabNum == index}"
        >{{item.label}}</a>
      </li>
    </ul>
    <keep-alive>
      <component :is="currentView" :data="tabs[tabNum]"></component>
    </keep-alive>
  </div>
</template>

<script>
import tabList from "./tabs/tab-list.vue";
import tabParams from "./tabs/tab-params.vue";
import tabAfter from "./tabs/tab-after.vue";

// 页签详情 模拟网络图片
var list1 = require("@/assets/imgaes/list1.png");
var list2 = require("@/assets/imgaes/list2.png");
var list3 = require("@/assets/imgaes/list3.png");


var icon =  require("@/assets/imgaes/check.png");
export default {
  name: "silid",
  data() {
    return {
      tabNum: 0,
      arr: ["tabList", "tabParams", "tabAfter"],
      tabs: [
        {
          label: "详情",
          heroes: [
            {
              image: list1
            },
            {
              image: list2
            },
            {
              image: list3
            }
          ]
        },
        {
          label: "参数",
          item: {
            brandName: "名称type1+名称type2+名称type3",
            productCode: "type编码",
            productType: "type品类名称",
            productName: "type产品名称 名称type1+名称type2+名称type3+名称type4",
            extendedField1: "扩展名称字段",
            extendedField2: "扩展名称字段",
            extendedField3: "扩展名称字段",
            extendedField4: "扩展名称字段"
          }
        },
        {
          label: "售后/护理",
          heroes: [
            {
              title: "破损包退换",
              content: "签收后72小时内发现商品破损问题，提供售后服务。"
            },
            {
              title: "上门换新",
              content: "签收15天内因商品性能故障换货，提供上门取件时换新服务。"
            },
            {
              title: "上门换新",
              content: "签收15天内因商品性能故障换货，提供上门取件时换新服务。"
            },
            {
              title: "上门换新",
              content: "签收15天内因商品性能故障换货，提供上门取件时换新服务。"
            },
            {
              title: "上门换新",
              content: "签收15天内因商品性能故障换货，提供上门取件时换新服务。"
            }
          ]
        }
      ]
    };
  },
  computed: {
    currentView() {
      return this.arr[this.tabNum];
    }
  },
  components: {
    tabList,
    tabParams,
    tabAfter
  },
  methods: {
    clickHandler(index) {
      this.tabNum = index;
      console.log(index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "./../../../assets/less/details/shop/tab";
</style>
