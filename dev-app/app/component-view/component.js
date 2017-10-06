/**
 * Vue component class.
 *
 * @name 			component-view
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 6th 2017, 8:17:45 pm
 */



export default {

	name: 'component-view',

	props: {
		componentName: true
	},

	computed: {
		activeComponent() {
			return this.$parent.components.find(c => c.name === this.componentName);
		}
	}

}
