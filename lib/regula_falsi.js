/****************************
 * Generic implementation of Regula Falsi method
 * 
 * (c) 2016 Vincent Fiestada
 * vffiestada@gmail.com
 */

_ = require("lodash");

/**
 * Computes a range for the zero of a function
 * @arg {Number} a initial lower bound
 * @arg {Number} b initial upper bound, must be greater than `a`
 * @arg {Function} f Single-argument floating point function to find a zero for 
 * @arg {Number} gap maximum allowed gap between `a` and `b`
 */
function regulaFalsi(a, b, f, gap) {
	var guesses = [];
	guesses.push([a,b]);
	while (b > a && b-a > gap) {
		r = (a * f(b) - b * f(a)) / (f(b) - f(a));
		if (f(a) * f(r) > 0) {
			a = r;
		}
		else {
			b = r;
		}
		guesses.push([a,b]);
	}
	return guesses;
}

module.exports = regulaFalsi;