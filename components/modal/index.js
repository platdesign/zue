/**
 * Vue component class.
 *
 * @name 			modal
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 5th 2017, 10:21:05 am
 */



export default {

	name: 'modal',

	abstract: true,

	render(a, b) {
		if(this.visible) {
			this.$emit('render');
		}
	},

	props: {
		name: {
			type: String,
			required: true
		},
		modalClass: {
			type: String
		}
	},

	created() {
		this.$parent.$refs[this.name] = this;
	},

	computed: {
		modalView() {
			return this.$root.$refs.modalView;
		}
	},

	data() {
		return {
			visible: false
		}
	},

	methods: {
		open() {
			this.$once('open', () => this.visible = true);
			this.modalView.openModal(this);
		},

		close() {
			this.visible = false
			this.$emit('close');
		}
	}

}
