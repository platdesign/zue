/**
 * Vue component class.
 *
 * @name 			input-text
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 25th 2017, 5:43:13 pm
 */


import device from '../../services/device';
import InputWrap from '../input-wrap';


export default {

	name: 'input-text',

	components: {
		InputWrap
	},

	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		},
		label: {
			type: String,
			required: true
		},
		required: {
			type: Boolean,
			default: false
		},

		multiline: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		autocomplete: {
			type: String,
			default: 'off'
		},

		help: {
			type: String,
			default: null
		},
		step: true,
		autofocus: true
	},

	subscriptions() {
		return {
			isMobile: device.isMobile$
		}
	},

	computed: {

	}

}
