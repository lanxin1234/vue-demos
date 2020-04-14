import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './styles/common.scss';
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import global from './global.js'
Vue.use(Antd);
Vue.use(VueCodemirror,
  /* {
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */
)
Vue.config.productionTip = false
Vue.prototype.global = global

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')