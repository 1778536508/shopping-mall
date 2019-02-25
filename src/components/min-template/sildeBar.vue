<template>
  <div>
    <div class="side-container">
      <cube-scroll-nav-bar
        direction="vertical"
        :current="current"
        :labels="labels"
        @change="changeHandler">
        <!--<ul class="sildeBar-pics">-->
          <!--<li class="sildeBar-pics-item" v-for="(item, index) in items" @click="BtnListItem(index)" :class="{active: stateIndex == index}"><a href="javascript:;" >{{item.name}}</a></li>-->
        <!--</ul>-->
      </cube-scroll-nav-bar>
    </div>
    <!--<div class="silde-scroll-list-wrap">-->
      <!--<cube-scroll-->
        <!--ref="scroll"-->
        <!--:data="items">-->
        <!--<ul class="sildeBar-pics">-->
          <!--<li class="sildeBar-pics-item" v-for="(item, index) in items" @click="BtnListItem(index)" :class="{active: stateIndex == index}"><a href="javascript:;" >{{item.name}}</a></li>-->
        <!--</ul>-->
      <!--</cube-scroll>-->
    <!--</div>-->
  </div>
</template>
<script>
  export default {
    name: "sildeBar",
    data() {
      return {
        current: '分类专区',       // sildeTab 当前选中的key
        labels: [],         // key值集合
        // stateIndex: 0,
        items: [      // 数据
          {name: '分类专区', id: 1},
          {name: '软转套餐', id: 2},
          {name: '生活套餐', id: 3},
          {name: '日用单品', id: 4},
          {name: '进口家具', id: 5},
          {name: '品质灯具', id: 6},
          {name: '王红新品', id: 7},
          {name: '热门单品', id: 8},
          {name: '精选床品', id: 9},
          {name: '精选软装', id: 10},
          {name: '一元购', id: 11},
          {name: '激情保健', id: 12},
          {name: '女性专区', id: 13},
          {name: '两性知识', id: 14},
          {name: '完美穿搭', id: 15},
          {name: '装修必备', id: 16},
          {name: '电子产品', id: 17},
          {name: '愉悦贷车', id: 18},
          {name: '热门家纺', id: 19},
        ],
      }
    },
    methods: {
      BtnListItem(index) {
        console.log(index);
        this.stateIndex = index;
      },
      changeHandler(cur) {
        var _this = this;
        this.current = cur;
        _this.items.map((v, i) => {
          if (v.name == cur) {
            console.log(v)
          }
        })
      }
    },
    mounted() {
      var _this = this;
      _this.items.map((v, i) => {
        _this.labels.push(v.name)
      })

    }
  }
</script>
<style lang="less">
  @import "../../assets/less/min-template/sildeBar.less";
</style>
