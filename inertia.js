/**************************
 * CS 131 Long Exam # 2
 * 3.2. Find the eigenvalues of a matrix using QR factorization.
 * More info in inertia.md
 * 
 * Vincent Paul Fiestada - 201369155
 **************************/

qr = require("./lib/qr");
math = require("mathjs");
chalk = require("chalk");

A = math.matrix([[5286,2914],[2914,4331]]);

// Returns true if the square matrix A is approximately upper triangular
function triangularU(A) {
	var n = A._size[0];
	// Make sure all elements below the diagonal are 0
	for (var i = 1; i < n; i++) {
		for (var j = 0; j < i; j++) {
			if (Math.abs(A._data[i][j]) > 0.000001) {
				return false;
			}
		}
	}
	return true;
}

// Returns true if the square matrix A is approximately lower triangular
function triangularL(A) {
	var n = A._size[0];
	// Make sure all elements below the diagonal are 0
	for (var i = 0; i < n; i++) {
		for (var j = i + 1; j < n; j++) {
			if (Math.abs(A._data[i][j]) > 0.000001) {
				return false;
			}
		}
	}
	return true;
}

function eigenInertia(A) {
	if (A._size[0] != A._size[1]) {
		console.log(chalk.red("A is not square. Invalid."));
		return;
	}
	var k = 0;

	while (!triangularU(A) && !triangularL(A)) {
		k++;
		console.log(chalk.white.bold("A:"), chalk.blue(A));
		QRs = qr(A);
		for (var i = 0; i < QRs.length; i++) {
			console.log(chalk.white.bold("  Q:"), chalk.cyan(QRs[i].Q));
			console.log(chalk.white.bold("  R:"), chalk.magenta(QRs[i].R));
		}
		console.log(chalk.white.bold("----------------------------------------------------"));
		var Q = QRs[QRs.length - 1].Q;
		var R = QRs[QRs.length - 1].R;

		var diag = math.multiply(R,Q);
		A = diag;
	}
	console.log("A is almost triangular after", k, "iterations");
	console.log("\n", chalk.white.bold("A:"), chalk.blue.bold(A));
	console.log(chalk.white.bold("Eigenvalues of A ~"), chalk.green(math.diag(A)));
	console.log("\nThose are the principal moments of inertia, approximately");
}

eigenInertia(A);