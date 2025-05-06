# Test data: Latex - Integrals in comparison

## By syntax

```latex
\begin{gather}
\Gamma(z)=\int_0^\infty \!\! e^{-x}x^{z-1} \mathrm{d}x
\quad\text{vs.}
\quad \Gamma(z)=\int\limits_0^\infty e^{-x}x^{z-1}\mathrm{d}x \\
B(x,y) = \int_0^\infty \!\! \frac{t^{x-1}}{(1+t)^{x+y}}\mathrm{d}t
\quad\text{vs.}\quad
B(x,y) = \int\limits _0^\infty \frac{t^{x-1}}{(1+t)^{x+y}}\mathrm{d}t \\
\int_{-\infty}^\infty \frac{\frac{a(x)}{b(x)}}{\frac{c(x)}{f(x)}}\mathrm{d}x 
\quad\text{vs.}\quad
\int\limits_{-\infty}^\infty \frac{\frac{a(x)}{b(x)}}{\frac{c(x)}{f(x)}}\mathrm{d}x
\end{gather}
```

## By render

```[latex]
\begin{gather}
\Gamma(z)=\int_0^\infty \!\! e^{-x}x^{z-1} \mathrm{d}x
\quad\text{vs.}
\quad \Gamma(z)=\int\limits_0^\infty e^{-x}x^{z-1}\mathrm{d}x \\
B(x,y) = \int_0^\infty \!\! \frac{t^{x-1}}{(1+t)^{x+y}}\mathrm{d}t
\quad\text{vs.}\quad
B(x,y) = \int\limits _0^\infty \frac{t^{x-1}}{(1+t)^{x+y}}\mathrm{d}t \\
\int_{-\infty}^\infty \frac{\frac{a(x)}{b(x)}}{\frac{c(x)}{f(x)}}\mathrm{d}x 
\quad\text{vs.}\quad
\int\limits_{-\infty}^\infty \frac{\frac{a(x)}{b(x)}}{\frac{c(x)}{f(x)}}\mathrm{d}x
\end{gather}
```

## Resource

[tex.stackexchange - \int with \limits or without?](https://tex.stackexchange.com/questions/83545/int-with-limits-or-without)