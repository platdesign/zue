/**
 * Vue component class.
 *
 * @name 			list-item
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 21st 2017, 11:31:36 am
 */

import device from '../../../services/device';
import rx from 'rx';



export default {

	name: 'zue-list-item',

	domStreams: ['touchStart$', 'touchMove$', 'touchEnd$'],

	subscriptions() {

		return {

			isMobile: device.isMobile$,

			touching: rx.Observable.merge(
				rx.Observable.of(() => true),

				this.touchStart$.pluck('event')
					.map(start => acc => {
						acc.start = start;
						acc.move = null;
						acc.end = null;
					}),

				this.touchMove$.pluck('event')
					.map(val => acc => acc.move = val),

				this.touchEnd$.pluck('event')
					.map(val => acc => acc.end = val)
			)
			.scan((acc, fn) => { fn(acc); return acc; }, { res: { active: false, move: 0, open: false } })
			.map(e => {

				e.res = Object.assign({}, e.res);

				if(e.start && !e.move && !e.end) {
					e.res.active = true;
					e.type = null;

					//console.log('start')
				} else if(e.start && e.move && !e.end) {
					//console.log('move');
					//console.log(e.start)

					let moveX = e.move.targetTouches[0].clientX - e.start.targetTouches[0].clientX;
					let moveY = e.move.targetTouches[0].clientY - e.start.targetTouches[0].clientY;

					let absMoveX = Math.abs(moveX);
					let absMoveY = Math.abs(moveY);


					let minDistance = 10;

					if(!e.type) {
						if(absMoveX > absMoveY) {
							if(absMoveX >= minDistance) {
								e.type = 'x';
							}
						} else {
							if(absMoveY >= minDistance) {
								e.type = 'y';
							}
						}
					}

					if(e.type === 'x') {
						e.move.preventDefault();

						let maxDistance = this.mainWidth*2/3;

						if(e.res.open) {
							if(moveX > 0) {
								maxDistance += this.swipeNavWidth;
							} else {
								maxDistance -= this.swipeNavWidth;
							}
						}

						if(absMoveX < maxDistance) {
							e.res.move = moveX;
						} else {
							e.res.move = moveX < 0 ? 0 - maxDistance : maxDistance;
						}

						if(!e.res.open && moveX > 0) {
							e.res.move = 0;
						}

					}

				} else if(e.start && e.move && e.end) {

					let traveledX = e.move.targetTouches[0].clientX - e.start.targetTouches[0].clientX;
					let traveledY = e.move.targetTouches[0].clientY - e.start.targetTouches[0].clientY;

					e.res.move = 0;
					e.res.active = false;

					if(e.type === 'x') {
						let needsToTravel = this.swipeNavWidth / 2;

						if(e.res.open) {
							if(traveledX > needsToTravel) {
								e.res.open = false;
							}
						} else {
							if(traveledX < 0 - needsToTravel) {
								e.res.open = true;
							}
						}
					}

				}


				return e.res;
			})
		}
	},

	computed: {
		hasSwipeNav() {
			return !!this.$slots.swipeNav;
		}
	},

	data() {
		return {
			swipeNavWidth: 0,
			mainWidth: 0
		};
	},

	mounted() {
		this.mainWidth = this.$refs.main.offsetWidth;

		if(this.hasSwipeNav) {
			this.swipeNavWidth = this.$refs.swipeNav.offsetWidth;
		}
	}

}
