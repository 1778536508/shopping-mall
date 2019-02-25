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
        客服咨询
    </div>
</template>

<script>
  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "service",
    components: {
      HeaderIndex
    },
  }
</script>

<style lang="less">

</style>
