/**
 * Vue component class.
 *
 * @name 			array-editor
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 28th 2017, 7:40:08 pm
 */


import Btn from '../btn';

import 'vue-awesome/icons/plus';
import 'vue-awesome/icons/trash-o';

export default {

	name: 'array-editor',

	props: {
		value: {
			type: Array
		},
		suggestions: {
			type: Array,
			default: () => []
		},
		confirmDelete: {
			type: String
		},
		pendingDelete: {
			type: Boolean
		}
	},

	components: {
		//UiSelect,
		Btn
	},

	data() {
		return {
			currentItem: null,
			searchQuery: null,
		}
	},

	methods: {
		addCurrent() {
			this.$emit('add', this.currentItem);
			this.currentItem = null;
			this.searchQuery = null;
		}
	}

}
