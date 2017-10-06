/**
 * Vue component class.
 *
 * @name 			default
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 6th 2017, 4:50:31 pm
 */


import Selector from '../';

export default {

	name: 'Default',

	components: {
		Selector
	},

	data() {
		return {
			model: null,
			options: ['Peter', 'Bob', 'Andrew']
		}
	}

}
