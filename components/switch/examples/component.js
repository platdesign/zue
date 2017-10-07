/**
 * Vue component class.
 *
 * @name 			examples
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 7th 2017, 10:12:23 am
 */


import ZSwitch from '../';

export default {

	name: 'examples',

	components: {
		ZSwitch
	},

	data() {
		return {
			switchA: false,
			switchB: false,
			switchC: false,
			switchD: false,
			switchE: false,
			switchF: false,

			array: ['Hans', 'Peter']
		}
	}

}
