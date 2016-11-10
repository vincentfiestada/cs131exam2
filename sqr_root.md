Square Root via Newton's Method
===============================

This program computes a number *p*'s square root by estimating it via Newton's Method. 

## Usage

The program is written in NodeJS. Install NodeJS and add it to your PATH to use the program. 
On the commandline, navigate to the program's directory and enter the following:

```
node sqr_root p
```

where `p` is the positive number input. The program should output an error if `p` is non-positive. It should also output all the estimates in order and whether the convergence condition (relative error < 0.000001) was achieved before the maximum number of iterations allowed (20). The initial guess used will be `p` itself.