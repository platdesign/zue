/**
 * Vue component class.
 *
 * @name 			input-address
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 1st 2017, 9:36:44 pm
 */

import ZAddress from '../address';
import InputWrap from '../input-wrap';

export default {

	name: 'input-address',

	components: {
		ZAddress,
		InputWrap
	},

	props: {
		street: true,
		zip: true,
		city: true,
		country: true,
		state: true,
		editable: true,
		label: true,
		help: true,
		readonly: true
	},

	computed: {
		_street: {
			get() { return this.street; },
			set(val) { this.$emit('update:street', val); }
		},
		_zip: {
			get() { return this.zip; },
			set(val) { this.$emit('update:zip', val); }
		},
		_city: {
			get() { return this.city; },
			set(val) { this.$emit('update:city', val); }
		},
		_country: {
			get() { return this.country; },
			set(val) { this.$emit('update:country', val); }
		},
		_state: {
			get() { return this.state; },
			set(val) { this.$emit('update:state', val); }
		},
	}

}
