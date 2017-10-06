/**
 * Vue component class.
 *
 * @name 			input-wrap
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 26th 2017, 11:21:46 pm
 */



export default {

	name: 'input-wrap',

	props: {
		label: {
			type: String
		},
		help: {
			type: String
		}
	},

	data() {
		return {
			labelId: `id-${Date.now()}`
		}
	}

}
