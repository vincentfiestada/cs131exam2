Determine Interest Rate via Regula Falsi
=======================================

This program calculates an upper and lower bound for the interest rate based on the parameters for loan duration, loan amount, monthly payment and maximum gap. These parameters can be customized in the commandline.

## Usage

The program is written in NodeJS. Install NodeJS and add it to your PATH to use the program. 
On the commandline, navigate to the program's directory and enter the following:

```
node mortgage
```

Or, to customize parameters:

```
node mortgage m l p g 
```

where `m` is the loan duration in months. `l` is the amount of the loan. `p` is the monthly payment to be made. `g` is the maximum gap allowed between the lower and upper bounds.

All of these parameters are optional, but if provided, they must be entered in the specified order. If you wish to supply a parameter, you must also supply values for those before it. For instance, to enter a custom value for `p`, you must enter a custom value for `m` and `l` as well.

Default values are as follows:

```
m = 240
l = 300000
p = 1684.57
g = 0.01
```

The program should output an error if `g` is negative or if either `m` or `l` is nonpositive. It should also output all the estimated bounds in order and the upper bound rounded up to the nearest integer and converted to a percentage. The initial bounds that will be used are -1 and 1.