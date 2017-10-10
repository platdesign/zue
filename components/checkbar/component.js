/**
 * Vue component class.
 *
 * @name 			checkbar
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 10th 2017, 9:05:09 am
 */


import Navbar from '../navbar';

export default {

	name: 'checkbar',

	components: {
		Navbar
	},

	props: {
		value: {
			type: Object
		},

		labels: {
			type: Object
		},

		kind: true,
		cs: true
	},


	computed: {
		items() {
			return Object.keys(this.value).map(key => ({
				key,
				label: this.labels ? this.labels[key] : null,
				value: this.value[key],
				slotName: `item-${key}`
			}));
		}
	},


	methods: {
		toggleItem(item) {
			this.value[item.key] = !this.value[item.key];
		}
	}
}
