import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Elementui from 'element-ui'
import Elementui from 'elementui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
Vue.use(Elementui)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
