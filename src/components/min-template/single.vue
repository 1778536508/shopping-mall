<template>
  <div class="single-product">
      <ul>
        <li>
          <i><img :src="singleData.url" alt=""></i>
        </li>
        <li>
          <p>{{singleData.name}}</p>
          <p>
            <label for="">编号</label>
            <span>{{singleData.number}}</span>
          </p>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: "single",
    props: {
      singleData: ''
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/min-template/single.less";
</style>
