---
title: "Sampling theorem"
date-published: 2025-06-12
date-drafted: null
date-modified: null
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Communications engineering"
  - "Digital signal processing"
  - "Sampling theorem"
  - "equi-space"
  - "Information theory"
  - "Nyquist"  
  - "Nyquist-Shannon"
  - "Shannon"
---

# Sampling theorem

## Sampling theorem: with bandlimit

**Theorem** Let $x$ be a function with the Fourier transform $X$, and let $y$ be the sequence resulting from the periodic sampling of $x$ with the sampling period $T$. Suppose that $|X(\omega)| = 0$ for all $|\omega| > \omega_M$. Then, $x$ is uniquely determined by $y$ if

```[latex]
\omega_s > 2\omega_M \qquad$ where $\omega_s = \frac{2\pi}{T}
```

If the condition is true, this holds

```[latex]
x(t) = \sum_{n=-\infty}^{\infty} y(n) \operatorname{sinc}\left(\frac{\pi}{T}(t - Tn)\right)
```

## Sampling theorem: plain english

The sampling frequency should be at least twice the highest frequency contained in the signal.

## Sampling theorem: B style

**Theorem** If a function $x(t)$ contains no frequencies higher than $B$ hertz, then it can be completely determined from its ordinates at a sequence of points spaced less than $\frac{1}{2B}$ seconds apart.

## Common symbols and notations

|                             | name                            | unit    |
|-----------------------------|---------------------------------|---------|
|$f_s$                        | Sampling frequency (ordinary)   | Hz      |
|$\omega_s$                   | Sampling frequency (angular)    | rad/s   |

## Terms that are often named

|                                   |                                |
|-----------------------------------|--------------------------------|
|$\displaystyle\frac{f_s}{2}$       | Nyquist frequency (ordinary)   |
|$\displaystyle\frac{\omega_s}{2}$  | Nyquist frequency (angular)    |
|$\displaystyle 2 B$                | Nyquist rate (ordinary)        |
|$\displaystyle 2 \omega_M$         | Nyquist rate (angular)         |

## Reference(s)

- M. D. Adams, _Signals and Systems_, 3rd ed. The University of Victoria, Victoria, British Columbia, Canada, 2020.