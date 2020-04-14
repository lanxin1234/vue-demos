<template>
<div id="parentAndChild" ref='parent'>
  <h3>我是父组件</h3>
  <button class="ant-btn" @click='childHandle'>通过refs操作子组件</button>
  <hr />
  <child :apple='apple' @decreasehandle='decreasehandle' @addhandle='addhandle' ref='child' />
</div>
</template>
<script>
import child from './child.vue';
export default {
  name: "ParentAndChild",
  components: {
    child
  },
  data: () => ({
    apple: 5,
    banana: 6
  }),
  methods: {
    decreasehandle() {
      this.apple--;
    },
    addhandle() {
      this.apple++;
    },
    childHandle() {
      let child = this.$refs.child;
      child.addHandle()
    }
  },
  mounted() {
    this.$nextTick(() => {

    })
  }
}
</script>
<style lang="scss" scoped>
button {
    border: 1px solid #e8e8e8;
}
</style>
