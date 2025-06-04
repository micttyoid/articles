---
title: "Discrete Fourier transforms"
date-published: 2025-06-04
date-drafted: null
date-modified: null
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Digital signal processing"
  - "DFT"
  - "IDFT"
  - "FFT"
---

# Discrete Fourier transforms

## Discrete Fourier Tranform and its Inverse: 1D

For one-dimensional input data $f(n)$ of length $N$

```[latex]
\begin{align*}
\\
&\text{ }\: 
\text{DTF}\{f(n)\} = \sum_{n=0}^{N-1} f(n) e^{\frac{-j2\pi \ k n}{N}} \quad\text{where}\enspace k \in [0 .. N-1]
\\
&\text{ }\:
\text{IDTF}\{F(k)\} = \frac{1}{N} \sum_{k=0}^{N-1} F(k) e^{\frac{j2\pi \ k n}{N}} \quad\text{where}\enspace n \in [0 .. N-1]
```

## Discrete Fourier Tranform and its Inverse: 2D

For two-dimensional input data $f(m,n)$ of size $M \times N$

```[latex]
\begin{align*}
\\
&\text{ }\:
\text{DFT}\{f(m,n)\} = \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} f(m,n) e^{-j2\pi(\frac{um}{M} + \frac{vn}{N})} \quad\text{where}\enspace u \in [0..M-1], v\in [0..N-1]
\\
&\text{ }\:
\displaystyle \text{IDFT}\{F(u,v)\} = \frac{1}{MN} \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} F(u,v) e^{j2\pi(\frac{ux}{M} + \frac{vy}{N})} \quad\text{where}\enspace m \in [0..M-1], n\in [0..N-1]
```

## Fast Fourier Tranform (Danielson-Lanczos lemma)

Using the 1-D DFT given the input data $f(n)$ of length $N$

```[latex]
\begin{align*}
\\
&\text{ }\: 
\sum_{n=0}^{N/2-1} f(2n) e^{\frac{-j2\pi\ (2n)k}{N}}  + \sum_{n=0}^{N/2-1} f(2n+1) e^{\frac{-j2\pi\ (2n+1)k}{N}}
\\
&\text{ }\: 
=\sum_{n=0}^{N/2-1} f(2n) e^{\frac{-j2\pi\ nk}{N/2}}  + e^{\frac{-j2\pi k}{N}}\sum_{n=0}^{N/2-1} f(2n+1) e^{\frac{-j2\pi\ nk}{N/2}}
\\
&\text{ }\:
=\text{DFT}_{\text{e}}  + W^{k}_{n} \ \text{DTF}_{\text{o}}
\end{align*}
```
