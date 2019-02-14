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
  .home-header {
    width: 100%;
    height: 39px;
    .cube-tab-bar {
      width: 100%;
      height: 100%;

      .cube-tab {
        .header-text {
          position: relative;
          font-size: 16px;
          &:after {
            content: '';
            width: 30%;
            height: 2px;
            position: absolute;
            bottom: -8px;
            left: 50%;
            margin-left: -15%;
            border-radius: 1px;
          }
        }
        &.cube-tab_active {
          color: #A04E4E;
          .header-text {
            &:after {
              background: #A04E4E;
            }
          }
        }
      }
    }
  }

</style>
