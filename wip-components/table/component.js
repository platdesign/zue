/**
 * Vue component class.
 *
 * @name 			table
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 20th 2017, 9:57:26 pm
 */

import rx from 'rx';
import fuzzysearch from 'fuzzysearch';

import ZueTableCol from './table-col';

export default {

	name: 'zue-table',

	components: {
		ZueTableCol
	},

	props: {
		config: {
			type: Object,
			required: true
		},
		data: {
			type: Array,
			required: true
		},
		searchQuery: {
			type: String,
			default: null
		},
		itemHaystack: {
			type: Function,
			default: item => Object.keys(item).map(key => String(item[key]).toLowerCase()).join(' ')
		},

		itemFilter: {
			type: Function
		}
	},


	created() {

		// find default sort col
		let col = this.config.cols.find(col => col.defaultSort);
		if(col) {
			this.toggleSort(col)
		}

	},

	subscriptions() {

		const data$ = this.$watchAsObservable('data', { immediate: true }).pluck('newValue');
		const searchQuery$ = this.$watchAsObservable('searchQuery', { immediate: true }).pluck('newValue')

		const sortOptions$ = this.$createObservableMethod('setSortMethod').startWith(null);

		const _filteredData$ = rx.Observable.combineLatest(data$, searchQuery$, sortOptions$, (data, query, sort) => ({ data, query, sort }))
			.map(e => {
				if(e.query) {
					let needle = e.query.toLowerCase();

					return e.data.filter(item => {
						if(this.itemFilter) {
							return this.itemFilter(item, e.data);
						}

						let haystack = this.itemHaystack(item);
						return fuzzysearch(needle, haystack)
					});
				}

				if(e.sort) {

					let sorted = [].concat(e.data).sort(e.sort.fn);

					if(e.sort.desc) {
						sorted.reverse();
					}

					return sorted;
				}

				return e.data;
			})


		return {
			_sort: sortOptions$,
			_filteredData: _filteredData$
		}
	},


	methods: {

		defaultSortMethod(key) {
			return (a, b) => {
				if(a[key] < b[key]) return -1;
				if(a[key] > b[key]) return 1;
				return 0;
			}
		},

		toggleSort(col) {
			if(col.sort) {
				let sortMethod = this.defaultSortMethod(col.sort || col.slot);

				this.setSortMethod({
					col,
					fn: sortMethod,
					desc: this._sort ? !this._sort.desc : false
				});
			}
		},

		isColVisible(col) {
			if(col.isVisible instanceof Function) {
				return col.isVisible();
			}

			return true;
		}
	}

}
