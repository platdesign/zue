/**
 * Vue component class.
 *
 * @name 			checkbox
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 10th 2017, 12:19:47 pm
 */


import is from 'is';
import 'vue-awesome/icons/check';

export default {

	name: 'checkbox',

	model: {
		prop: 'model',
		event: 'input'
	},

	props: {
		model: true,
		value: true,
		size: {
			default: '1.2em'
		},
		id: true,
		cs: {
			type: String,
			default: 'primary'
		}
	},


	methods: {
		toggle() {

			if(is.array(this.model)) {
				let index = this.model.indexOf(this.value);

				if(index >= 0) {
					this.model.splice(index, 1);
				} else {
					this.model.push(this.value);
				}
				this.$emit('change', this.model);
				return;
			}


			if(is.object(this.model)) {

				this.model[this.value] = !this.model[this.value];
				this.$emit('change', this.model);
				return;
			}


			if(is.boolean(this.model)) {
				this.$emit('input', !this.model);
				this.$emit('change', this.model);
			}


		}
	},


	computed: {
		isActive() {

			if(is.array(this.model)) {
				return this.model.indexOf(this.value) >= 0;
			}

			if(is.object(this.model)) {
				return this.model[this.value];
			}

			if(is.boolean(this.model)) {
				return this.model;
			}

		}
	}
}
