import Vue from 'vue'
import App from './App.vue'
import { NavbarPlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
