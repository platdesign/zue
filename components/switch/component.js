/**
 * Vue component class.
 *
 * @name 			switch
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 7th 2017, 10:11:20 am
 */

import Modal from '../modal';
import Btn from '../btn';
import device from '../../services/device';

export default {

	name: 'switch',

	components: {
		Modal,
		Btn
	},

	model: {
		prop: '_modelValue',
		event: 'input'
	},

	props: {
		value: true,
		_modelValue: true,

		cs: {
			type: String,
			default: 'primary'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		confirm: {
			type: [String, Boolean],
			default: false
		},
		id: true
	},

	subscriptions() {
		return {
			isMobile: device.isMobile$
		};
	},

	computed: {
		_cs() {
			return this.$css[`cs-${this.cs}`];
		},

		active() {
			if(this.controlsArray) {
				return this._modelValue.includes(this.value);
			} else if(!this.value) {
				return !!this._modelValue;
			}
		},


		controlsArray() {
			return Array.isArray(this._modelValue) && this.value;
		}
	},

	methods: {
		toggle() {
			if(this.disabled) {
				return;
			}

			if(this.confirm) {
				return this.$refs.confirmModal.open();
			}
			this.confirmChange();
		},

		confirmChange() {
			if(this.controlsArray) {
				if(this.active) {
					let index = this._modelValue.indexOf(this.value);
					if(index > -1) {
						this._modelValue.splice(index, 1);
					}
				} else {
					this._modelValue.push(this.value);
				}

				this.$emit('input', this._modelValue);
			} else {
				this.$emit('input', !this.active);
			}

			let modal = this.$refs.confirmModal;

			if(modal && modal.visible) {
				modal.close();
			}
		}
	}

}
