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

import ListItem from './list-item';

export default {

	name: 'zue-table',

	components: {
		ListItem
	},

	props: {
		data: {
			type: Array
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
		},
		itemLabel: {
			type: Array,
			default: () => ['Zeile', 'Zeilen']
		}
	},


	created() {

		// find default sort col
		// let col = this.config.cols.find(col => col.defaultSort);
		// if(col) {
		// 	this.toggleSort(col)
		// }

	},

	subscriptions() {

		const data$ = this.watch$('data').map(e => e || []);
		const searchQuery$ = this.watch$('searchQuery');

		const sortOptions$ = this.$createObservableMethod('setSortMethod').startWith(null);

		const _filteredData$ = rx.Observable.combineLatest(data$, searchQuery$, sortOptions$, (data, query, sort) => ({ data, query, sort }))
			.map(e => {
				if(e.query) {
					let needle = e.query.trim().toLowerCase();

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
		}

	},

	computed: {
		footerItemLabel() {
			if(this._filteredData.length === 1) {
				return this.itemLabel[0];
			}
			return this.itemLabel[1];
		}
	}

}
