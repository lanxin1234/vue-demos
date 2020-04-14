<template>
<div id="">
  <h4>我是爸爸 👨</h4>
  <p>
    通过<span class="code"> inject: ['count']</span> 获取
  </p>
  <p>count的值 <span class="code">this.count</span> : {{this.count}} </p>
  <hr>
  <Child2></Child2>
</div>
</template>
<script>
import Child2 from './child2.vue';
export default {
  name: "",
  components: {
    Child2
  },
  inject: ['count'],
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
