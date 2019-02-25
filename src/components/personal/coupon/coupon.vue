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
        优惠券
    </div>
</template>

<script>
  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "coupon",
    components: {
      HeaderIndex
    },
  }
</script>

<style lang="less">

</style>
