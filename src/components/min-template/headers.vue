<template>
  <div class="text-search" :class="{active: $route.query.type == 3}">
    <ul>
      <li onclick="javascript :history.back(-1);">
        <i></i>
      </li>
      <li>
        <div v-if="!title">
          <cube-input v-model="value" placeholder="搜索" @focus="inputFocus" @blur="inputBlur" class="text-search-input"></cube-input>
          <i></i>
          <div class="search-box" v-show="boxState">
            <div class="search-popular">
              <p>热门搜索</p>
              <ul>
                <li v-for="(item, index) in popularData" :data-id="item.id"><a href="javascript:;">{{item.name}}</a></li>
              </ul>
            </div>
            <div class="search-history">
              <p>历史搜索</p>
              <ul>
                <li v-for="(item, index) in historyData" :data-id="item.id"><a href="javascript:;">{{item.name}}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="title" class="text-search-box">
          <p class="text-search-box-title">{{title}}</p>
        </div>
      </li>
      <!--
        @type
          1 显示
          2 不显示
      -->
      <li v-if="$route.query.type == 1">
        <router-link
          tag="span"
          :to="{
            path: '/index/good/news',
            query: {
              name: '消息',
              type: 2
            }
          }">

            <b>12</b>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'headers',
    watch: {
      $route: function (to, em) {
        this.title = to.query.name ? to.query.name : false
      }
    },
    data() {
      return {
        title: '',
        boxState: false,
        value: '',
        popularData: [
          {id: 1, name: '家具'},
          {id: 1, name: '装修'},
          {id: 1, name: '国内汽车'},
          {id: 1, name: '壁挂炉'},
          {id: 1, name: '笔记本'},
          {id: 1, name: '小吃'},
          {id: 1, name: '家具'},
          {id: 1, name: '家具'},
          {id: 1, name: '家具'},
          {id: 1, name: '家具'},
          {id: 1, name: '家具'},
        ],
        historyData: [
          {id: 1, name: '家具'},
          {id: 1, name: '装修'},
          {id: 1, name: '国内汽车'},
          {id: 1, name: '壁挂炉'},
          {id: 1, name: '笔记本'},
          {id: 1, name: '小吃'},
          {id: 1, name: '家具'},
          {id: 1, name: '家具'},
          {id: 1, name: '家具'},
          {id: 1, name: '家具'},
          {id: 1, name: '家具'},
        ]
      }
    },
    methods: {
      inputFocus() {
        console.log('聚焦');
        this.boxState = true;
      },
      inputBlur() {
        console.log('失焦')
        this.boxState = false;
      }
    },
    mounted() {
      this.title = this.$route.query.name ? this.$route.query.name : false
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/min-template/header.less";
</style>
