<template>
  <div>
    <transition name="fade">
      <router-view/>
    </transition>
    <layout-footer/>
  </div>
</template>
<script>
  import LayoutFooter from './../../components/layout/footer'
  export default {
    name: 'ContentIndex',
    components: {
      LayoutFooter
    }
  }
</script>
<style>

</style>
