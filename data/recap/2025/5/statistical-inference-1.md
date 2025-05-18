---
title: 'Statistical Inference I'
date-published: 2025-05-17
date-drafted: null
date-modified: 2025-05-18
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Inference'
---

# Statistical Inference I

## Random Sampling

The collection of random variables $X_1, X_2, X_3, \dots, X_n$ is said to be a **random sample** of size $n$ 
if they are independent and identically distributed (i.i.d.), i.e.,

1. $X_1, X_2, X_3, \dots, X_n$ are independent random variables, and
2. they have the same distribution, i.e.,

```[latex]
F_{X_1}(x) = F_{X_2}(x) = \cdots = F_{X_n}(x), \quad \text{for all } x \in \mathbb{R}.
```

## Evaluating Estimators

Let $\hat{\Theta} = h(X_1, X_2, \cdots, X_n)$ be a point estimator for $\theta$. The **bias** of point estimator $\hat{\Theta}$ is defined by

```[latex]
B(\hat{\Theta}) = E[\hat{\Theta}] - \theta.
```


Let $\hat{\Theta} = h(X_1, X_2, \cdots, X_n)$ be a point estimator for a parameter $\theta$. We say that $\hat{\Theta}$ is an **unbiased** of $\theta$ if

```[latex]
B(\hat{\Theta}) = 0, \quad \text{for all possible values of } \theta.
```

## Point Estimators for Mean and Variance


Let $X_1, X_2, X_3, \dots, X_n$ be a random sample with mean $E[X_i] = \mu < \infty$, and variance $0 < \text{Var}(X_i) = \sigma^2 < \infty$. The **sample variance** of this random sample is defined as

```[latex]
S^2 = \frac{1}{n-1}\sum_{k=1}^n (X_k - \overline{X})^2 = \frac{1}{n-1}\left(\sum_{k=1}^n X_k^2 - n\overline{X}^2\right),
```

The sample variance is an unbiased estimator of $\sigma^2$.

The **sample standard deviation** is defined as

```[latex]
S = \sqrt{S^2},
```

and is commonly used as an estimator for $\sigma$. Nevertheless, $S$ is a biased estimator of $\sigma$.

## Maximum Likelihood Estimation

Let $X_1, X_2, X_3, \dots, X_n$ be a random sample from a distribution with a parameter $\theta$. Suppose that we have observed $X_1=x_1, X_2=x_2, \dots, X_n=x_n$.

1. If $X_i$'s are discrete, then the **likelihood function** is defined as

```[latex]
L(x_1,x_2,\cdots,x_n;\theta) = P_{X_1X_2\cdots X_n}(x_1,x_2,\cdots,x_n;\theta).
```
    
2. If $X_i$'s are jointly continuous, then the likelihood function is defined as

```[latex]
L(x_1,x_2,\cdots,x_n;\theta) = f_{X_1X_2\cdots X_n}(x_1,x_2,\cdots,x_n;\theta).
```

In some problems, it is easier to work with the **log likelihood function** given by

```[latex]
\ln L(x_1,x_2,\cdots,x_n;\theta).
```

## Asymptotic Properties of MLEs

Let $X_1, X_2, X_3, \dots, X_n$ be a random sample from a distribution with a parameter $\theta$. Let $\hat{\Theta}_{\text{ML}}$ denote the maximum likelihood estimator (MLE) of $\theta$. Then, under some mild regularity conditions,

1. $\hat{\Theta}_{\text{ML}}$ is asymptotically consistent, i.e.,

```[latex]
\lim_{n\to\infty} P\left(\left|\hat{\Theta}_{\text{ML}} - \theta\right| > \epsilon\right) = 0.
```
    
2. $\hat{\Theta}_{\text{ML}}$ is asymptotically unbiased, i.e.,

```[latex]
\lim_{n\to\infty} E\left[\hat{\Theta}_{\text{ML}}\right] = \theta.
```

3. As $n$ becomes large, $\hat{\Theta}_{\text{ML}}$ is approximately a normal random variable. More precisely, the random variable

```[latex]
\frac{\hat{\Theta}_{\text{ML}} - \theta}{\sqrt{\text{Var}\left(\hat{\Theta}_{\text{ML}}\right)}}
```
converges in distribution to $N(0,1)$.

## Interval Estimation

Let $X_1, X_2, X_3, \dots, X_n$ be a random sample from a distribution with a parameter $\theta$ that is to be estimated. An **interval estimator** with **confidence level** $1-\alpha$ consists of two estimators $\hat{\Theta}_l(X_1,X_2,\cdots,X_n)$ and $\hat{\Theta}_h(X_1,X_2,\cdots,X_n)$ such that

```[latex]
P\left(\hat{\Theta}_l \leq \theta \text{ and } \hat{\Theta}_h \geq \theta\right) \geq 1-\alpha,
```

for every possible value of $\theta$. Equivalently, we say that $\left[\hat{\Theta}_l, \hat{\Theta}_h\right]$ is a $(1-\alpha)100\%$ **confidence interval** for $\theta$.

## Pivotal Quantity

