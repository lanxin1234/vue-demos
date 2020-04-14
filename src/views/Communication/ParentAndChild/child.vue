<template>
<div id="child">
  <h5>我是子组件</h5>
  <p>{{apple}}</p>
  <button class="ant-btn" @click='lessHandle'>通过props和$emit操作</button>
</div>
</template>
<script>
export default {
  name: "child",
  props: ['apple'],
  data: () => ({
    isClick: false,
  }),
  methods: {
    lessHandle() {
      this.isClick = true;
      this.$emit('decreasehandle')
    },
    addHandle() {
      this.$emit('addhandle')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
