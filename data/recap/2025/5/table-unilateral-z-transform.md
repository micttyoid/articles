---
title: "Table of the unilateral z transform"
date-published: 2025-05-19
date-drafted: null
date-modified: 2025-05-19
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Signal'
  - 'System'
---

# Table of the unilateral z transform

## Properties

| Property | Time Domain | z Domain |
|----------|-------------|----------|
|Linearity| $a_1x_1(n) + a_2x_2(n)$ | $a_1X_1(z) + a_2X_2(z)$ |
|Time Delay| $x(n - 1)$ | $z^{-1}X(z) + x(-1)$ |
|Time Advance| $x(n + 1)$ | $zX(z) - zx(0)$ |
|Complex Modulation| $a^nx(n)$ | $X(z/a)$ |
|Conjugation| $x^*(n)$ | $ X^* \lparen z^* \rparen$ |
|Upsampling| $(\uparrow M)x(n)$ | $X(z^M)$ |
|Downsampling| $(\downarrow M)x(n)$ | $\frac{1}{M}\displaystyle\sum_{k=0}^{M-1} X(e^{-j2\pi k/M}\thinspace z^{1/M})$ |
|Convolution| $x_1 * x_2(n)$, $x_1$ and $x_2$ are causal | $X_1(z)X_2(z)$ |
|Z-Domain Differentiation| $nx(n)$ | $-z\frac{d}{dz}X(z)$ |
|Differencing| $x(n)-x(n-1)$ | $\frac{z-1}{z}X(z)-x(-1)=(1-z^{-1})X(z)-x(-1)$ |
|Accumulation| $\displaystyle\sum_{k=0}^n x(k)$ | $\displaystyle\frac{z}{z-1}X(z) = \frac{1}{1 - z^{-1}}X(z)$ |

|                     |                                        |
|---------------------|----------------------------------------|
|Initial Value Theorem| $x(0) = \lim\limits_{z\to\infty} X(z)$ |
|Final Value Theorem  | $\lim\limits_{n\to\infty}x(n)=\lim\limits_{z\to 1}[(z- 1)X(z)]$ |

## Transform pairs

|Pair| $x(n),n\ge0$ | $X(z)$                                                 |
|----|--------------|--------------------------------------------------------|
|1.  | $\delta(n)$  | $\displaystyle 1$ |
|2.  | $u(n)$       | $\displaystyle\frac{z}{z-1}= \frac{1}{1-z^{-1}}$ |
|3.  | $n$          | $\displaystyle\frac{z}{(z-1)^2}= \frac{z^{-1}}{(1-z^{-1})^2}$ |
|4.  | $a^n$        | $\displaystyle\frac{z}{z-a}= \frac{1}{1-az^{-1}}$ |
|5.  | $n a^n$      | $\displaystyle\frac{az}{(z-a)^2}= \frac{az^{-1}}{(1-az^{-1})^2}$ |
|6.  | $\cos(\Omega_0 n)$ | $\displaystyle\frac{z(z-\cos\Omega_0)}{z^2-(2\cos\Omega_0)z+1}= \frac{1-(\cos\Omega_0)z^{-1}}{1-(2\cos\Omega_0)z^{-1}+z^{-2}}$ |
|7.  | $\sin(\Omega_0 n)$ | $\displaystyle\frac{z\sin\Omega_0}{z^2-(2\cos\Omega_0)z+1}= \frac{(\sin\Omega_0)z^{-1}}{1-(2\cos\Omega_0)z^{-1}+z^{-2}}$ |
|8.  | $a^n \cos(\Omega_0 n)$ | $\displaystyle\frac{z(z-a\cos\Omega_0)}{z^2-(2a\cos\Omega_0)z+a^2}=\frac{1-(a\cos\Omega_0)z^{-1}}{1-(2a\cos\Omega_0)z^{-1}+a^2z^{-2}}$ |
|9.  | $a^n \sin(\Omega_0 n)$ | $\displaystyle\frac{za\sin\Omega_0}{z^2-(2a\cos\Omega_0)z+a^2}=\frac{(a\sin\Omega_0)z^{-1}}{1-(2a\cos\Omega_0)z^{-1}+a^2z^{-2}}$ |

## Reference(s)

- M. D. Adams, _Signals and Systems_, 3rd ed. The University of Victoria, Victoria, British Columbia, Canada, 2020.