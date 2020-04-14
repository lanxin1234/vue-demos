<template>
<div id="">
  <h3>我是孙子 😊</h3>
  <p>
    通过<span class="code"> inject: ['count']</span> 获取
  </p>
  <p>count的值 <span class="code">this.count</span> : {{this.count}} </p>
</div>
</template>
<script>
export default {
  name: "child2",
  inject: ['count'],
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
