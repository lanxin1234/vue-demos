<template>
<div id="IntergenerationalPro">
  <p>隔代通信通过<span class="code">provide 和 inject</span>，访问祖先组件的数据，provide 和data同级，提示：provide 和 inject 绑定并不是可响应的。</p>
  <h2>我是爷爷 👴</h2>
  <p>
    我的数据 📒 {{count}}
    <span class="code">provide: {count: this.count}</span>
  </p>
  <p>
    <a-button @click='handle'>操作handle</a-button>
  </p>
  <hr>
  <Child></Child>
</div>
</template>
<script>
import Child from './child.vue';
export default {
  name: "IntergenerationalPro",
  components: {
    Child
  },
  data: () => ({
    count: 6
  }),
  provide() {
    return {
      count: this.count
    }
  },
  methods: {
    handle() {
      this.count--;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
