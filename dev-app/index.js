'use strict';



import Vue from 'vue';
import { Plugin } from '../';

Vue.use(Plugin);

import './global-styles';
import App from './app';



new Vue({
	components: {
		App
	},
	template: '<App />'
}).$mount('#app')




