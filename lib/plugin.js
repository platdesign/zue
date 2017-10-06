'use strict';


import VueRx from 'vue-rx';
import rx from 'rx';
import Fa from 'vue-awesome/components/Icon';

// import Fastclick from 'fastclick';
// Fastclick.attach(window.document.body);

import VueInputAutowidth from 'vue-input-autowidth'

import ClickOutside from '../directives/click-outside';
import Elastic from '../directives/elastic';
import ViwComponent from '../components/viw';


export default function Plugin(Vue, options) {


	Vue.use(ClickOutside);
	Vue.use(Elastic);

	Vue.mixin({
		created() {
			if(!this.watch$) {
				this.watch$ = (expression, options = { immediate: true }) => {

					if(options === true) {
						options = { immediate: true, deep: true };
					}

					return this.$watchAsObservable(expression, options)
						.pluck('newValue')
						.shareReplay(1);
				}
			}
		}
	});

	Vue.use(VueRx, rx);

	Vue.use(VueInputAutowidth);


	Vue.component('viw', ViwComponent);
	Vue.component('fa', Fa);



	Vue.filter('appendNumerus', (value, options) => {

		value = value || 0;

		let _sanitizedValue = Number(value);

		let plural = options[1];
		let singular = options[0];
		let nullular = options[2] || options[1] || options[0];

		let result = `${value} `;

		if(_sanitizedValue < 0) {
			result += plural;
		}
		if(_sanitizedValue === 0) {
			result += nullular;
		} else if(_sanitizedValue === 1) {
			result += singular;
		} else if(_sanitizedValue > 1) {
			result += plural;
		}

		return result;

	});





};
