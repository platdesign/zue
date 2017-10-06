'use strict';


import rx from 'rx';
import MongoParser from 'mongo-parse';


class Query {

	constructor(collName, collCache) {
		this.name = collName;
		this._coll = collCache;

		this._coll$ = new rx.BehaviorSubject(collCache);
	}

	subscribe() {
		return this._coll$.subscribe(...arguments);
	}

	find(query) {
		if(!query) {
			return this._coll$;
		}

		query = MongoParser.parse(query);
		return this._coll$.map(coll => coll.filter(i => query.matches(i)));
	}

	findOne(query) {
		return this.find(query).map(coll => coll[0]);
	}

	findById(id, idAttr = '__id') {
		return this.findOne({ [idAttr]: id });
	}

	inject(id, model) {

		let existing = this._coll.find(m => String(m.__id) === String(id));

		if(existing) {
			Object.assign(existing, model);
		} else {
			this._coll.push(Object.assign({ __id: id }, model));
		}

		this._coll$.onNext(this._coll);
	}
}







class Data {

	constructor() {
		this._queryInstances = {};
		this._collectionsCache = {};
	}

	collection(name) {

		if(this._queryInstances.hasOwnProperty(name)) {
			return this._queryInstances[name];
		} else {

			if(!this._collectionsCache.hasOwnProperty(name)) {
				this._collectionsCache[name] = [];
			}

			return this._queryInstances[name] = new Query(name, this._collectionsCache[name]);
		}

	}

}

const instance = new Data();

export default instance;


