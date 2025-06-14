---
title: "Bases of simple approximation methods"
date-published: 2025-06-13
date-drafted: null
date-modified: 2025-06-13
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Approximation"
  - "Computation"
---

# Bases of simple approximation methods

## Table of Contents
- [Euler's method](#eulers-method)
- [Maclaurin series](#maclaurin-series)
- [Taylor series](#taylor-series)
- [The Central Limit Theorem](#the-central-limit-theorem)
- [Trigonometry](#trigonometry)

## Euler's method

```[latex]
y_{n+1} = y_n + h f(t_n, y_n)
```

Use: iterate few times or more and proceed

## Maclaurin series

Which is a particular case of Taylor series where $a = 0$

```[latex]
\sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}(x-0)^n = f(0) + f'(0)(x-0) + \frac{f''(0)}{2!}(x-0)^2 + \cdots + \frac{f^{(n)}(0)}{n!}(x-0)^n + \cdots
```

Use: pick some terms and proceed

## Taylor series

```[latex]
\sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n + \cdots
```

Use: pick some terms and proceed

Example: binomial approximation

## The Central Limit Theorem

Let $X_1,X_2,...,X_n$ be i.i.d. random variables with expected value $EX_i=\mu<\infty$ and variance $0<\text{Var}(X_i)=\sigma^2<\infty$. Then, the random variable

```[latex]
Z_n=\frac{\overline{X}-\mu}{\sigma/\sqrt{n}}=\frac{X_1+X_2+...+X_n-n\mu}{\sqrt{n}\sigma}
```
converges in distribution to the standard normal random variable as $n$ goes to infinity, that is

```[latex]
\lim_{n\to\infty}P(Z_n\leq x)=\Phi(x) \quad\text{, for all } x\in\mathbb{R}
```

where $\Phi(x)$ is the standard normal CDF.

## Trigonometry

Often used for problems in optics

```[latex]
\begin{align*}
\\
&\text{ }\: 
\lim_{\theta\to 0}{\frac {\sin\theta}{\theta} = 1}
\\
&\text{ }\: 
\lim_{\theta\to 0}{\frac {\tan\theta}{\theta} = 1}
\end{align*}
```

Use: set some threhold and let them equal for all tolerable cases

**L'Hôpital's rule**

```[latex]
\lim_{x\to c}{\frac {f(x)}{g(x)}}=\lim_{x\to c}{\frac {f'(x)}{g'(x)}}
```

Example: Small-angle approximation

## TODO
- Some generating functions(one or two)
