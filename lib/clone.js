'use strict';
module.exports = cloneAllProperties;

/**
 * clone the error properties to the data objects
 * [err.name,  err.message, err.stack] are not enumerable properties
 * @param data Object to be altered
 * @param err Error Object
 */
function cloneAllProperties(data, err) {
	data.name = err.name;
	data.message = err.message;
	for (var p in err) {
		if ((p in data)) continue;
		data[ p ] = err[ p ];
	}
	data.stack = err.stack;
}
