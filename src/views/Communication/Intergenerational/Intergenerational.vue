<template>
  <div id="intergenerational">
    <p>隔代通信通过<span class="code">$attrs 和 $listener</span></p>
    <h2>我是爷爷 👴</h2>
    <div class="fruitbox">
      <p>我有 {{apple}}个🍎</p>
      <p>{{banana}}个🍌</p>
      <p>{{pear}}个🍐</p>
      <span class="clear"></span>
    </div>
    <p>我通过以下方法把水果传给我儿子 👨</p>
    <codemirror v-model="code" :options="global.cmOptions" />
    <hr />
    <Child :apple='apple' :banana='banana' :pear='pear' @appleHandle='appleHandle'></Child>
  </div>
</template>
<script>
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/theme/base16-dark.css'
  import Child from './child.vue';
  export default {
    name: "Intergenerational",
    components: {
      Child
    },
    data: () => ({
      apple: 5,
      banana: 6,
      pear: 7,
      code: "<Child :apple='apple' :banana='banana' :pear='pear' @appleHandle='appleHandle''></Child>"
    }),
    created() {},
    methods: {
      appleHandle(value) {
        if (value)
          this.apple++;
        else
          this.apple--;
      }
    }
  }
</script>
<style lang="scss">
  .code {
    display: inline-block;
    padding: 0 8px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
  }

  .fruitbox {
    p {
      float: left;
      margin-right: 10px;
    }

    .clear {
      clear: both;
    }
  }

  .vue-codemirror {
    display: inline-block;
  }

  .CodeMirror {
    display: inline-block;
    padding: 6px;
    border-radius: 6px;
    padding: 0 6px;
    border: 1px solid #eee;
    height: auto;
  }

  .CodeMirror-scroll {
    height: auto;
    overflow-y: hidden;
    overflow-x: auto;
  }
</style>