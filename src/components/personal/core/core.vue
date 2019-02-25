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
    <div class="core-scroll-list-wrap">
      <cube-scroll
        ref="scroll">
        <div class="core-box">
          <div class="core-head-portrait">
            <i class="core-portrait"><img src="../../../../static/imgaes/banner.png" alt=""></i>
            <div class="core-head-box">
              <div class="my-head-name">
                <span>名字</span>
                <div class="my-head-lv">
                  <p><span>Lv.</span><span>10</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="core-list">
            <ul>
              <li>
                <p>头像</p>
                <div class="core-list-box">
                  <i></i>
                </div>

              </li>
              <li>
                <p>昵称</p>
                <div class="core-list-box">
                  <i></i>
                </div>
                <span>ndyname</span>
              </li>
              <li>
                <p>手机号</p>
                <div class="core-list-box">
                  <i></i>
                </div>
                <span>17181817181</span>
              </li>
              <li>
                <p>生日</p>
                <div class="core-list-box">
                  <i></i>
                </div>
                <span>2001/9/9</span>
              </li>
              <li>
                <p>修改登录密码</p>
                <div class="core-list-box">
                  <i></i>
                </div>
              </li>
              <li>
                <p>修改支付密码</p>
                <div class="core-list-box">
                  <i></i>
                </div>
              </li>
              <li>
                <p>退出登录</p>
                <div class="core-list-box">
                  <i></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>

</template>

<script>
  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "core",
    components: {
      HeaderIndex
    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/personal/core/core.less";
</style>
