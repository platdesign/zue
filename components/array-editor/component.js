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

import Selector from '../selector';

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
			type: [String, Function]
		},
		pendingDelete: {
			type: Boolean
		}
	},

	components: {
		Selector,
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
	},

	computed: {
		deleteConfirmer() {
			return (item) => {
				if (!this.confirmDelete) {
					return false;
				}

				if (typeof this.confirmDelete === 'function') {
					return this.confirmDelete(item);
				}

				return this.confirmDelete;
			}
		}
	}

}
