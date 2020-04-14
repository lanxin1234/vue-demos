<template>
<div class="child">
  <h4>我是爸爸 👨</h4>
  <div class="fruitbox">
    <p>父亲给了我</p>
    <p v-for="(fruit,key) in this.$attrs" :key="key">
      <span>{{fruit}}</span>
      <span>个</span>
      <span>{{getFruit(key)}}</span>
    </p>
    <span class="clear"></span>
  </div>
  <p>我通过 <span class="code">this.$attrs</span> 接受水果</p>
  <div class="">
    <p>
      <span>把所有的水果给我儿子 😊:</span>
      <p>
        <codemirror v-model="code1" :options="global.cmOptions" />
      </p>
    </p>
    <span class="btn">
      <a-button @click='eatApple'>吃一个苹果this.$listeners.appleHandle(false)</a-button>
    </span>
    <span>
      <a-button @click='addApple'>添加一个苹果this.$listeners.appleHandle(true)</a-button>
    </span>
  </div>
  <hr />
  <Child2 v-bind='$attrs' v-on='$listeners'></Child2>
</div>
</template>
<script>
import Child2 from './child2.vue';
export default {
  name: "child",
  components: {
    Child2
  },
  data: () => ({
    code1: "<Child2 v-bind='$attrs' v-on='$listeners'></Child2>",
    code2: "<Child2 v-bind='$attrs' v-on='$listeners'></Child2>"
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
    eatApple() {
      this.$listeners.appleHandle(true)
    },
    addApple() {
      this.$listeners.appleHandle(false)
    }
  }
}
</script>
<style lang="scss" scoped>
textarea {
    width: 100%;
    height: 40px;
    line-height: 56px;
}
.btn {
    display: inline-block;
    margin-right: 20px;
}
</style>
