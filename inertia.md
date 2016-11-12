Dessert Ingredient Cost Calculation via Newton-Raphson method
===============================

This program calculates the principal moments of inertia from a 2x2 inertia matrix. 

This program uses successive QR decomposition until a symmetric square matrix A becomes triangular, then takes the diagonal of A to find its eigenvalues.

## Usage

The program is written in NodeJS. Install NodeJS and add it to your PATH to use the program. 
On the commandline, navigate to the program's directory and enter the following:

```
node inertia
```

The program will factorize A until it becomes a triangular matrix. The program will display all equivalent matrices for A and the QR-decomposition of each. Then, it will identify the eigenvalues of A.

## Insights

From running the program, the principal moments of inertia were about `7761.36339846596mm^4`, `1855.6366015340293mm^4`.

## Limitations

Please note that program may never halt if A is not symmetric.