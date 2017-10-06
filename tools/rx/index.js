'use strict';


import rx from 'rx';


export function gesture(el) {

	const start = rx.Observable.fromEvent(el, 'touchstart').share();
	const end = rx.Observable.fromEvent(el, 'touchend').share();
	const move = rx.Observable.fromEvent(el, 'touchmove').share();
	const cancel = rx.Observable.fromEvent(el, 'touchcancel').share();


	return start.switchMap(start => {

		const pos = {
			status: 'start',
			rawEvent: start,
			startX: start.changedTouches[0].clientX,
			startY: start.changedTouches[0].clientY
		};

		function posData(status) {
			return e => {
				pos.status = status;

				pos.rawEvent = e;

				pos.currentX = e.changedTouches[0].clientX;
				pos.currentY = e.changedTouches[0].clientY;

				pos.directionX = pos.startX > pos.currentX ? 'left' : 'right';
				pos.directionY = pos.startY > pos.currentY ? 'up' : 'down';

				pos.udistanceX = Math.abs(pos.startX - pos.currentX);
				pos.udistanceY = Math.abs(pos.startY - pos.currentY);

				pos.distanceX = pos.udistanceX * (pos.directionX === 'left' ? -1 : 1);
				pos.distanceY = pos.udistanceY * (pos.directionY === 'up' ? -1 : 1);

				if(pos.udistanceX > pos.udistanceY) {

					if(pos.directionX === 'right') {
						pos.type = 'swipe-right';

						if(pos.startX < 20) {
							pos.type = 'edge-swipe-right';
							pos.distanceX = pos.distanceX - pos.startX;
							pos.distanceX <= 0 ? 0 : pos.distanceX;
						}
					} else if(pos.directionX === 'left') {
						pos.type = 'swipe-left';

						if(pos.startX < 20) {
							pos.type = 'edge-swipe-left';
						}
					}

				} else {

				}

				return pos;
			}
		}


		return rx.Observable.merge(
			move.map(posData('move')),
			end.map(posData('end'))
		)
		.startWith(pos);

	});
}
