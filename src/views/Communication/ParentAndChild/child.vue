<template>
<div id="child">
  <h5>我是子组件</h5>
  <p>{{apple}}</p>
  <button class="ant-btn" @click='lessHandle'>通过props和$emit操作</button>
  <a-button @click='$parent.addhandle'>通过this.$parent.addhandle()操作</a-button>
</div>
</template>
<script>
export default {
  name: "child",
  props: ['apple'],
  data: () => ({
    isClick: false,
  }),
  mounted() {},
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
button {
    margin-right: 20px;
}
</style>
