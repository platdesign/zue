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
			tabs: [],
			activeTab: null
		}
	},

	mounted() {
		let first = this.tabs[0];

		if(first) {
			this.activateTab(first);
		}
	},

	methods: {
		registerTab(tabVm) {
			let existing = this.tabs.find(t => t.label === tabVm.label);

			if(!existing) {
				this.tabs.push(tabVm);
			} else {
				let index = this.tabs.indexOf(existing);

				if(index > -1) {
					this.tabs[index] = tabVm;

					if(this.activeTab === existing) {
						this.activateTab(tabVm);
					}
				}
			}
		},

		activateTab(tabVm) {
			this.activeTab = tabVm;
		},

		isTabActive(tabVm) {
			return tabVm === this.activeTab;
		}
	}

}
