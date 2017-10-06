/**
 * Vue component class.
 *
 * @name 			selector
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 6th 2017, 4:49:56 pm
 */


import Search from '../search';
import fuzzysearch from 'fuzzysearch';


export default {

	name: 'selector',

	components: {
		Search
	},

	props: {
		value: true,
		options: {
			type: Array,
			default: () => []
		},
		searchable: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			isOpen: false,
			searchQuery: '',
			optionFocusIndex: 0
		}
	},

	computed: {
		filteredOptions() {
			if(!this.searchable) {
				return this.options;
			}

			return this.options.filter(item => {
				let haystack = '';

				if(this.itemHaystack) {

				} else {
					if(typeof item === 'string') {
						haystack = item.toLowerCase();
					}
				}

				return fuzzysearch(this.searchQuery.toLowerCase(), haystack);

			});
		}
	},

	watch: {
		isOpen: function() {
			this.searchQuery = '';
			this.$nextTick(() => this.scrollToOptionFocusIndex());
		},
		optionFocusIndex: 'scrollToOptionFocusIndex'
	},

	methods: {
		select(item) {
			this.$emit('input', item);
			this.isOpen = false;
		},

		selectCurrentFocusElement() {
			let index = this.optionFocusIndex;
			let item = this.filteredOptions[index];
			this.select(item);
		},

		scrollToOptionFocusIndex() {
			let els = this.$el.querySelectorAll(`.${this.$css.option}`);
			let el = els[this.optionFocusIndex];
			if(el) {
				el.scrollIntoView();
			}
		},

		focusSelf() {
			this.$el.focus();
		},

		clickOutside() {
			if(this.isOpen) {
				this.isOpen = false;
			}
		},

		selectNext() {
			if(!this.isOpen) {
				return this.isOpen = true;
			}
			if((this.optionFocusIndex + 1) > this.filteredOptions.length - 1) {
				this.optionFocusIndex = 0;
			} else {
				this.optionFocusIndex++;
			}
		},

		selectPrev() {
			if(!this.isOpen) {
				return this.isOpen = true;
			}

			if((this.optionFocusIndex - 1) < 0) {
				this.optionFocusIndex = Math.max(0, this.filteredOptions.length - 1);
			} else {
				this.optionFocusIndex--;
			}
		}
	}
}
