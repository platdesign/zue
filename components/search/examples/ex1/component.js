/**
 * Vue component class.
 *
 * @name 			ex1
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 6th 2017, 1:48:15 pm
 */


import Search from '../../';


export default {

	name: 'Without',

	components: {
		Search
	},

	data() {
		return {
			query: null
		}
	}
}
