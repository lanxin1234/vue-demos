<template>
<div class="child2">
  <h3>我是孙子 😊</h3>
  如果我的 <span class="code">props: ['']</span>，将会是
  <p v-for="(fruit,key) in this.$attrs" :key="key" class="fruit-item">
    <span>{{fruit}}</span>
    <span>个</span>
    <span>{{getFruit(key)}}</span>
  </p>

  如果我的 <span class="code">props: ['banana']</span>，将会是
  <p class="fruit-item">我有 {{this.$attrs.apple}}个🍎</p>
  <p class="fruit-item">{{this.$attrs.pear}}个🍐</p>

  <p>我通过 <span class="code">this.$attrs</span> 接受水果</p>
  <span class="btn">
    <a-button @click='$listeners.appleHandle(false)'>吃一个苹果this.$listeners.appleHandle(false)</a-button>
  </span>
  <span>
    <a-button @click='$listeners.appleHandle(true)'>添加一个苹果this.$listeners.appleHandle(true)</a-button>
  </span>
</div>
</template>
<script>
export default {
  name: "child2",
  props: [''],
  data: () => ({

  }),
  created() {},
  methods: {
    getFruit(key) {
      switch (key) {
        case 'apple':
          return '🍎'
          break;
        case 'banana':
          return '🍌'
          break;
        case 'pear':
          return '🍐'
          break;
        default:

      }
    },
  }
}
</script>
<style lang="scss" scoped>
.btn {
    margin-right: 20px;
}
.fruit-item {
    display: inline-block;
}
</style>
