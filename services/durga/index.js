'use strict';


import rx from 'rx';
import is from '../../utils/is';
import data from '../data';

const localHandlers = {};
const rx$ = new rx.Subject();

const collections$ = rx$
		.filter(e => e.type === 'collection')
		.share();

collections$
	.subscribe(e => {
		data.collection(e.collection).inject(e.id, e.model);
	});



export function topic(topic, payload = {}) {

	if(localHandlers.hasOwnProperty(topic)) {
		return rx.Observable.create(observer => {

			let res = localHandlers[topic](payload);

			if(is.promise(res)) {
				res = rx.Observable.fromPromise(res);
			}

			observer.onNext(true);

			return res.subscribe(e => rx$.onNext(e));

		});
	} else {
		console.warn(`Topic '${topic}' has no local handler and needs server implementation`);
		return rx.Observable.never();
	}

};



export function topics(options = {}) {
	return rx.Observable.merge(...Object.keys(options).map(key => topic(key, options[key])));
}



export function publish(topic, handler) {
	if(localHandlers.hasOwnProperty(topic)) {
		throw new Error(`Topic ${topic} already published`);
	}

	localHandlers[topic] = handler;
};
