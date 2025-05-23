---
title: "Table of Discrete-Time Fourier Transform"
date-published: 2025-05-23
date-drafted: null
date-modified: 2025-05-23
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Signal Processing'
  - 'DTFT'
  - 'DT Fourier Transform'
  - 'Discrete-time Transform'
---

# Table of Discrete-Time Fourier Transform

## Properties of the DT Fourier transform

| Property       | Time Domain               | Frequency Domain    |
|----------------|---------------------------|---------------------|
| Linearity      | $a_1x_1(n) + a_2x_2(n)$   |$a_1X_1(\Omega) + a_2X_2(\Omega)$ |
| Translation    | $x(n - n_0)$              |$e^{-j\Omega n_0}X(\Omega)$ |
| Modulation     | $e^{j\Omega_0n}x(n)$      |$X(\Omega-\Omega_0)$ |
| Conjugation    | $x^*(n)$                  |$X^*(-\Omega)$ |
| Time Reversal  | $x(-n)$                   |$X(-\Omega)$ |
| Upsampling     | $(\uparrow M)x(n)$        |$X(M\Omega)$ |
| Downsampling   | $x(Mn)$                   |$\displaystyle\frac{1}{M}\sum_{k=0}^{M-1}X\left(\frac{\Omega-2\pi k}{M}\right)$ |
| Convolution    | $x_1\ast x_2(n)$      | $X_1(\Omega)X_2(\Omega)$ |
| Multiplication | $x_1(n)x_2(n)$         | $\displaystyle\frac{1}{2\pi}\int_{2\pi}X_1(\theta)X_2(\Omega-\theta)d\theta$ |
| Frequency-Domain Differentiation | $nx(n)$ | $\displaystyle j\frac{d}{d\Omega}X(\Omega)$ |
| Differencing   | $x(n)-x(n-1)$ | $\displaystyle(1-e^{-j\Omega})X(\Omega)$ |
| Accumulation   | $\displaystyle\sum_{k=-\infty}^n x(k)$| $\displaystyle\frac{e^{j\Omega}}{e^{j\Omega}-1}X(\Omega)+\pi X(0)\sum_{k=-\infty}^{\infty}\delta(\Omega-2\pi k)$ |

| Property                 |                              |
|--------------------------|------------------------------|
| Periodicity              | $X(\Omega) = X(\Omega+2\pi)$ |
| Parseval's Relation      | $\displaystyle\sum_{n=-\infty}^{\infty}\|x(n)\|^2 = \frac{1}{2\pi}\int_{2\pi}\|X(\Omega)\|^2 d\Omega$ |
| Even Symmetry            | $x$ is even $\Leftrightarrow X$ is even |
| Odd Symmetry             | $x$ is odd $\Leftrightarrow X$ is odd |
| Real / Conjugate Symmetry| $x$ is real $\Leftrightarrow X$ is conjugate symmetric |

## Transform pairs for the Discrete-Time Fourier Transform

|Pair| $\mathbf{x(n)}$       | $\mathbf{X(\Omega)}$ |
| ---|-----------------------|----------------------|
|1   | $\delta(n)$           | $1$                  |
|2   | $1$                   | $\displaystyle2\pi\sum_{k=-\infty}^{\infty}\delta(\Omega-2\pi k)$ |
|3   | $u(n)$                | $\displaystyle\frac{e^{j\Omega}}{e^{j\Omega}-1} + \pi\sum_{k=-\infty}^{\infty}\delta(\Omega-2\pi k)$ |
|4   | $a^nu(n),\|a\|<1$     | $\displaystyle\frac{e^{j\Omega}}{e^{j\Omega}-a}$ |
|5   | $-a^nu(-n-1),\|a\|>1$ | $\displaystyle\frac{e^{j\Omega}}{e^{j\Omega}-a}$ |
|6   | $a^{\|n\|}, \|a\|<1$  | $\displaystyle\frac{1-a^2}{1-2a\cos\Omega+a^2}$ |
|7   | $\cos(\Omega_0n)$     | $\displaystyle\pi\sum_{k=-\infty}^{\infty}[\delta(\Omega-\Omega_0-2\pi k)+\delta(\Omega+\Omega_0-2\pi k)]$ |
|8   | $\sin(\Omega_0n)$     | $\displaystyle j\pi\sum_{k=-\infty}^{\infty}[\delta(\Omega+\Omega_0-2\pi k)-\delta(\Omega-\Omega_0-2\pi k)]$ |
|9   | $\cos(\Omega_0n)u(n)$ | $\displaystyle\frac{e^{j2\Omega}-e^{j\Omega}\cos\Omega_0}{e^{j2\Omega}-2e^{j\Omega}\cos\Omega_0+1} + \frac{\pi}{2}\sum_{k=-\infty}^{\infty}[\delta(\Omega-2\pi k-\Omega_0)+\delta(\Omega-2\pi k+\Omega_0)]$ |
|10  | $\sin(\Omega_0n)u(n)$ | $\displaystyle\frac{e^{j\Omega}\sin\Omega_0}{e^{j2\Omega}-2e^{j\Omega}\cos\Omega_0+1} + \frac{\pi}{2j}\sum_{k=-\infty}^{\infty}[\delta(\Omega-2\pi k-\Omega_0)-\delta(\Omega-2\pi k+\Omega_0)]$ |
|11  | $\frac{\pi}{B}\text{sinc}(Bn),0<B<\pi$ | $\displaystyle\sum_{k=-\infty}^{\infty}\text{rect}\left(\frac{\Omega-2\pi k}{2B}\right)$ |
|12  | $u(n) - u(n - M)$     | $\displaystyle e^{-j\Omega(M-1)/2}\frac{\sin(M\Omega/2)}{\sin(\Omega/2)}$ |
|13  | $na^nu(n), \|a\| < 1$ | $\displaystyle\frac{ae^{j\Omega}}{(e^{j\Omega}-a)^2}$ |