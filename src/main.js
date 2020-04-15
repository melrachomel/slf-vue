import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Home from './components/Home.vue'
import vueHeadful from 'vue-headful'
import VueInstagram from 'vue-instagram'
Vue.use(VueInstagram)

Vue.component('vue-headful', vueHeadful)
Vue.component('home', Home)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/',
    component: Home,
    name: 'home' },
  { path: '/about',
    component: About,
    name: 'about'
  },
  { path: '/gallery',
    component: Gallery,
    name: 'gallery'
  },

]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
