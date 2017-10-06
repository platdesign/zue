'use strict';

import TabsComponent from './components/tabs';
import TabComponent from './components/tab';


export default function(Vue) {
	Vue.component('tabs', TabsComponent);
	Vue.component('tab', TabComponent);
}
