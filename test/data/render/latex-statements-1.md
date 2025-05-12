# Test data: Latex - statements 1


## III.1 Basis

**1.1 Definition**  A _basis_ for a vector space is a sequence of vectors that is linearly independent and that spans the space.

**1.5 Definition** For any $\mathbb{R}^n$

```[latex]
\mathcal{E}_n = \left\langle
\begin{bmatrix}
1 \\ 0 \\ \vdots \\ 0 \\ 0
\end{bmatrix}, \begin{bmatrix}
0 \\ 1 \\ \vdots \\ 0 \\ 0
\end{bmatrix}, \ldots, \begin{bmatrix}
0 \\ 0 \\ \vdots \\ 0 \\ 1
\end{bmatrix} \right\rangle
```

is the _standard_ (or _natural_) basis. We denote these vectors $\vec{e}_1, \vec{e}_2, \dots, \vec{e}_n$.

**1.12 Theorem** In any vector space, a subset is a basis if and only if each vector in the space can be expressed as a linear combination of elements of the subset in one and only one way.


**1.13 Definition** In a vector space with basis B the _representation of_ $\vec{\nu}$ _with respect to_ $B$ is the column vector of the coefficients used to express $\vec{\nu}$ as a linear combination of the basis vectors:


```[latex]
\text{Rep}_B(\vec{\nu}) =
\begin{bmatrix}
c_1 \\ c_2 \\ \vdots \\ c_n
\end{bmatrix}_B
```

where $B = \langle \vec{\beta}_1, \dots, \vec{\beta}_n \rangle$ and $\vec{\nu} = c_1\vec{\beta}_1 + c_2\vec{\beta}_2 + \cdots + c_n\vec{\beta}_n$. The $c$'s are the _coordinates of_ $\vec{\nu}$ _with respect to_ $B$.

## Reference(s)

- J. Hefferon, _Linear Algebra_, 4th ed. (Self-published, 2020).
