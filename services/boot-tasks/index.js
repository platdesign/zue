'use strict';


const tasks = [];

export default {
	add(task) {
		if(Array.isArray(task)) {
			tasks.push(...task);
		} else {
			tasks.push(task);
		}
	},
	async run(bootScreen) {

		return tasks.reduce((promise, task) => {

			return promise.then(() => {
				bootScreen.setCurrentTask(task);
				return Promise.resolve().then(() => task.task())
			});

		}, Promise.resolve());

	}
}
