/**
 * Vue component class.
 *
 * @name 			radiobar
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 10th 2017, 10:47:03 am
 */


import Navbar from '../navbar';


export default {

	name: 'radiobar',

	components: {
		Navbar
	},

	// model: {
	// 	prop: '_modelValue',
	// 	event: 'input'
	// },


	props: {
		value: true,
		cs: true,
		kind: true,
		options: true,
		readable: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {

		}
	},

	computed: {
		items() {
			return Object.keys(this.options).map(key => ({
				key,
				label: this.options ? this.options[key] : null,
				value: key,
				slotName: `item-${key}`
			}));
		}
	},


	methods: {
		selectItem(item) {
			if(!this.readable) {
				if(this.value !== item.value) {
					this.$emit('input', item.value);
					this.$emit('change', item.value);
				}
			}
		}
	}

}
