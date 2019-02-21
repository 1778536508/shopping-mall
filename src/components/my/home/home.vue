<template>
    <div>
      <div class="my-head-portrait">
        <router-link
          :to="{
            path: '/personal',
            query: {
              name: '个人中心',
              type: 2
            }
          }
          "
          tag="ul">
          <li><i><img src="../../../../static/imgaes/banner.png" alt=""></i></li>
          <li>
            <p class="my-head-name">名字</p>
            <div class="my-head-lv">
              <p><span>Lv.</span><span>10</span></p>
            </div>
          </li>
          <li>
            <!--more_black_circle.png-->
            <b></b>
          </li>
        </router-link>
      </div>
      <div class="my-jintegral">
          <ul>
            <!--integral_black_circle.png-->
            <li><i></i><span>我的积分:</span></li>
            <li><a href="javascript:;">您还没有积分</a></li>
            <li><span>去逛逛</span></li>
          </ul>
      </div>
      <div class="my-order">
        <p class="my-order-title">我的订单</p>
        <div class="my-order-list">
          <ul>
            <router-link
              v-for="(item, index) in orderList"
              :to="{
                path: '/index/my/order',
                query: {
                  name: '我的订单',
                  code: item.code
                }
              }"
              tag="li"
              :key="index"
            >
              <i></i>
              <p>{{item.name}}</p>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="my-release">
        <p class="my-order-title">
          我的发布
          <router-link
            :to="{
              path: '/personal/pictures',
              query: {
                type: 3,
                code: 0
              }
            }"

          >查看全部</router-link>
        </p>
        <div class="my-release-list">
          <ul>
            <li>
              <i><i></i></i>
              <p>发布最新动态</p>
            </li>
            <li v-for="(item, index) in releaseList"><img :src="item.url" alt=""></li>
          </ul>
        </div>
      </div>
      <div class="my-love my-release">
        <p class="my-order-title">
          我的喜欢
          <router-link
            :to="{
              path: '/personal/pictures',
              query: {
                type: 3,
                code: 1
              }
            }"
          >
          查看全部
          </router-link>
        </p>
        <div class="my-love-list my-release-list">
          <ul>
            <li v-for="(item, index) in likeList"><img :src="item.url" alt=""></li>
          </ul>
        </div>
      </div>
      <div class="my-list">
        <ul>
          <router-link
            v-for="(item, index) in contentList"
            :to="{
              path: item.path,
              query: {
                name: item.name,
                type: 2
              }
            }"
            tag="li"
            :key="index">
            <i></i>
            <p>{{item.name}}</p>
            <b></b>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        orderList: [
          {name: '待付款', code: 0},
          {name: '待收货', code: 1},
          {name: '待评价', code: 2},
          {name: '售后/退款', code: 3},
          {name: '全部订单', code: 4},
        ],
        releaseList: [
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
          {url: '../../../../static/imgaes/squareCopy.png'},
        ],
        likeList: [
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
          {url: '../../../../static/imgaes/squareSopy.png'},
        ],
        contentList: [
          {name: '我的活动', path: '/personal/activity'},
          {name: '浏览历史', path: '/personal/history'},
          {name: '积分中心', path: '/personal/integral'},
          {name: '优惠券', path: '/personal/coupon'},
          {name: '地址管理', path: '/personal/address'},
          {name: '客服咨询', path: '/personal/service'},
        ]
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/my/home.less";
</style>
