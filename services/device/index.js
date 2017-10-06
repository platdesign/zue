'use strict';


import rx from 'rx';



const mq = window.matchMedia("(max-width: 800px)");


const isMobile$ = rx.Observable.create(observer => {

	const handler = e => observer.onNext(e.matches);

	mq.addListener(handler);

	return () => mq.removeListener(handler);
})
.startWith(mq.matches)
.shareReplay(1);






const isOnline$ = rx.Observable.merge(
	rx.Observable.fromEvent(global, 'online').map(true),
	rx.Observable.fromEvent(global, 'offline').map(false)
)
.startWith(navigator.onLine)
.shareReplay(1);

const isOffline$ = isOnline$.map(status => !status).shareReplay(1);





export {
	isMobile$,
	isOnline$,
	isOffline$
}

export default {
	isMobile$,
	isOnline$,
	isOffline$
}


