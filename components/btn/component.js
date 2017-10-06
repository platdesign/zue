/**
 * Vue component class.
 *
 * @name 			btn
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 21st 2017, 7:35:05 pm
 */


import Modal from '../modal';
import 'vue-awesome/icons/spinner';


export default {

	name: 'btn',

	components: {
		Modal
	},

	props: {
		icon: {
			type: String
		},
		label: {
			type: String
		},
		type: {
			type: String,
			default: 'button'
		},
		cs: {
			type: String,
			default: 'primary'
		},
		confirm: {
			type: String
		},

		isPending: {
			type: Boolean,
			default: false
		},

		pendingIcon: {
			type: String,
			default: 'spinner'
		},
		to: true
	},

	data() {
		return {
			test: 123
		}
	},

	methods: {
		click() {
			if(this.confirm) {
				return this.$refs.confirmModal.open();
			}
			this.$emit('click');

			if(this.to) {
				let t = this.$router.push(this.to);
			}
		},
		confirmClick() {
			this.$refs.confirmModal.close();
			this.$emit('click');
		}
	}

}
