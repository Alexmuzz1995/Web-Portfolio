import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vueSmoothScroll from 'vue2-smooth-scroll'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(vueSmoothScroll)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
