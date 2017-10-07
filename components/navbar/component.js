/**
 * Vue component class.
 *
 * @name 			navbar
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 7th 2017, 3:22:41 pm
 */



export default {

	name: 'navbar',

	props: {
		cs: {
			type: String,
			default: 'primary'
		},

		kind: {
			type: String,
			default: 'default'
		}
	}

}
