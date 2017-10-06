/**
 * Vue component class.
 *
 * @name 			editable-text
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 28th 2017, 1:09:29 pm
 */


export default {

	name: 'editable-text',

	props: {
		value: {
			type: String,
			required: true
		},
		readonly: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String
		},
		id: true
	},

	computed: {
		showEditor() {
			return this.editable && this.editEnabled;
		}
	},

	data() {
		return {
			editEnabled: false
		}
	},

	computed: {
		model: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			}
		}
	}

}
