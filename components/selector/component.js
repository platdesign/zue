/**
 * Vue component class.
 *
 * @name 			selector
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 6th 2017, 4:49:56 pm
 */



export default {

	name: 'selector',

	props: {
		value: true,
		options: {
			type: Array,
			default: () => []
		}
	},

	data() {
		return {
			isOpen: false
		}
	},

	methods: {
		select(item) {
			this.$emit('input', item);
			this.isOpen = false;
		},

		clickOutside() {
			if(this.isOpen) {
				this.isOpen = false;
			}
		}
	}
}
