import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import about from '@/components/about'
import note from '@/components/note'
import api from '@/components/api'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/note',
      name: 'note',
      component: note
    },
    {
      path: '/api',
      name: 'api',
      component: api
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
