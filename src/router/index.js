import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Planet from "@/views/Planet/index.vue"
import Door from "@/views/Door/index.vue"
import Frontend from "@/views/Frontend/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home', 
      component: Door
    },
    {
      path: '/planet',
      name: 'Planet',
      component: Planet
    },  
    {
      path: '/door',
      name: 'Door',
      component: Door
    },  
    {
      path: '/frontend',
      name: 'Frontend',
      component: Frontend
    },  
    // {
    //   path: '/create',
    //   name: 'Create',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Create/index.vue')
    // }
  ]
})

export default router
