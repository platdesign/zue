/**
 * Vue component class.
 *
 * @name 			examples
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 7th 2017, 3:23:21 pm
 */


import Navbar from '../';


export default {

	name: 'examples',

	components: {
		Navbar
	},


	data() {
		return {
			activeA: 1,
			activeB: 5
		}
	}

}
