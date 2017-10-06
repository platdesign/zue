/**
 * Vue component class.
 *
 * @name 			input-tags
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 3rd 2017, 3:37:51 pm
 */

import Tags from '../tags';
import InputWrap from '../input-wrap';


export default {

	name: 'input-tags',

	components: {
		InputWrap,
		Tags
	},

	props: {
		value: {
			type: Array,
			required: true
		},
		help: {
			type: String,
			default: null
		},
		label: {
			type: String,
			required: true
		},
	}
}
