import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes =
[
	{
		'path'		:	'/',
		'name'		:	'Home',
		'component'	:	() => import('../views/Home.vue')
	},

	{
		'path'		:	'/Login',
		'name'		:	'Login',
		'component'	:	() => import('../views/Login.vue')
	},

	{
		'path'		:	'/Register',
		'name'		:	'Register',
		'component'	:	() => import('../views/Register.vue')
	},

	{
		'path'		:	'/Notes',
		'name'		:	'Notes',
		'component'	:	() => import('../views/Notes.vue')
	}
]

const router = new VueRouter({ routes })

export default router