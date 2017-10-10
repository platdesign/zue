/**
 * Vue component class.
 *
 * @name 			examples
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 10th 2017, 9:05:59 am
 */


import Checkbar from '../';


export default {

	name: 'examples',

	components: {
		Checkbar
	},


	data() {
		return {
			stateObj: {
				a: false,
				b: false,
				c: true,
				d: false
			}
		}
	}
}
