<template>
  <div>
    <home-banner></home-banner>
    <home-list></home-list>
    <home-upgrade></home-upgrade>
    <home-quality-life></home-quality-life>
    <home-moment></home-moment>
  </div>
</template>
<script>
  import HomeBanner from '../../min-template/banner';
  import HomeList from '../../min-template/homelist';
  import HomeUpgrade from '../../min-template/upgrade';
  import HomeQualityLife from '../../min-template/quality-life';
  import HomeMoment from '../../min-template/moment'
  export default {
    name: 'home',
    components: {
      HomeBanner,
      HomeList,
      HomeUpgrade,
      HomeQualityLife,
      HomeMoment
    }
  }
</script>
