<template>
  <div class="text-search">
    <ul>
      <li>
        <i></i>
      </li>
      <li>
        <cube-input v-model="value" placeholder="搜索" @focus="inputFocus" @blur="inputBlur" class="text-search-input"></cube-input>
        <i></i>
        
      </li>
      <li>
        <span>
          <b>12</b>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'search',
    data() {
      return {
        value: ''
      }
    },
    methods: {
      inputFocus() {
        console.log('聚焦')
      },
      inputBlur() {
        console.log('失焦')
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/min-template/search.less";
</style>
