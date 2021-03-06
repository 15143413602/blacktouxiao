import Vue from 'vue'
import App from './App.vue'
import './permission'// 引用權限模塊
import router from './router'

import component from './components/index.js'
import Elementui from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import axios from './utils/request'

Vue.prototype.$axios = axios
Vue.use(Elementui)
Vue.use(component)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
