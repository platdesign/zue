'use strict';

import autosize from 'autosize';


export default function(Vue, options) {


	Vue.directive('elastic', {
		bind: function(el, binding, vNode) {
			Vue.nextTick(() => autosize(el));
		},

		unbind: function(el, binding) {

		}
	});


}
