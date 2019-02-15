<template>
  <div>
    <div class="silde-scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :data="items">
        <ul class="sildeBar-pics">
          <li class="sildeBar-pics-item" v-for="(item, index) in items" @click="BtnListItem(index)" :class="{active: stateIndex == index}"><a href="javascript:;" >{{item.name}}</a></li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
  export default {
    name: "sildeBar",
    data() {
      return {
        stateIndex: 0,
        items: [
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
          {name: '分类专区'},
        ],
      }
    },
    methods: {
      BtnListItem(index) {
        console.log(index);
        this.stateIndex = index;
      },
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/min-template/sildeBar.less";
</style>
