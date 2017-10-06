/**
 * Vue component class.
 *
 * @name 			app
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 6th 2017, 11:36:20 am
 */




const context = require.context('../../components', true, /^\.\/[A-Za-z-]*\/index\.*$/);
const components = context.keys().map(key => context(key).default);

export default {

	name: 'app',

	data() {
		return {
			components,

			activeComponent: null
		}
	},

	watch: {
		//activeComponent: n => console.log(n)
	}

}
