<template>
  <div class="layout-footer">
    <cube-tab-bar
      v-model="selectedLabelSlots"
      @click="clickHandler">
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
        <router-link
          :to="{
            path: item.src,
            query: {
              type: item.type,
              label: item.label
            }
          }"
          tag="div">
          <i class="footer-icon"></i>
          <p class="footer-text">{{item.label}}</p>
        </router-link>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>

  export default {
    name: 'LayoutFooter',
    data () {
      return {
        selectedLabelSlots: this.$route.query.label ? this.$route.query.label : '美学',
        tabs: [{
          label: '美学',
          icon: './../../../static/imgaes/home1-1.png',
          src: '/index',
          type: 2,
        }, {
          label: '发现',
          icon: './../../../static/imgaes/find1-1.png',
          src: '/index/find',
          type: 2,
        }, {
          label: '好物',
          icon: './../../../static/imgaes/good-thing1-1.png',
          src: '/index/good/home',
          type: 1,
        }, {
          label: '我的',
          icon: './../../../static/imgaes/My1-1.png',
          src: '/index/my',
          type: 2,
        }]
      }
    },
    methods: {
      clickHandler (label) {
        console.log(label);

      },
    },
    mounted() {
      const name = window.location.href.split('/#')[1];
      switch (name) {
        case '/index':
          this.selectedLabelSlots = '美学';
          break;
        case '/index/find':
          this.selectedLabelSlots = '发现';
          break;
        case '/index/good':
          this.selectedLabelSlots = '好物';
          break;
        case '/index/my':
          this.selectedLabelSlots = '我的';
          break;
      }

    }
  }
</script>

<style lang="less">
   @import "../../assets/less/layout/footer.less";
</style>
