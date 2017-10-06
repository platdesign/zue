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
import ComponentView from './component-view';


export default {

	name: 'app',

	routes: [
		{
			path: ':componentName',
			name: 'component',
			props: true,
			component: ComponentView
		}
	],

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
