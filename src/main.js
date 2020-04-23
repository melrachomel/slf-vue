import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

import Gallery from './components/Gallery.vue'
import GalleryAlbum from './components/GalleryAlbum.vue'
import GalleryHome from './components/GalleryHome.vue'

import Home from './components/Home.vue'
import vueHeadful from 'vue-headful'
import VueInstagram from 'vue-instagram'
Vue.use(VueInstagram)

Vue.component('vue-headful', vueHeadful)
Vue.component('home', Home)
Vue.component('contact', Contact)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [{
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/gallery',
    component: Gallery,
    children: [
      {
        path: '',
        component: GalleryHome,
        name: 'gallery',
      },
      {
        path: 'album',
        component: GalleryHome
      },
      {
        path: 'album/:id',
        component: GalleryAlbum
      }
    ]
  },
  // below works but is not nested
  // {
  //   path: '/gallery/album1',
  //   component: GalleryAlbum
  // }


]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
