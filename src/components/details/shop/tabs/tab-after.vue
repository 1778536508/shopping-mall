<template>
  <div class="tab-after">
      <div class="after-box" v-for="(item, index) in data.heroes" :key="index">
        <div class="after-title">
          <i></i>
          <p>{{item.title}}</p>
        </div>
        <div class="after-content">
          <p>{{item.content}}</p>
        </div>
      </div>
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
    console.log("data -- >", this.data)
  },
  methods: {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "./../../../../assets/less/details/shop/tab-after.less";
</style>