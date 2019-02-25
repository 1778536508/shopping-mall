<template>
  <div>
    <HeaderIndex
      :params="{
              back: false,
              searchs: true,
              title: false,
              news: false
          }"
    ></HeaderIndex>
    <div class="single-list-search">
      <ul>
        <li v-for="(item, index) in singleData">
          <SingleProduct :singleData="item"></SingleProduct>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import HeaderIndex from '../../min-template/headers';
  import SingleProduct from '../../min-template/single';
    export default {
        name: "single-list",
      components: {
        HeaderIndex,
        SingleProduct
      },
      data() {
          return {
            singleData: [
              {
                url: '../../../static/imgaes/banner.png',
                name: '空气层美棉提花四件套',
                number: 2213
              },
              {
                url: '../../../static/imgaes/banner.png',
                name: '空气层美棉提花四件套',
                number: 2213
              },
              {
                url: '../../../static/imgaes/banner.png',
                name: '空气层美棉提花四件套',
                number: 2213
              },
              {
                url: '../../../static/imgaes/banner.png',
                name: '空气层美棉提花四件套',
                number: 2213
              },
              {
                url: '../../../static/imgaes/banner.png',
                name: '空气层美棉提花四件套',
                number: 2213
              },
              {
                url: '../../../static/imgaes/banner.png',
                name: '空气层美棉提花四件套',
                number: 2213
              },
              {
                url: '../../../static/imgaes/banner.png',
                name: '空气层美棉提花四件套',
                number: 2213
              },
              {
                url: '../../../static/imgaes/banner.png',
                name: '空气层美棉提花四件套',
                number: 2213
              },
              {
                url: '../../../static/imgaes/banner.png',
                name: '空气层美棉提花四件套',
                number: 2213
              }
            ]
          }
      }
    }
</script>

<style lang="less">
  .single-list-search {
    width: 100%;
    margin-top: 44px;
  }
</style>
