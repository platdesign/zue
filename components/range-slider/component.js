/**
 * Vue component class.
 *
 * @name 			range-slider
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 26th 2017, 11:04:02 pm
 */



import rx from 'rx';



function roundByStepSize(step, val) {
	let factor = 1 / step;
	return Math.round(val * factor) / factor;
}


export default {

	name: 'range-slider',

	props: {
		range: {
			type: Array,
			default: () => ([0, 100])
		},
		step: {
			type: Number,
			default: 1
		},
		modelMin: {
			type: Number,
			default() {
				return roundByStepSize(this.step, this.range[0] + (this.range[1] - this.range[0]) / 4);
			}
		},
		modelMax: {
			type: Number,
			default() {
				return roundByStepSize(this.step, this.range[0] + ((this.range[1] - this.range[0]) / 4) * 3);
			}
		}
	},


	subscriptions() {
		const modelMin$ = this.watch$('modelMin');
		const modelMax$ = this.watch$('modelMax');

		return {
			valMin: modelMin$,
			valMax: modelMax$,
		}
	},

	computed: {
		totalSteps() {
			return (this.range[1]-this.range[0]) / this.step;
		}
	},

	methods: {

		roundByStepSize(val) {
			return roundByStepSize(this.step, val);
		},

		updateMin(e) {
			let val = e.target.valueAsNumber;
			this.$emit('update:modelMin', this.roundByStepSize(val));

			if(val >= this.valMax) {
				this.$emit('update:modelMax', this.roundByStepSize(val + this.step));
			}

		},
		updateMax(e) {
			let val = e.target.valueAsNumber;
			this.$emit('update:modelMax', this.roundByStepSize(val));

			if(val <= this.valMin) {
				this.$emit('update:modelMin', this.roundByStepSize(val - this.step));
			}

		}
	}




}
