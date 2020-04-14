<template>
<div id="app">
  <a-layout id="layout-wrapper">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo title1">vue-demos</div>
      <a-menu theme="light" mode="inline" :defaultSelectedKeys="currentMenu" v-model='currentMenu'>
        <a-sub-menu :key="menu.key" v-for="menu in subMenu">
          <span slot="title">{{menu.name}}</span>
          <a-menu-item :key="index" v-for="(item,index) in menu.menuItem">
            <router-link :to="item.path">{{item.name}}</router-link>
          </a-menu-item>
        </a-sub-menu>

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
      currentMenu: ['sub1'],
      subMenu: [{
        key: 'sub1',
        name: '组件间通信',
        menuItem: [{
          name: '父子组件通信',
          path: '/parentAndChild'
        }, {
          name: '隔代组件通信',
          path: '/intergenerational'
        }, {
          name: '兄弟组件通信',
          path: '/brothers'
        }]
      }]
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
    .ant-menu-item {
        margin: 0;
    }
}
</style>
