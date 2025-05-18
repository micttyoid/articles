---
title: 'Statistical Inference II'
date-published: 2025-05-18
date-drafted: null
date-modified: 2025-05-18
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Inference'
---

# Statistical Inference II

## Bayesian Statistical Inference

The goal is to draw inferences about an unknown variable $X$ by observing a related random variable $Y$. The unknown variable is modeled as a random variable $X$, with prior distribution

```[latex]
f_X(x), \text{ if } X \text{ is continuous,} \quad P_X(x), \text{ if } X \text{ is discrete.}
```
After observing the value of the random variable $Y$, we find the posterior distribution of $X$. This is the conditional PDF (or PMF) of $X$ given $Y=y$,

```[latex]
f_{X|Y}(x|y) \text{ or } P_{X|Y}(x|y).
```
The posterior distribution is usually found using Bayes' formula. Using the posterior distribution, we can then find point or interval estimates of $X$.

## Maximum A Posteriori (MAP) Estimation

The MAP estimate of the random variable $X$, given that we have observed $Y=y$, is given by the value of $x$ that maximizes

```[latex]
f_{X|Y}(x|y) \text{ if } X \text{ is a continuous random variable, } P_{X|Y}(x|y) \text{ if } X \text{ is a discrete random variable.}
```
The MAP estimate is shown by $\hat{x}_{\text{MAP}}$.

To find the MAP estimate of $X$ given that we have observed $Y=y$, we find the value of $x$ that maximizes

```[latex]
f_{Y|X}(y|x)f_X(x).
```
If either $X$ or $Y$ is discrete, we replace its PDF in the above expression by the corresponding PMF.

## Minimum Mean Squared Error (MMSE) Estimation

The minimum mean squared error (MMSE) estimate of the random variable $X$, given that we have observed $Y=y$, is given by

```[latex]
\hat{x}_{\text{MMSE}} = E[X|Y=y].
```

## Mean Squared Error (MSE) of an Estimator

Let $\hat{X} = g(Y)$ be an estimator of the random variable $X$, given that we have observed the random variable $Y$. The mean squared error (MSE) of this estimator is defined as

```[latex]
E\left[(X-\hat{X})^2\right] = E\left[(X-g(Y))^2\right].
```
The MMSE estimator of $X$,

```[latex]
\hat{X}_M = E[X|Y],
```
has the lowest MSE among all possible estimators.

**Some Additional Properties of the MMSE Estimator**

- The MMSE estimator, $\hat{X}_M = E[X|Y]$, has the same expectation as $X$, i.e.,


```[latex]
E[\hat{X}_M] = EX, \quad E[\tilde{X}] = 0.
```
  
- The estimation error, $\tilde{X}$, and $\hat{X}_M$ are uncorrelated:


```[latex]
\text{Cov}(\tilde{X}, \hat{X}_M) = 0.
```
  
- We have:

```[latex]
\text{Var}(X) = \text{Var}(\hat{X}_M) + \text{Var}(\tilde{X}), \quad E[X^2] = E[\hat{X}_M^2] + E[\tilde{X}^2].
```

## Linear MMSE Estimator

The linear MMSE estimator of the random variable $X$, given that we have observed $Y$, is given by

```[latex]
\hat{X}_L = \frac{\text{Cov}(X,Y)}{\text{Var}(Y)}(Y - EY) + EX = \rho\frac{\sigma_X}{\sigma_Y}(Y - EY) + EX.
```

The estimation error, defined as $\tilde{X} = X - \hat{X}_L$, satisfies the orthogonality principle:

```[latex]
E[\tilde{X}] = 0, \quad \text{Cov}(\tilde{X}, Y) = E[\tilde{X} Y] = 0.
```

The MSE of the linear MMSE is given by

```[latex]
E[(X - X_L)^2] = E[\tilde{X}^2] = (1 - \rho^2)\text{Var}(X).
```

## MAP Hypothesis Test

Choose the hypothesis with the highest posterior probability, $P(H_i|Y=y)$. Equivalently, choose hypothesis $H_i$ with the highest $f_Y(y|H_i)P(H_i).$

## Bayesian Credible Intervals

Given the observation $Y = y$, the interval $[a, b]$ is said to be a $(1-\alpha)100\%$ credible interval for $X$ if the posterior probability of $X$ being in $[a, b]$ is equal to $1-\alpha$. In other words,

```[latex]
P(a \leq X \leq b \mid Y = y) = 1 - \alpha.
```

## Reference(s)

- H. Pishro-Nik, _Introduction to probability, statistics, and random processes_. Kappa Research LLC, 2014.