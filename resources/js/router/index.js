import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'Components/Dashboard.vue'
import Login from 'Components/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: "*", redirect: '/',},
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
    mode:'history'
},
  )
