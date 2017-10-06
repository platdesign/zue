/**
 * Vue component class.
 *
 * @name 			tab
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 10th 2017, 12:22:30 pm
 */



export default {

	name: 'tab',

	props: {
		label: String,
		icon: String
	},

	data() {
		return {
			isVisible: false
		}
	},

	mounted() {
		this.$parent.registerTab(this);
	}

}
