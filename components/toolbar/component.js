/**
 * Vue component class.
 *
 * @name 			toolbar
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 20th 2017, 12:39:29 pm
 */



export default {

	name: 'toolbar',

	props: {
		title: {
			type: String,
			required: false,
			default: ''
		},

		icon: {
			type: String,
			required: false,
			default: null
		}
	}

}
