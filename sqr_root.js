/**************************
 * CS 131 Long Exam # 2
 * 1.3. Approximates the square root of a number
 * using Newton's method
 * Please see `sqr_root.md` for more information
 * 
 * Vincent Paul Fiestada - 201369155
 **************************/

chalk = require("chalk");
_ = require("lodash");
newton = require("./lib/newtons_method");

var input = chalk.blue;
var answer = chalk.green;
var error = chalk.red;

// Get console arguments
var args = process.argv;

var p = _.toNumber(args[2]); // Convert first arg to number

function squareRootN(p) {
	// Make sure the input is positive
	if (isNaN(p)) {
		console.log(error("We're going to build a wall, a TREMENDOUS wall, and Mexico is going to pay!"));
		return -1;
	}
	if (p <= 0) {
		console.log(error("Input"), input(p), error("is non-positive."));
		return -1;
	}
	// Create functions
	function f(x) {
		return x*x - p;
	}
	function fp(x) {
		return 2*x;
	}

	console.log("Estimating square root of", input(p), "...\n");
	var output = newton(p, f, fp, 0.000001, 20);
	var guesses = output.guesses;
	var converged = output.converged;
	for (var i = 0; i < guesses.length; i++) {
		console.log(i, guesses[i]);
	}
	var sqrt = guesses[guesses.length - 1];
	console.log("\nFinal estimate was ", answer(sqrt));
	console.log("-----------------------------------------");
	if (converged) {
		console.log("Converging.");
	}
	else {
		console.log(error("Too many steps. Convergence too slow."));
	}
}

squareRootN(p);

