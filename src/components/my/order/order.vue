<template>
    <div>
      <div>
        <HeaderIndex
          :params="{
              back: false,
              searchs: false,
              title: $route.query.title,
              news: false
          }"
        ></HeaderIndex>
      </div>
      <div class="order-table">
        <ul>
          <li v-for="(item, index) in utils.table" :key="index" :data-id="item.id" @click="btnTable(index)" :class="{active: index == utils.tableIndex}"><a href="javascript:;">{{item.name}}</a></li>
        </ul>
        <i class="underline"
           :class="{
              table0: utils.tableIndex == 0,
              table1: utils.tableIndex == 1,
              table2: utils.tableIndex == 2,
              table3: utils.tableIndex == 3,
              table4: utils.tableIndex == 4,
            }">
        </i>
      </div>
      <div class="order-content">
        <cube-slide
          :data="utils.table"
          :initialIndex="utils.tableIndex"
          :loop="false"
          :autoPlay="false"
          :threshold="0.1"
          @change="slideChange">
          <cube-slide-item v-for="(item, index) in utils.table" :key="index">
            <div class="match-list-wrapper">
              <order-list :orderList="item"></order-list>
            </div>
          </cube-slide-item>
          <div slot="dots"></div>
        </cube-slide>
      </div>
    </div>
</template>

<script>
  import HeaderIndex from '../../min-template/headers';
  import OrderList from '../../min-template/order-list';
  export default {
    name: "order",
    components: {
      HeaderIndex,
      OrderList
    },
    data() {
      return {
        utils: {
          tableIndex: Number(this.$route.query.code),
          table: [
            {id: 1, name: '全部订单'},
            {id: 2, name: '待付款'},
            {id: 3, name: '收付款'},
            {id: 4, name: '待评价'},
            {id: 5, name: '退换/售后'},
          ]
        }
      }
    },
    methods: {
      btnTable(index) {
        this.utils.tableIndex = index
      },
      slideChange (index) {
        this.utils.tableIndex = index
      },
    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/my/order/order.less";
</style>
