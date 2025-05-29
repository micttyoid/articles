---
title: "Matrix modeling of quantum computation"
date-published: 2025-05-29
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Matrix modeling'
  - 'Quantum computation'
  - 'Quantum gates'
  - 'Quantum operators'
---

# Matrix modeling of quantum computation

## Property of quantum operations in matrix

**Unitarity**

$U^\dag U = U U^\dag = I$

where $U^\dag$ is the _Hermitian_ (_Hermitean_) _adjoint_ of $U$

## Gates: 1-qubit example

**QNOT**

$\displaystyle
QNOT \equiv \begin{bmatrix}
   0 & 1 \\
   1 & 0
\end{bmatrix}$

Same as Pauli-X (Pauli-1)

**Rotation**

$U_\theta \equiv \begin{bmatrix}
\cos(\theta) & \sin(\theta) \\
-\sin(\theta) & \cos(\theta)
\end{bmatrix}$

**Square root of NOT**

$\displaystyle
SRN \equiv \frac{1}{\sqrt{2}} \begin{bmatrix}
1 & -1 \\
1 & 1
\end{bmatrix}$

**Hadamard**

$\displaystyle
H \equiv \frac{1}{\sqrt{2}} \begin{bmatrix}
1 & 1 \\
1 & -1
\end{bmatrix}$

## Gates: 2-qubit example

**Controlled phase**

$\displaystyle
\text{CPHASE} \equiv \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & e^{i\phi}
\end{bmatrix}$

**Swap**

$\displaystyle
\text{SWAP} \equiv \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

## Reference(s)

- L. Spector, _Automatic Quantum Computer Programming: A Genetic Programming Approach_. NY: Springer, 2004.

- M. Soeken, D. M. Miller, R. Drechsler. On quantum circuits employing roots of the Pauli matrices. arXiv:1308.2493, 2013.