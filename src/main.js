import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//引入echarts文件
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

import axios from 'axios'





Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/' // ?置全局 URL
})

//用插件
Vue.use(VueRouter)
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

