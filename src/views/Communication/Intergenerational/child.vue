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
      <a-button type='primary'>我想把所有的水果给我儿子 😊</a-button>

    </p>
    <p>
      <a-button type="danger">我只想把苹果和梨给我儿子 😊</a-button>
    </p>
    <p>
      <a-button>我想把所有的水果给我儿子 😊</a-button>
    </p>
  </div>
  <hr />
  <Child2></Child2>
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

  }),
  created() {
    //do something after creating vue instance
    console.log('this.$attrs', this.$attrs);
  },
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
</style>
