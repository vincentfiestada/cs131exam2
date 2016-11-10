/**************************
 * CS 131 Long Exam # 2
 * 1.4. Approximates a range for the interest rate of a 20-year
 * 300,000-peso loan with 1684.57 pesos in monthly payments
 * using Regula Falsi Method with initial bounds [0,1]
 * Please see `mortgage.md` for more information
 * 
 * Vincent Paul Fiestada - 201369155
 **************************/

chalk = require("chalk");
_ = require("lodash");
regulaFalsi = require("./lib/regula_falsi");

var input = chalk.blue;
var answer = chalk.green;
var error = chalk.red;

// Get console arguments
var args = process.argv;

// Determine constant parameters
var months = _.toNumber(args[2]); // Loan duration in months
months = isNaN(months) ? 20*12 : months;
var loan = _.toNumber(args[3]); // Loan amount
loan = isNaN(loan) ? 300000 : loan;
var payment = _.toNumber(args[4]); // Monthly payment amount
payment = isNaN(payment) ? 1684.57 : payment;
var gap = _.toNumber(args[5]); // Desired maximum gap between bounds
gap = isNaN(gap) ? 0.01 : gap;


/**
 * Approximates the interest rate for a loan defined by the parameters
 * @arg {Number} months Load duration in months
 * @arg {Number} loan Loan amount 
 * @arg {Number} payment Monthly payment amount
 * @arg {Number} gap Max desired gap between upper and lower bounds
 */
function getInterestRate(months, loan, payment, gap) {
	console.log("Parameters:");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log(chalk.white.bold("Months "), ":", input(months));
	console.log(chalk.white.bold("Loan   "), ":", input(loan));
	console.log(chalk.white.bold("Payment"), ":", input(payment));
	console.log(chalk.white.bold("Max Gap"), ":", input(gap));
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~\n");
	// Make sure loan and no. of months are positive
	if (months <= 0 || loan <= 0) {
		console.log(error("Invalid input. Loan and Months must be positive"));
		return -1;
	}
	// Make sure gap is nonnegative 
	if (gap < 0) {
		console.log(error("Desired gap is negative and invalid."));
	}
	// Create function 
	function f(x) {
		return -payment + 1/12 * (loan * x) / ((1 - ( 1/Math.pow((1 + x/12), months)) ));
	}
	var guesses = regulaFalsi(-1, 1, f, gap);
	for (var i = 0; i < guesses.length; i++) {
		console.log(i, guesses[i]);
	}
	// Display final bounds
	var final = guesses[guesses.length - 1];
	console.log("\nFinal bounds were", answer(final[0]), "to", answer(final[1]));
	console.log("----------------------------------------------------");
	// Display function values at lower and upper bounds
	var fLower = Math.fround(f(final[0]));
	var fUpper = Math.fround(f(final[1]));
	console.log("Function values at bounds are ~", chalk.magenta.bold(fLower, ",", fUpper));
	
	console.log(chalk.white.bold("\nInterest Rate is around"), answer(Math.round((final[1])*100)), chalk.white.bold("%"));
}

getInterestRate(months, loan, payment, gap);