Let $X_1, X_2, X_3, \dots, X_n$ be a random sample from a distribution with a parameter $\theta$ that is to be estimated. The random variable $Q$ is said to be a _pivot_ or a _pivotal quantity_, if it has the following properties:

1. It is a function of the observed data $X_1, X_2, X_3, \dots, X_n$ and the unknown parameter $\theta$, but it does not depend on any other unknown parameters:

```[latex]
Q = Q(X_1, X_2, \cdots, X_n, \theta).
```

2. The probability distribution of $Q$ does not depend on $\theta$ or any other unknown parameters.

## Chi-Squared Distribution

**Definition** If $Z_1, Z_2, \cdots, Z_n$ are independent standard normal random variables, the random variable $Y$ defined as

```[latex]
Y = Z_1^2 + Z_2^2 + \cdots + Z_n^2
```

is said to have a chi-squared distribution with $n$ degrees of freedom shown by

```[latex]
Y \sim \: \vcenter{\chi}^{2} (n).
```

Properties:

1. The chi-squared distribution is a special case of the gamma distribution. More specifically,

```[latex]
Y \sim \text{Gamma}\left(\frac{n}{2}, \frac{1}{2}\right).
```
    
Thus,

```[latex]
f_Y(y) = \frac{1}{
  \Large{2^{\frac{n}{2}}} \:
  \Gamma\raisebox{0.05em}{(} \vcenter{\normalsize\frac{n}{2}} \raisebox{0.05em}{)}
}
y^{\frac{n}{2}-1} e^{-\frac{y}{2}}, \quad \text{for } y > 0.
```
    
2. $E[Y] = n$,
    
3. $\text{Var}(Y) = 2n$.
    
4. For any $p \in [0,1]$ and $n \in \mathbb{N}$, we define $\chi^2_{p,n}$ as the real value for which
```[latex]
p\left(Y > \chi^2_{p,n}\right) = p
```

where $Y \sim \chi^2(n)$.

## Statistic

Let $X_1, X_2, \cdots, X_n$ be a random sample of interest. A **statistic** is a real-valued function of the data. For example, the sample mean, defined as

```[latex]
W(X_1,X_2,\cdots,X_n) = \frac{X_1 + X_2 + \cdots + X_n}{n},
```

is a statistic. 

A **test statistic** is a statistic based on which we build our statistical test.

## P-values

**P-value** is the lowest significance level $\alpha$ that results in rejecting the null hypothesis.

## Likelihood Ratio Test

Let $X_1, X_2, X_3, \dots, X_n$ be a random sample from a distribution with a parameter $\theta$. Suppose that we have observed $X_1=x_1, X_2=x_2, \dots, X_n=x_n$. To decide between two simple hypotheses

```[latex]
\begin{align*}
H_0: \theta &= \theta_0, \\
H_1: \theta &= \theta_1,
\end{align*}
```

we define

```[latex]
\lambda(x_1,x_2,\cdots,x_n) = \frac{L(x_1,x_2,\cdots,x_n;\theta_0)}{L(x_1,x_2,\cdots,x_n;\theta_1)}.
```

To perform a **likelihood ratio test (LRT)**, we choose a constant $c$. We reject $H_0$ if $\lambda < c$ and accept it if $\lambda \geq c$. The value of $c$ can be chosen based on the desired $\alpha$


## Simple Linear Regression


Given the observations $(x_1,y_1), (x_2,y_2), \dots, (x_n,y_n)$, we can write the regression line as

```[latex]
\hat{y} = \beta_0 + \beta_1 x.
```

We can estimate $\beta_0$ and $\beta_1$ as

```[latex]
\begin{align*}
\hat{\beta}_1 &= \frac{s_{xy}}{s_{xx}}, \\
\hat{\beta}_0 &= \bar{y} - \hat{\beta}_1\bar{x},
\end{align*}
```

where

```[latex]
\begin{align*}
s_{xx} &= \sum_{i=1}^n (x_i - \bar{x})^2, \\
s_{xy} &= \sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y}).
\end{align*}
```

For each $x_i$, the **fitted value** $\hat{y}_i$ is obtained by

```[latex]
\hat{y}_i = \hat{\beta}_0 + \hat{\beta}_1 x_i.
```

The quantities

```[latex]
e_i = y_i - \hat{y}_i
```

are called the **residuals**.

## Coefficient of Determination

For the observed data pairs $(x_1,y_1), (x_2,y_2), \dots, (x_n,y_n)$, we define the **coefficient of determination**, $r^2$, as

```[latex]
r^2 = \frac{s_{xy}^2}{s_{xx}s_{yy}},
```

where

```[latex]
s_{xx} = \sum_{i=1}^n (x_i - \bar{x})^2, \quad
s_{yy} = \sum_{i=1}^n (y_i - \bar{y})^2, \quad
s_{xy} = \sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y}).
```

We have $0 \leq r^2 \leq 1$. Larger values of $r^2$ generally suggest that our linear model

```[latex]
\hat{y}_i = \hat{\beta}_0 + \hat{\beta}_1 x_i
```

is a good fit for the data.

## Reference(s)

- H. Pishro-Nik, _Introduction to probability, statistics, and random processes_. Kappa Research LLC, 2014.