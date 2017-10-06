/**
 * Vue component class.
 *
 * @name 			address
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 1st 2017, 9:19:33 pm
 */

import EditableText from '../editable-text';

export default {

	name: 'z-address',

	components: {
		EditableText
	},

	props: {
		street: {
			type: String,
			default: ''
		},
		zip: {
			type: String,
			default: ''
		},
		city: {
			type: String,
			default: ''
		},
		country: {
			type: String,
			default: ''
		},
		state: {
			type: String,
			default: ''
		},
		readonly: {
			type: Boolean,
			default: false
		},
		streetId: true
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
