import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './icons' // icon

// element 
import '@/utils/element'

// 进度条
import '@/utils/permission'

// css 初始化样式
import '@/style/reset.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
