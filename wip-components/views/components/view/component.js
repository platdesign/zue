/**
 * Vue component class.
 *
 * @name 			view
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 9th 2017, 3:38:30 pm
 */



export default {

	name: 'viw',

	props: {
		split: {
			type: String
		},
		collapse: {
			type: Boolean,
			default: false
		},
		stretch: {
			type: Boolean,
			default: false
		},
		scrollable: {
			type: Boolean,
			default: false
		},
		spaced: {
			type: String,
			default: '0'
		}
	},

	computed: {
		style() {
			return {
				[this.$css.component]: true,
				[this.$css.splitRows]: this.split==='rows',
				[this.$css.splitCols]: this.split==='cols',
				[this.$css.collapse]: this.collapse === true,
				[this.$css.stretch]: this.stretch === true,
				[this.$css.scrollable]: this.scrollable === true,
				[this.$css['spaced-'+this.spaced]]: true,
			}
		}
	}
}
