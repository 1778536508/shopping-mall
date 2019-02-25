<template>
    <div>
      <div class="personal-box">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </div>
</template>

<script>
  export default {
    name: "index",
  }
</script>

<style lang="less">

</style>
