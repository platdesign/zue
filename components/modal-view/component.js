/**
 * Vue component class.
 *
 * @name 			modal-view
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 5th 2017, 10:16:26 am
 */



export default {

	name: 'modal-view',

	created() {
		if(this.$root.$refs.modalView) {
			throw new Error('ModalView already exists');
		}

		this.$root.$refs.modalView = this;
	},



	data() {
		return {
			visible: false
		}
	},



	methods: {

		close() {
			this.currentModal.close();
		},

		openModal(modal) {
			this.currentModal = modal;
			this.visible = true;
			modal.$on('render', () => this.renderCurrentModal());
			modal.$on('close', () => {
				this.visible = false;
				this.currentModal = false;
			});
			modal.$emit('open');

			this.$nextTick(() => this.$el.focus());
		},

		renderCurrentModal() {
			this.$slots.content = this.currentModal.$slots.default;
			this.$forceUpdate();
		}
	}

}
