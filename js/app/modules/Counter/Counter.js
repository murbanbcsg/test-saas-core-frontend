"use strict";
/**
 * [description]
 * @return {[type]}
 */
var counter = (function() {
	/**
	 * [add description]
	 * @param {[type]} num1
	 * @param {[type]} num2
	 */
	var add = function(num1, num2) {
		return num1 + num2;
	};
	/**
	 * [subtract description]
	 * @param  {[type]} num1
	 * @param  {[type]} num2
	 * @return {[type]}
	 */
	var subtract = function(num1, num2) {
		return num1 - num2;
	};
	/**
	 * [difference description]
	 * @param  {[type]} num1
	 * @param  {[type]} num2
	 * @return {[type]}
	 */
	var difference = function(num1, num2) {
		if (num1 > num2) {
			return num1 - num2;
		}

		return num2 - num1;
	};

	return {
		add: add,
		subtract: subtract,
		difference: difference
	};

}());