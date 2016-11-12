/****************************
 * Generic implementation of Newton's method in multi-variable case
 * Differentiation not included
 * 
 * (c) 2016 Vincent Fiestada
 * vffiestada@gmail.com
 ***************************/

_ = require("lodash");
math = require("mathjs");

/**
 * Estimates zeros for a multi-variable array of functions
 * @arg {Number[]} X0 Array of initial guesses for x1, x2, ..., xn
 * @arg {Function[]} F Array of single-variable functions f1, f2, ..., fn
 * @arg {Function[][]} J Matrix representing the Jacobian of F 
 * @arg {Number} tol Maximum allowed relative error for all unknowns 
 * @arg {Number} iMax Maximum number of steps allowed
 * 
 * Functions in F and J must expect an nx1 matrix as argument
 */
function newtonRaphson(X0, F, J, tol, iMax) {
	iMax = _.toNumber(iMax);
	var n = X0.length; // size parameter
	var i = 0; // Number of iterations
	var X = math.ones(n,1);
	for (var j = 0; j < n; j++) {
		X._data[j][0] = X0[j];
	}
	var guesses = [];
	var maxRel = 0; // Prevailing relative error
	do {
		guesses.push(math.flatten(X._data));
		// Calculate current Jacobian matrix
		var Jk = math.ones(n, n);
		for (j = 0; j < n; j++) {
			for (var k = 0; k < n; k++) {
				Jk._data[j][k] = J._data[j][k](X);
			} 
		}
		var Fk = math.ones(n, 1);
		for (j = 0; j < n; j++) {
			Fk._data[j][0] = F[j](X._data);
		}
		// Compute next estimate for X vector
		// X -= inv(J) x F
		var OldX = X;
		X = math.subtract(X, math.multiply(math.inv(Jk), Fk));
		// Find the maximum / prevailing error 
		maxRel = 0;
		var currentGuess = math.flatten(X._data);
		for (j = 0; j < n; j++) {
			var rel = Math.abs(OldX._data[j][0] - X._data[j][0]); 
			if (rel > maxRel) {
				maxRel = rel;
			}
		}
		i++;
	} while ( (iMax < 1 || i < iMax) && (maxRel >= tol) );
	guesses.push(math.flatten(X._data));
	return {
		guesses: guesses,
		converged: maxRel < tol
	};
}

module.exports = newtonRaphson;