import Vue from 'vue'
import App from './index.vue'

Vue.config.productionTip = false

document.title = 'page2'

new Vue({
  render: h => h(App)
}).$mount('#app')