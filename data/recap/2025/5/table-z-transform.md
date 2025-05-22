---
title: "Table of the unilateral z transform"
date-published: 2025-05-22
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'z-transform'
  - 'Bilateral z-tranform'
---

# Table of the (bilateral) z transform

## Properties of the (bilateral) z transform

| Property    | Time Domain   | z-Domain    | ROC          |
|-------------|---------------|-------------|--------------|
| Linearity |$a_1x_1(n)+ a_2x_2(n)$|$a_1X_1(z)+ a_2X_2(z)$| At least $R_1 \cap R_2$|
| Translation | $x(n-n_0)$ | $z^{-n_0}X(z)$ | $R$, except for 0 addition/deletion |
| Complex Modulation |$a^nx(n)$| $X(z/a)$ | $\vert a\vert R$|
| Conjugation   | $x^*(n)$ | $X^*(z^*)$ | $R$|
| Time Reversal | $x(-n)$  | $X(1/z)$ | $R^{-1}$|
| Upsampling    | $(\uparrow M)x(n)$ | $X(z^M)$ | $R^{1/M}$|
| Downsampling  |$(\downarrow M)x(n)$|$\displaystyle\frac{1}{M}\sum_{k=0}^{M-1} X(e^{-j2\pi k/M}z^{1/M})$ | $R^M$|
| Convolution | $x_1 \ast x_2(n)$ | $X_1(z)X_2(z)$ | At least $R_1 \cap R_2$|
| z-Domain Differentiation | $nx(n)$| $-z\frac{d}{dz} X(z)$ | $R$|
| Differencing|$x(n)-x(n-1)$|$\displaystyle\frac{z-1}{z} X(z) = (1-z^{-1}) X(z)$| At least $R \cap \vert z\vert > 0$|
| Accumulation|$\displaystyle\sum_{k=-\infty}^n x(k)$| $\displaystyle\frac{z}{z-1} X(z) = \frac{1}{1-z^{-1}}X(z)$ | At least $R \cap \vert z\vert > 1$|

| Property              |                                                  |
|-----------------------|--------------------------------------------------|
| Initial Value Theorem | $x(0)=\lim\limits_{z\to\infty} X(z)$|
| Final Value Theorem | $\lim\limits_{n\to\infty}x(n) = \lim\limits_{z\to 1}\lbrack (z - 1)X(z)\rbrack$ | 

## Transform pairs for the (bilateral) z transform

|Pair| $x(n)$          | $X(z)$ | ROC |
|----|-----------------|--------|-----|
|1.  | $\delta(n)$     | 1 | All $z$ |
|2.  | $u(n)$          | $\displaystyle\frac{z}{z-1} = \frac{1}{1-z^{-1}}$ | $\|z\|>1$|
|3.  | $-u(-n-1)$      | $\displaystyle\frac{z}{z-1} = \frac{1}{1-z^{-1}}$ | $\|z\|<1$|
|4.  | $nu(n)$         | $\displaystyle\frac{z}{(z-1)^2} = \frac{z^{-1}}{(1-z^{-1})^2}$ | $\|z\|>1$|
|5.  | $-nu(-n-1)$     | $\displaystyle\frac{z}{(z-1)^2} = \frac{z^{-1}}{(1-z^{-1})^2}$          | $\|z\|<1$|
|6.  | $a^nu(n)$       | $\displaystyle\frac{z}{z-a} = \frac{1}{1-az^{-1}}$ | $\|z\|>\|a\|$|
|7.  | $-a^nu(-n-1)$   | $\displaystyle\frac{z}{z-a} = \frac{1}{1-az^{-1}}$ | $\|z\|<\|a\|$|
|8.  | $na^nu(n)$      | $\displaystyle\frac{az}{(z-a)^2} = \frac{az^{-1}}{(1-az^{-1})^2}$ | $\|z\|>\|a\|$|
|9.  | $-na^nu(-n-1)$  | $\displaystyle\frac{az}{(z-a)^2} = \frac{az^{-1}}{(1-az^{-1})^2}$ | $\|z\|<\|a\|$|
|10.  | $\displaystyle\frac{(n+1)(n+2)\cdots(n+m-1)}{(m-1)!}a^nu(n)$ | $\displaystyle\frac{z^m}{(z-a)^m} = \frac{1}{(1-az^{-1})^m}$ | $\|z\|>\|a\|$|
|11. | $-\frac{(n+1)(n+2)\cdots(n+m-1)}{(m-1)!}a^nu(-n-1)$ | $\displaystyle\frac{z^m}{(z-a)^m} = \frac{1}{(1-az^{-1})^m}$ | $\|z\|<\|a\|$|
|12. | $\cos(\Omega_0n)u(n)$ | $\displaystyle\frac{z(z-\cos\Omega_0)}{z^2-2z\cos\Omega_0+1} = \frac{1-(\cos\Omega_0)z^{-1}}{1-(2\cos\Omega_0)z^{-1}+z^{-2}}$ | $\|z\|>1$|
|13. | $-\cos(\Omega_0n)u(-n-1)$ | $\displaystyle\frac{z(z-\cos\Omega_0)}{z^2-2z\cos\Omega_0+1} = \frac{1-(\cos\Omega_0)z^{-1}}{1-(2\cos\Omega_0)z^{-1}+z^{-2}}$ | $\|z\|<1$|
|14. | $\sin(\Omega_0n)u(n)$ | $\displaystyle\frac{z\sin\Omega_0}{z^2-2z\cos\Omega_0+1} = \frac{(\sin\Omega_0)z^{-1}}{1-(2\cos\Omega_0)z^{-1}+z^{-2}}$ | $\|z\|>1$|
|15. | $-\sin(\Omega_0n)u(-n-1)$ | $\displaystyle\frac{z\sin\Omega_0}{z^2-2z\cos\Omega_0+1} = \frac{(\sin\Omega_0)z^{-1}}{1-(2\cos\Omega_0)z^{-1}+z^{-2}}$ | $\|z\|<1$|
|16. | $a^n\cos(\Omega_0n)u(n)$ | $\displaystyle\frac{z(z-a\cos\Omega_0)}{z^2-2az\cos\Omega_0+a^2} = \frac{1-(a\cos\Omega_0)z^{-1}}{1-(2a\cos\Omega_0)z^{-1}+a^2z^{-2}}$ | $\|z\|>\|a\|$|
|17. | $a^n\sin(\Omega_0n)u(n)$ | $\displaystyle\frac{az\sin\Omega_0}{z^2-2az\cos\Omega_0+a^2} = \frac{(a\sin\Omega_0)z^{-1}}{1-(2a\cos\Omega_0)z^{-1}+a^2z^{-2}}$ | $\|z\|>\|a\|$|
|18. | $u(n)-u(n-M), M>0$ | $\displaystyle\frac{z(1-z^{-M})}{z-1} = \frac{1-z^{-M}}{1-z^{-1}}$ | $\|z\|>0$|
|19. | $a^{\|n\|}, \|a\|<1$ | $\displaystyle\frac{(a-a^{-1})z}{(z-a)(z-a^{-1})}$ | $\|a\|<\|z\|<\|a\|^{-1}$|

## Reference(s)

- M. D. Adams, _Signals and Systems_, 3rd ed. The University of Victoria, Victoria, British Columbia, Canada, 2020.