<template>
  <div class="text-search" :class="{active: params.back}">
    <ul>
      <!--
        返回上一级
      -->
      <li onclick="javascript :history.back(-1);">
        <i></i>
      </li>
      <li>
        <!--
          输入框
        -->
        <div v-show="params.searchs">
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
        <!--
          标题title
        -->
        <div v-show="params.title" class="text-search-box">
          <p class="text-search-box-title">{{params.title}}</p>
        </div>
      </li>
      <!--
      消息
      -->
      <li v-show="params.news">
        <router-link
          tag="span"
          :to="{
            path: '/personal/service',
            query: {
              title: '消息'
            }
          }">

            <b>12</b>
        </router-link>
      </li>
    </ul>
    <!--<p style="color: red;">{{params}}</p>-->
  </div>
</template>
<script>
  export default {
    name: 'headers',
    /**
     * @params: {
       *  back: true,    无背景色
       *  searchs: true,  输入框显示
       *  title: true,   标题显示
       *  news: true     消息图标显示
       * }
     */
    props: {
      params: ''
    },
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
      this.title = this.$route.query.name ? this.$route.query.name : false;
      console.log(this.$route.meta)
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/min-template/header.less";
</style>
