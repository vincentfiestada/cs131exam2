/**************************
 * CS 131 Long Exam # 2
 * 2.4. Solves a system of 4 equations using Newton's Method
 * to find out the cost of each type of ingredient in a 
 * given 4-ingredient dessert
 * More info in dessert.md
 * 
 * Vincent Paul Fiestada - 201369155
 **************************/

chalk = require("chalk");
_ = require("lodash");
math = require("mathjs");
newton = require("./lib/newton_raphson");

var input = chalk.blue;
var answer = chalk.green;
var error = chalk.red;

// Get console arguments
var args = process.argv;

var N = 4;

// Round to 4 decimal places
function round4(x) {
	return _.round(x,4);
}

var X0 = [0,0,0,0];
function getDessertCost(X0) {
	// Make sure the input is positive
	for (var i = 0; i < X0.length; i++) {
		p = X0[i];
		if (isNaN(p)) {
			console.log(error("Input"), input(p), error("is not a number."));
			return -1;
		}
	}
	// Create functions
	function f1(X) {
		return 2 * X[0] + 3 * X[1] + 3 * X[2] + 4 * X[3] - 200;
	}
	function f2(X) {
		return X[1] - 2 * X[2];
	}
	function f3(X) {
		return X[2] - X[3] + 10;
	}
	function f4(X) {
		return X[3] - 0.5 * X[2] - 4 * X[0];
	}
	var F = [f1, f2, f3, f4];
	// Create Jacobian 
	/************ THIS WILL TAKE A WHILE **************/
	function df1x1(X) {
		return 2;
	}
	function df1x2(X) {
		return 3;
	}
	function df1x3(X) {
		return 3;
	}
	function df1x4(X) {
		return 4;
	}
	function df2x1(X) {
		return 0;
	}
	function df2x2(X) {
		return 1;
	}
	function df2x3(X) {
		return -2;
	}
	function df2x4(X) {
		return 0;
	}
	function df3x1(X) {
		return 0;
	}
	function df3x2(X) {
		return 0;
	}
	function df3x3(X) {
		return 1;
	}
	function df3x4(X) {
		return -1;
	}
	function df4x1(X) {
		return -4;
	}
	function df4x2(X) {
		return 0;
	}
	function df4x3(X) {
		return -0.5;
	}
	function df4x4(X) {
		return 1;
	}
	/************ HERE ENDS PARTIAL DERIVATIVES **************/
	var J = math.matrix([[df1x1, df1x2, df1x3, df1x4],[df2x1, df2x2, df2x3, df2x4],[df3x1, df3x2, df3x3, df3x4], [df4x1, df4x2, df4x3, df4x4]]);

	console.log("Initial Guess: ", input(X0));
	console.log("Running Newton-Raphson...\n");
	var output = newton(X0, F, J, 0.000001, 100);
	var guesses = output.guesses;
	var converged = output.converged;
	for (i = 0; i < guesses.length; i++) {
		console.log(chalk.white.bold(i), _.map(guesses[i], round4));
	}
	var final = guesses[guesses.length - 1];
	console.log("\nFinal estimates were", answer(final));
	console.log("-----------------------------------------");
	console.log("Function values at estimates are:");

	console.log(chalk.white.bold("f1:"), Math.fround(f1(final)));
	console.log(chalk.white.bold("f2:"), Math.fround(f2(final)));
	console.log(chalk.white.bold("f3:"), Math.fround(f3(final)));
	console.log(chalk.white.bold("f4:"), Math.fround(f4(final)));

	if (converged) {
		console.log("Converging.");
	}
	else {
		console.log(error("Too many steps. Convergence too slow."));
	}
}

getDessertCost(X0);
