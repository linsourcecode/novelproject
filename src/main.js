import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
//�ޤJVueRouter
import VueRouter from 'vue-router'
//�ޤJ���Ѿ�
import router from './router'
//�ޤJecharts���
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

import axios from 'axios'





Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/' // ?�m���� URL
})

//�δ���
Vue.use(VueRouter)
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

