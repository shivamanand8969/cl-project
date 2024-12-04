import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView  from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ServiceView from '@/views/ServiceView.vue'
import computerRepair from '@/components/service/computerRepair.vue'
import Chuplevel from '@/components/service/Chuplevel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path : '/about',
      name: 'about',
      component : AboutView
    },
    {
      path : "/contact",
      name : "contact",
      component : ContactView
    },
    {
      path : "/service",
      name : "service",
      component : ServiceView
    },
    {
      path:"/computer-repair",
      name : "Computer Repair",
      component : computerRepair
    },
    {
      path : "/chip-level-daignostic"
    }

  ]
})

export default router
