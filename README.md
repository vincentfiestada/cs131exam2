# CS 131 Exam 2

*Submitted by Vincent Paul Fiestada*

This package contains programs that satisfy the requirements of Programming problems 1.3, 1.4, 2.4, and 3.2.

Each problem is addressed by its own program, which uses a generic implementation of a numerical method, also written by me. Each program comes with its own README as well, with the same name but in Markdown format.

## Usage

To use any program, simply enter the following into your terminal. 

```
node program
```

where `program` is the name of the program you wish to run.
For more information please see the README of that program.

## Prerequisites 

The programs are written in NodeJS and you will need NodeJS to run them.
If you are running on Windows x64 with NodeJS, everything should work correctly.

However, if you are using different versions of Node or Windows, you may need to re-compile the dependencies. If this is the case, please run

```
npm install
```

while in the program directory. This will re-install the dependencies for your machine. You must be connected to the internet to do this.

### Dependencies 

The following dependencies are used by the programs:

- **mathjs**. This is a Mathematics library for Javascript, used for matrix manipulation such as matrix products, etc.
- **lodash**. This is a popular utility library, used for small tasks like flattening vectors into arrays for better readability.
- **chalk**. This allows colored text to be printed to the commandline for prettier output.

## 1.3. Square Root

The program `sqr_root` approximates the square root of a number using Newton's Method. It uses the library module `newtons_method`. Run it with the parameter p as a command-line argument. For example,

```
node sqr_root 36
```

## 1.4 Mortgage Problem 

The program `mortgage` calculates an upper and lower bound for the interest rate based on the given problem. It uses the library module `regula_falsi`.

```
node mortgage
```

## 2.4 Dessert Problem 

The program `dessert` approximates the cost of ingredients based on a linear system of 4 equations using the library module `newton_raphson`, which is a generic implementation of Newton's Method in the multivariable case.

```
node dessert 
```

## 3.2 Inertia Problem 

The program `inertia` determines the principal moments of inertia by approximating the eigenvalues of a 2 x 2 matrix using the library module `qr` for QR decomposition.

```
node inertia 
```