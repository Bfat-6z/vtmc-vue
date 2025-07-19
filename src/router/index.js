
import Home from '@/view/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: () => import('../view/About.vue'),
    }
      
  ],
})

export default router
