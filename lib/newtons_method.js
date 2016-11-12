/****************************
 * Generic implementation of Newton's method in single variable case
 * Differentiation not included
 * 
 * (c) 2016 Vincent Fiestada
 * vffiestada@gmail.com
 */

_ = require("lodash");

/**
 * Estimates a zero of the function `f` using Newton's Method
 * @arg {Number} x0 Initial guess for the zero of `f`
 * @arg {Function} f The function whose zero is being estimated
 * @arg {Function} fp The derivative of f
 * @arg {Number} tol Tolerance for convergence.
 * @arg {Number} iMax Maximum number of iterations before forcibly stopping
 * If iMax < 1, the function will not stop until near convergence
 * @returns tuple of guesses and a boolean which is true if convergence condition was achieved
 */
function newtonsMethod(x0, f, fp, tol, iMax) {
	iMax = _.toNumber(iMax);
	var i = 0; // Number of iterations
	var deltaX = 0; // Change in estimated x
	var x = x0; // Initial guess
	var guesses = [];
	guesses.push(x0);
	var rel = 1; // Current relative error
	do {
		deltaX = -f(x)/fp(x);
		x = x + deltaX;
		guesses.push(x);
		i++;
		rel = (f(x) === 0) ? 0 : Math.abs(0 - f(x))/x;
	} while ( (iMax < 1 || i < iMax) && (rel >= tol) );
	return {
		guesses: guesses,
		converged: rel < tol
	};
}

module.exports = newtonsMethod;