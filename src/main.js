import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'
import './plugins/antDesignVueCommon'
import './styles/resetUI.less'
import './utils/request'

// Vue.use(antd)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
