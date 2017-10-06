/**
 * Vue component class.
 *
 * @name 			search
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 29th 2017, 8:49:14 am
 */

import 'vue-awesome/icons/times-circle';

export default {

	name: 'search',

	props: {
		value: true,
		placeholder: true
	},


	methods: {
		resetValue() {
			if(!this.value) {
				this.$el.children[0].blur();
			}
			this.$emit('input', '');


		},
		updateValue(val) {
			this.$emit('input', val);
		}
	},

	data() {
		return {
			hasFocus: false
		}
	}

}
