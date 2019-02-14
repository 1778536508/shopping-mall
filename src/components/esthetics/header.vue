<template>
  <div class="home-header">
    <cube-tab-bar
      v-model="ViewHeader.selectedLabelSlots"
      @click="clickHandler">
      <cube-tab v-for="(item, index) in ViewHeader.tabs" :label="item.label" :key="item.label">
          <p class="header-text">{{item.label}}</p>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>


  export default {
    name: 'homeheader',
    props: {
      ViewHeader: ''
    },
    data () {
      return {

      }
    },
    methods: {
      clickHandler (label) {
        console.log(label);
        this.$emit("btnTable", label)
      },
    },
    mounted() {


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../assets/less/content/home-header.less";
</style>
