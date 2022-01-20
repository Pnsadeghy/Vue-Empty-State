import i18n from "@/localization"
import App from './App.vue'
import store from '@/store'
import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
  store
}).$mount('#app')
