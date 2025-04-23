# Test data: Latex - Integral, Sum, and Limit

## By syntax

```latex
\documentclass{article}
\title{Integrals, Sums and Limits}
\author{Overleaf}
\date{}
\usepackage{amsmath}

\begin{document}

\maketitle

\section{Integrals}

Integral \(\int_{a}^{b} x^2 dx\) inside text.

\medskip

The same integral on display:
\[
    \int_{a}^{b} x^2 \,dx
\]
and multiple integrals:
\begin{gather*}
    \iint_V \mu(u,v) \,du\,dv
\\
    \iiint_V \mu(u,v,w) \,du\,dv\,dw
\\
    \iiiint_V \mu(t,u,v,w) \,dt\,du\,dv\,dw
\\
    \idotsint_V \mu(u_1,\dots,u_k) \,du_1 \dots du_k
\\
    \oint_V f(s) \,ds
\end{gather*}

\section{Sums and products}

Sum \(\sum_{n=1}^{\infty} 2^{-n} = 1\) inside text.

The same sum on display:
\[
    \sum_{n=1}^{\infty} 2^{-n} = 1
\]

Product \(\prod_{i=a}^{b} f(i)\) inside text.

The same product on display:
\[
    \prod_{i=a}^{b} f(i)
\]

\section{Limits}

Limit \(\lim_{x\to\infty} f(x)\) inside text.

The same limit on display:
\[
    \lim_{x\to\infty} f(x)
\]

\end{document}
```

## By render

```[latex]
\documentclass{article}
\title{Integrals, Sums and Limits}
\author{Overleaf}
\date{}
\usepackage{amsmath}

\begin{document}

\maketitle

\section{Integrals}

Integral \(\int_{a}^{b} x^2 dx\) inside text.

\medskip

The same integral on display:
\[
    \int_{a}^{b} x^2 \,dx
\]
and multiple integrals:
\begin{gather*}
    \iint_V \mu(u,v) \,du\,dv
\\
    \iiint_V \mu(u,v,w) \,du\,dv\,dw
\\
    \iiiint_V \mu(t,u,v,w) \,dt\,du\,dv\,dw
\\
    \idotsint_V \mu(u_1,\dots,u_k) \,du_1 \dots du_k
\\
    \oint_V f(s) \,ds
\end{gather*}

\section{Sums and products}

Sum \(\sum_{n=1}^{\infty} 2^{-n} = 1\) inside text.

The same sum on display:
\[
    \sum_{n=1}^{\infty} 2^{-n} = 1
\]

Product \(\prod_{i=a}^{b} f(i)\) inside text.

The same product on display:
\[
    \prod_{i=a}^{b} f(i)
\]

\section{Limits}

Limit \(\lim_{x\to\infty} f(x)\) inside text.

The same limit on display:
\[
    \lim_{x\to\infty} f(x)
\]

\end{document}
```

## Source

[Overleaf - Integrals, Sums, and Limits](https://www.overleaf.com/learn/latex/Integrals%2C_sums_and_limits)