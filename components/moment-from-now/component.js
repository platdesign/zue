/**
 * Vue component class.
 *
 * @name 			moment-from-now
 * @project 	zue
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			October 11th 2017, 7:27:14 pm
 */

import moment from 'moment';
import rx from 'rx';

const now$ = rx.Observable.interval(5000)
	.map(() => moment())
	.share();


export default {

	name: 'moment-from-now',

	props: {
		date: {
			type: [Date, String],
			required: true
		}
	},

	subscriptions() {
		return {
			now: now$
		}
	},

	computed: {
		_date() {
			return moment(this.date);
		},

		value() {
			return this._date.from(this.now);
		}
	}

}
