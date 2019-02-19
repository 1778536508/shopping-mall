<template>
    <div>
      <div class="my-head-portrait">
        <ul>
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
        </ul>
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
            <li>
              <!--order-icon1.png-->
              <i></i>
              <p>待付款</p>
            </li>
            <li>
              <!--order-icon2.png-->
              <i></i>
              <p>待收货</p>
            </li>
            <li>
              <!--order-icon3.png-->
              <i></i>
              <p>待评价</p>
            </li>
            <li>
              <!--order-icon4.png-->
              <i></i>
              <p>售后/退款</p>
            </li>
            <li>
              <!--order-icon5.png-->
              <i></i>
              <p>全部订单</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="my-release">
        <p class="my-order-title">我的发布 <a href="javascript:;">查看全部</a></p>
        <div class="my-release-list">
          <ul>
            <li>
              <i><i></i></i>
              <p>发布最新动态</p>
            </li>
            <li><img src="../../../../static/imgaes/banner.png" alt=""></li>
            <li><img src="../../../../static/imgaes/banner.png" alt=""></li>
            <li><img src="../../../../static/imgaes/banner.png" alt=""></li>
          </ul>
        </div>
      </div>
      <div class="my-love my-release">
        <p class="my-order-title">我的喜欢 <a href="javascript:;">查看全部</a></p>
        <div class="my-love-list my-release-list">
          <ul>
            <li><img src="../../../../static/imgaes/banner.png" alt=""></li>
            <li><img src="../../../../static/imgaes/banner.png" alt=""></li>
            <li><img src="../../../../static/imgaes/banner.png" alt=""></li>
            <li><img src="../../../../static/imgaes/banner.png" alt=""></li>
          </ul>
        </div>
      </div>
      <div class="my-list">
        <ul>
          <li>
            <i></i>
            <p>我的活动</p>
            <b></b>
          </li>
          <li>
            <i></i>
            <p>浏览历史</p>
            <b></b>
          </li>
          <li>
            <i></i>
            <p>积分中心</p>
            <b></b>
          </li>
          <li>
            <i></i>
            <p>优惠券</p>
            <b></b>
          </li>
          <li>
            <i></i>
            <p>地址管理</p>
            <b></b>
          </li>
          <li>
            <i></i>
            <p>客服咨询</p>
            <b></b>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style lang="less">
  @import "../../../assets/less/my/home.less";
</style>
