/**
 * Vue component class.
 *
 * @name 			foldable
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 5th 2017, 4:57:17 pm
 */



export default {

	name: 'foldable',

	props: {
		title: String,
		status: true
	},

	data() {
		return {
			localStatus: !!this.status
		}
	},

	computed: {
		_status: {
			get() {
				return this.status === undefined ? this.localStatus : this.status;
			},
			set(val) {
				if(this.status === undefined) {
					this.localStatus = val;
				} else {
					this.$emit('update:status', val);
				}
			}
		}
	},

	methods: {
		toggle() {
			this._status = !this._status;
		}
	}

}
