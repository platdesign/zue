/**
 * Vue component class.
 *
 * @name 			tabs
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 10th 2017, 12:22:22 pm
 */



export default {

	name: 'tabs',

	props: {
		vertical: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			tabs: []
		}
	},

	mounted() {
		let first = this.tabs[0];

		if(first) {
			first.isVisible = true;
		}
	},

	methods: {
		registerTab(tabVm) {
			this.tabs.push(tabVm);
		},

		activateTab(tabVm) {
			this.tabs.forEach(t => t.isVisible = false);
			tabVm.isVisible = true;
		},

		isTabActive(tabVm) {
			return tabVm.isVisible;
		}
	}

}
