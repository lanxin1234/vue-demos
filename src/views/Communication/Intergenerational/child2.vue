<template>
<div class="child2">
  <h3>我是孙子 😊</h3>
</div>
</template>
<script>
export default {
  name: "child2",
  data: () => ({

  }),
  created() {
    //do something after creating vue instance
    console.log('获取', this.$attrs);
  }
}
</script>
<style lang="scss" scoped>
</style>
