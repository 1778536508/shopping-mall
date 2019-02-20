<template>
    <div>
      <header-index></header-index>
      <div class="personal-box">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import HeaderIndex from '../../components/min-template/headers';
  export default {
    name: "index",
    components: {
      HeaderIndex,
    }
  }
</script>

<style lang="less">

</style>
