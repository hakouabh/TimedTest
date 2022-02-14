import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from 'Components/Dashboard.vue'
import Login from 'Components/Login.vue'

const router =  createRouter({
  routes: [
    {
      path:'/',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
      name:'Dashboard'
    },
    {
      path:'/login',
      component: Login,
      meta: {
        isAuth: true,
      },
      name:'Login'
    }
  ],
    history: createWebHistory()
},
)
export default router;
