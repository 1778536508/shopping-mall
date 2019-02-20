<template>
    <div class="pictures-box-box">
      <div class="pictures-head-box">
        <img src="../../../../static/imgaes/banner.png" alt="" class="pictures-background-img">
        <div class="pictures-head-portrait">
          <i class="core-portrait"><img src="../../../../static/imgaes/banner.png" alt=""></i>
          <div class="core-head-box">
            <div class="my-head-name">
              <span>typs 1892735479</span>
            </div>
          </div>
        </div>
        <div class="pictures-list">
          <ul>
            <li v-for="(item, index) in utils.table" :key="index" :data-id="item.id" @click="btnTable(index)" :class="{active: index == utils.tableIndex}"><a href="javascript:;">{{item.name}}</a></li>
          </ul>
          <i class="underline" :class="{left: utils.tableIndex == 0, right: utils.tableIndex == 1}"></i>
        </div>
      </div>

      <div class="pictures-content">
        <cube-slide
          :data="utils.table"
          :initialIndex="utils.tableIndex"
          :loop="false"
          :autoPlay="false"
          :threshold="0.1"
          @change="slideChange">
          <cube-slide-item v-for="(item, index) in utils.table" :key="index">
            <div class="match-list-wrapper">
              <grid-img :isType="item.id"></grid-img>
            </div>
          </cube-slide-item>
          <div slot="dots"></div>
        </cube-slide>
      </div>

    </div>
</template>

<script>
  import GridImg from '../../min-template/grid-img'
  export default {
    name: "pictures",
    components: {
      GridImg
    },
    data() {
      return {
        utils: {
          tableIndex: Number(this.$route.query.code),
          table: [
            {id: 1, name: '我的发布'},
            {id: 2, name: '我的喜欢'},
          ]
        }
      }
    },
    methods: {
      btnTable(index) {
        this.utils.tableIndex = index
      },
      slideChange (index) {
        this.utils.tableIndex = index
      },
    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/personal/pictures.less";
</style>
