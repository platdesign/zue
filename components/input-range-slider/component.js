/**
 * Vue component class.
 *
 * @name 			input-range-slider
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 26th 2017, 11:05:12 pm
 */

import RangeSlider from '../range-slider';
import InputWrap from '../input-wrap';

export default {

	name: 'input-range-slider',

	components: {
		RangeSlider,
		InputWrap
	},

	props: {
		label: {
			type: String
		},
		help: {
			type: String
		},
		modelMin: true,
		modelMax: true,
		step: true,
		range: true
	},

	computed: {
		valMin: {
			get() {
				return this.modelMin;
			},
			set(val) {
				this.$emit('update:modelMin', val);
			}
		},
		valMax: {
			get() {
				return this.modelMax;
			},
			set(val) {
				this.$emit('update:modelMax', val);
			}
		}
	}

}
