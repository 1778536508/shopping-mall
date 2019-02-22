<template>
  <div class="tab-list">
    <ul class="tab-ul">
      <li v-for="(item, index) in data.heroes" :key="index">
        <img v-lazy="item.image" alt>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "silid",
  data() {
    return {
    };
  },
  props: {
    data: Object,
  },
  created() {},
  mounted() {
    console.log("--- >", this.datas)
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "./../../../../assets/less/details/shop/tab-list.less";
</style>
