/**
 * Vue component class.
 *
 * @name 			bootscreen
 * @project 	p17-0007-motion-screen
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 13th 2017, 12:52:37 pm
 */

import 'vue-awesome/icons/check-circle';
import 'vue-awesome/icons/cog';
import 'vue-awesome/icons/exclamation-circle';


export default {

	name: 'bootscreen',

	// Place your subviews here
	// views: []

	created() {

	},

	data() {
		return {
			tasks: [],
			error: false
		}
	},

	watch: {

	},

	computed: {
		currentTask() {
			if(this.tasks.length) {
				return this.tasks[this.tasks.length-1];
			}
		}
	},
	methods: {
		retryBoot() {
			window.location.reload()
		},
		getTaskClasses(task) {
			return {
				'status--running': task.status === 'running',
				'status--done': task.status === 'done',
				'status--failed': task.status === 'failed'
			}
		},

		setCurrentTask(task) {

			let _task = Object.assign({
				status: 'running'
			}, task);

			if(this.currentTask) {
				this.currentTask.status = 'done';
			}

			this.tasks.push(_task);
		},

		failed() {
			if(this.currentTask) {
				this.currentTask.status = 'failed';
			}
			this.error = true;
		}
	},

}
