<template>
<div id="app">
  <a-layout id="layout-wrapper">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo title1">vue-demos</div>
      <a-menu theme="light" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">About</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="content-layout-header">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content class="layout-content-wrapper">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    #layout-wrapper {
        width: 100%;
        height: 100%;
    }
    .logo {
        height: 32px;
        line-height: 32px;
        text-align: center;
        background: #41b883;
        margin: 16px;
        color: #fff;
    }
    .layout-content-wrapper {
        margin: 24px 16px;
        padding: 24px;
        background: #fff;
        min-height: 280px;
        overflow-y: auto;
    }
    .ant-layout-sider {
        background: #fff;
    }
    .content-layout-header {
        background: #fff;
        padding-left: 40px;
    }
}
</style>
