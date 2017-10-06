'use strict';

import BootScreen from './bootscreen';

import $bootTasks from '../services/boot-tasks';




export default async function boot(Vue, config) {

	const mountEl = document.querySelector(config.mount);

	const bootScreen = new Vue(BootScreen);

	bootScreen.$mount();
	mountEl.appendChild(bootScreen.$el);

	try {
		await $bootTasks.run(bootScreen);
	} catch(err) {
		console.error(err)
		return bootScreen.failed(err);
	}

	bootScreen.$destroy();
	mountEl.removeChild(bootScreen.$el);


	const app = new Vue(config.app);
	app.$mount();
	mountEl.appendChild(app.$el);

}
