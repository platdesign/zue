'use strict';



const path = require('path');
const loaderUtils = require("loader-utils");


module.exports = function (source, map) {

	const newExport = [
		'module.exports = c => {',
			'c.options.examples = c.options.examples || [];',
			`import('${this.resourcePath}').then(res => c.options.examples.push(res.default));`,
		'};'
	].join('\n');

  this.callback(null, newExport, map);
}
