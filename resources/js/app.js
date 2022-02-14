require('./bootstrap');
import { createApp } from 'vue'
import App from 'Components/App.vue'
import router from './router'
import { store } from 'Store/store.js'

router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('access_token')
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (token) {
			next()
		} else {
			next({
				name: 'Login',
			})
		}
	} else {
		next()
	}
	if (to.matched.some(record => record.meta.isAuth)) {
		if (token) {
			next({
				name: 'Dashboard',
			})
		} else {
			next()
		}
	} else {
		next() 
	}
})
createApp(App)
.use(store)
.use(router)
.mount('#app')