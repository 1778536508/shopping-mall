<template>
  <div class="details-footer">
    <div class="item">
      <div class="home">
        <div>
          <i class="footer-icon"></i>
          <p>首页</p>
        </div>
      </div>
      <div class="server">
          <div>
            <i class="footer-icon"></i>
            <p>客服</p>
            <div class="num">
                13
            </div>
          </div>
      </div>
    </div>
    <div class="item">
        <p>加入购物车</p>
    </div>
    <div class="item">
        <p>立即购买</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutFooter",
  data() {
    return {};
  },
  methods: {
    clickHandler(label) {
      console.log(label);
    }
  },
  mounted() {
    const name = window.location.href.split("/#")[1];
    switch (name) {
      case "/index":
        this.selectedLabelSlots = "美学";
        break;
      case "/index/find":
        this.selectedLabelSlots = "发现";
        break;
      case "/index/good":
        this.selectedLabelSlots = "好物";
        break;
      case "/index/my":
        this.selectedLabelSlots = "我的";
        break;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "./../../assets/less/details/shop/footer.less";
</style>
