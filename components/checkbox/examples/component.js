/**
 * Vue component class.
 *
 * @name 			examples
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 10th 2017, 12:20:08 pm
 */

import Checkbox from '../';

export default {

	name: 'examples',

	components: {
		Checkbox
	},

	data() {
		return {
			modelA: false,
			modelB: ['b'],
			modelC: {
				a: false,
				b: true,
				c: false
			},

			modelD: true
		}
	}

}
