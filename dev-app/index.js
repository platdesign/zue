'use strict';



import Vue from 'vue';
import { Plugin } from '../';

Vue.use(Plugin);

import './global-styles';
import App from './app';

import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: '/components',
			name: 'components',
			component: App,
			props: true,
			children: App.routes
		},

		{
			path: '*',
			redirect: 'components'
		}
	]
});

new Vue({
	router,
	template: '<router-view />'
}).$mount('#app')




