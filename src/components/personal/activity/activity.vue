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
        我的活动
    </div>
</template>

<script>
  import HeaderIndex from '../../min-template/headers';
  export default {
    name: "activity",
    components: {
      HeaderIndex
    }

  }
</script>

<style lang="less">

</style>
