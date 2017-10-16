/**
 * Vue component class.
 *
 * @name 			elastic-header
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 12th 2017, 10:48:21 am
 */

import rx from 'rx';


export default {

	name: 'elastic-header',

	subscriptions() {
		return {

			drag: rx.Observable.merge(

				this.$createObservableMethod('startDrag')
					.map(start => acc => {
						acc.start = start;
						acc.move = null;
						acc.end = null;
					}),

				this.$createObservableMethod('moveDrag')
					.map(val => acc => acc.move = val),

				this.$createObservableMethod('stopDrag')
					.map(val => acc => acc.end = val),

			)
			.scan((acc, fn) => { fn(acc); return acc; }, {})
			.filter(() => this.$el.scrollTop === 0)
			.map(e => {

				let move;

				if(e.start && !e.move && !e.end) {
					console.log('start');
				} else if(e.start && e.move && !e.end) {
					//console.log('move');

					if(e.move.type === 'touchmove') {
						move = e.move.targetTouches[0].clientY - e.start.targetTouches[0].clientY;
					} else if(e.move.type === 'mousemove') {
						move = e.move.clientY - e.start.clientY;
					}



				} else if(e.start && e.move && e.end) {
					console.log('end');

					e.start = null;
					e.move = null;
					e.end = null;
				}

				return move;
			})
		}
	}

}
