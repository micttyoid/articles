---
title: "Table of Discrete Fourier Transform"
date-published: 2025-05-23
date-drafted: null
date-modified: 2025-05-23
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Signal Processing'
  - 'DFT'
---

# Table of Discrete Fourier Transform

## Properties of the Discrete Fourier Transform

| Property           | Time Domain               | Fourier Domain     |
|--------------------|---------------------------|--------------------|
| Linearity          | $a_1 x_1(n) + a_2 x_2(n)$ |$a_1 X_1(k)+ a_2 X_2(k)$|
| Translation        | $x(n- n_0)$               | $e^{-j k(2\pi/N)n_0} X(k)$|
| Modulation         | $e^{j (2\pi/N)k_0 n} x(n)$| $X(k - k_0)$       |
| Reflection         | $x(-n)$                   | $X(-k)$            |
| Conjugation        | $x^*(n)$                  | $X^*(-k)$          |
| Duality            | $X(n)$                    | $Nx(-k)$           |
|Periodic Convolution| $x_1\ast x_2(n)$          | $X_1(k) X_2(k)$    |
| Multiplication     | $x_1(n) x_2(n)$           | $\frac{1}{N} X_1\ast X_2(k)$|

| Property              |                               |
|-----------------------|-------------------------------|
| Parseval's Relation   | $\displaystyle\sum_{n=0}^{N-1} \|x(n)\|^2 = \frac{1}{N}\sum_{k=0}^{N-1}\|X(k)\|^2$ |
| Even Symmetry         | $x$ is even $\Leftrightarrow$ $X$ is even |
| Odd Symmetry          | $x$ is odd $\Leftrightarrow$ $X$ is odd   |
|Real / Conjugate Symmetry| $x$ is real $\Leftrightarrow$ $X$ is conjugate symmetric |

> ...(DFT) not to be confused with the discrete-time Fourier transform ...

## Properties of Discrete-time(DT) Fourier series

| Property                  | Time Domain                     | Fourier Domain                     |
|---------------------------|----------------------------------|-------------------------------------|
| Linearity                 | $\alpha x(n) + \beta y(n)$       | $\alpha a_k + \beta b_k$ |
| Translation               | $x(n - n_0)$                    | $e^{-j k (2\pi/N)n_0} a_k$ |
| Modulation                | $e^{j (2\pi/N)k_0 n} x(n)$      | $a_{k-k_0}$ |
| Reflection                | $x(-n)$                         | $\frac{1}{N} x(-k)$ |
| Conjugation               | $x^*(n)$                        | $a^*_{-k}$ |
| Duality                   | $a_n$                           | $\frac{1}{N} x(-k)$ |
| Periodic Convolution      | $x \ast y(n)$            | $N a_k b_k$ |
| Multiplication            | $x(n) y(n)$                     | $a \ast b_k$ |

| Property                  |                                        |
|---------------------------|----------------------------------------| 
| Parseval's Relation       | $\displaystyle\frac{1}{N} \sum_{n=\langle N \rangle} \|x(n)\|^2 = \sum_{k=\langle N \rangle} \|a_k\|^2$ 
| Even Symmetry             | $x$ is even $\Leftrightarrow$ $a$ is even |                                 
| Odd Symmetry              | $x$ is odd $\Leftrightarrow$ $a$ is odd   |                                 
| Real / Conjugate Symmetry   | $x$ is real $\Leftrightarrow$ $a$ is conjugate symmetric |

## Reference(s)

- M. D. Adams, _Signals and Systems_, 3rd ed. The University of Victoria, Victoria, British Columbia, Canada, 2020.
