Dessert Ingredient Cost Calculation via Newton-Raphson method
===============================

This program calculates the cost of 4 ingredients of a dessert given 4 linear equations using the multi-variable version of Newton's Method. 

## Usage

The program is written in NodeJS. Install NodeJS and add it to your PATH to use the program. 
On the commandline, navigate to the program's directory and enter the following:

```
node dessert
```

The program will perform a maximum of 100 iterations or stop when all estimates stop fluctuation beyond a tolerance of 0.000001. The initial guesses are all 0's for all ingredient costs. It should finish very quickly since the system of equations is linear.

The program will display all guesses up to 4 decimal places and the final guess up to the maximum floating-point accuracy supported. It will also tell you whether the guesses were converging before stopping.
