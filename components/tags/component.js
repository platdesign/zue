/**
 * Vue component class.
 *
 * @name 			tags
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 30th 2017, 6:07:36 pm
 */


import 'vue-awesome/icons/times-circle';

export default {

	name: 'tags',

	props: {
		value: {
			type: Array,
			default: () => []
		},
		placeholder: {
			type: String
		},
		readable: {
			type: Boolean,
			default: false
		},
		id: true
	},


	data() {
		return {
			inputLabel: null
		}
	},



	methods: {
		enterEvent(e) {
			if(this.inputLabel && this.inputLabel.length) {
				e.preventDefault();
			}

			this.addCurrentInput();
		},

		addCurrentInput() {
			if(this.value.indexOf(this.inputLabel) === -1) {
				if(this.inputLabel) {
					if(this.inputLabel = String(this.inputLabel).trim()) {
						this.value.push(this.inputLabel);
						this.$emit('input', this.value);
					}

				}
			}
			this.inputLabel = null;
		},

		removeItem(index) {
			this.value.splice(index, 1);
			this.$emit('input', this.value);
		},

		removeLast() {
			if(!this.inputLabel) {
				this.value.splice(-1);
				this.$emit('input', this.value);
			}
		}
	}

}
