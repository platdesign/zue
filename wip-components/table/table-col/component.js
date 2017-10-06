/**
 * Vue component class.
 *
 * @name 			table-col
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 20th 2017, 10:32:42 pm
 */



export default {

	name: 'zue-table-col',

	props: {
		label: {
			type: String,
			required: true
		},
		valueGetter: {
			type: [String, Function]
		}
	},

	created() {
		this.$parent.registerCol(this);
	},

	data() {
		return {
			item: {}
		}
	},

	methods: {
		getValue(item) {
			if(this.valueGetter instanceof Function) {
				return this.valueGetter(item);
			}
			return item[this.valueGetter];
		}
	}
}
