'use strict';


const is = {};


is.promise = obj => {
	return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};



export default is;

