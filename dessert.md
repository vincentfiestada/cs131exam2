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

## Insights

Running the program, the following costs per piece/scoop are obtained. They are rounded to the nearest hundredths.

|Ingredient    | Cost per piece |
|--------------|----------------|
|Bananas       | Php 03.96      |
|Strawberries  | Php 23.40      |
|Cherries      | Php 11.70      |
|Frozen Yogurt | Php 21.70      |

This brings the total cost of a single dessert serving to around Php 200.20
Based on the assumption that the maximum cost must be **no more than Php 200.00**, then there may be a need to bring down the cost of one or more of the ingredients or to increase pricing.
The following prices, for example, will yield a total price per serving of under Php 200.00:

|Ingredient    | Cost per piece |
|--------------|----------------|
|Bananas       | Php 04.00      |
|Strawberries  | Php 23.00      |
|Cherries      | Php 11.75      |
|Frozen Yogurt | Php 21.75      |

In this configuration, total cost per dessert serving becomes **Php 199.25**. The prices are also more reasonable considering the available monetary denominations.