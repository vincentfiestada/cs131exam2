/****************************
 * Generic implementation of QR Factorization
 * Produces Q,R given a matrix A s.t. A = QR
 * where Q is orthogonal and R is upper triangular
 * 
 * (c) 2016 Vincent Fiestada
 * vffiestada@gmail.com
 */

_ = require("lodash");
math = require("mathjs");

/**
 * Find the QR factorization of a square matrix a
 * @arg {Matrix} A a square n x n matix
 */
function factorQR(A) {
	// Determine size of A
	var n = A._size[0];
	var R = math.matrix(A); // Copy A into R
	var Q = math.matrix(A);
	// Construct rows indices for c calculation
	var rows = [];
	for (var i = 0; i < n; i++) {
		rows.push(i);
	}
	var qrs = [];
	// Perform for n - 1 steps:
	for (i = 0; i < n - 1; i++) {
		// Find c 
		// c is a vector, the ith column of A 
		var c = math.subset(R, math.index(rows, i));
		// Find e 
		// e is a nx1 like c, but all zeroes
		var e = math.ones(n,1);
		for (var j = 0; j < n; j++) {
			e._data[j][0] = 0;
		}
		var sign = (c._data[i][0] >= 0) ? 1 : -1;    
		e._data[i][0] = sign;
		// Find Frobenius norm of c 
		var norm = math.norm(c, 'fro');
		// Find v = c + e*norm(c)
		var v = math.add(c, math.multiply(e, norm));
		// Find vT (transpose of v)
		var vT = math.transpose(v);
		// Find Householder matrix
		var I = math.eye(n); 
		var vvT = math.multiply(v, vT);
		var vTv = math.multiply(vT, v);
		var H = math.subtract(I, math.multiply(2/vTv._data[0][0], vvT));
		// Find next Q 
		if (i === 0) {
			Q = H;
		}
		else {
			Q = math.multiply(Q, H);
		}
		// Find next R  
		R = math.multiply(H, R);
		// Add to list of Q's and R's 
		qrs.push({
			Q: Q,
			R: R
		});
	}
	return qrs;
}

module.exports = factorQR;