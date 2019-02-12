<template>
  <div>
    <home-banner></home-banner>
    <home-list></home-list>
    <home-upgrade></home-upgrade>
  </div>
</template>
<script>
  import HomeBanner from '../../min-template/banner';
  import HomeList from '../../min-template/homelist';
  import HomeUpgrade from '../../min-template/upgrade'
  export default {
    name: 'home',
    components: {
      HomeBanner,
      HomeList,
      HomeUpgrade
    }
  }
</script>
