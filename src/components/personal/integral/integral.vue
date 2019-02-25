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
        积分中心
    </div>
</template>

<script>
  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "integral",
    components: {
      HeaderIndex
    },
  }
</script>

<style lang="less">

</style>
