<template>
  <div>
    <router-view/>
    <details-footer/>
  </div>
</template>
<script>
  import detailsFooter from './../../components/layout/details-footer';
  export default {
    name: 'DetailsIndex',
    components: {
      detailsFooter
    }
  }
</script>
<style>

</style>
