---
title: "Note on introductory linear algebra"
date-published: null
date-drafted: 2025-05-22
date-modified: 2025-05-30
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'linear algebrae'
---

# Note on introductory linear algebra

**Table of Contents**
- [TODO](#todo)
- [Inverses and Transpose](#inverses-and-transpose)
- [Other techniques](#other-techniques)

## TODO

Other topic:
- some intro application from other reference

## Inverses and Transpose

### Inverse

The inverse of $A$ is a matrix $B$ such that $BA = I$ and $AB = I$.
There is at most one such $B$, and it is denoted by $A^{-1}$

$A^{-1}A = I$ and $AA^{-1} = I$

### Proof by parentheses

$B(AC) = (BA)C$ gives $BI = IC$ which is $B = C$

### Resolution of invertible $A$

Multiply $Ax = b$ by $A^{-1}$. Then $x = A^{-1}Ax = A^{-1}b$.

### Glimpse of the determinantling

**2 by 2 inverse** $\quad \begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.

[Some Transpose]

### With associativity

**Inverse of** $ABC$:$\quad (ABC)^{-1} = C^{-1}B^{-1}A^{-1}$.

**Inverse of the triple product**: $\quad (ABC)^{-1} = C^{-1}B^{-1}A^{-1}$.

[Some Transpose]

### Symmetry

A symmetric matrix is a matrix that equal s its own transpose iow.
- $A^{T} = A$
- $a_{ij} = a_{ji}$

### Inverse x Transpose

**Inverse of** $A^{T}$ = **Transpose of** $A^{-1}$:
$\quad (A^\mathrm{T})^{-1} = (A^{-1})^\mathrm{T}$ where $(A^{-1})^\mathrm{T}A^\mathrm{T} = I$.

### Inverse x Symmetry

$A$ is symmetric and invertible $\implies A^{-1}$ is symmetric

### Transpose x Symmetry

For any matrix $R, \medspace$ if $A = R^{T}R, \medspace$ then $A^{-1}$ is symmetric

## Other techniques

TODO: Augmented matrix with linear example

## Reference(s)

- G. Strang, _Introduction to Linear Algebra_, 4th ed. Wellesley, MA: Wellesley-Cambridge Press, 2009.