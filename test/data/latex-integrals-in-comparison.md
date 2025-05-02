# Test data: Latex - Integrals in comparison

## By syntax

```latex
\documentclass{article}
\usepackage{amsmath}
\begin{document}
\begin{align*}
\Gamma(z)=\int_0^\infty \!\! e^{-x}x^{z-1}\,dx 
  \quad&\text{vs.}\quad 
  \Gamma(z)=\int\limits_0^\infty e^{-x}x^{z-1}\,dx\\
B(x,y) = \int_0^\infty \!\! \frac{t^{x-1}}{(1+t)^{x+y}}\,dt
  \quad&\text{vs.}\quad
  B(x,y) = \int\limits _0^\infty \frac{t^{x-1}}{(1+t)^{x+y}}\,dt\\
\int_{-\infty}^\infty \frac{\frac{a(x)}{b(x)}}{\frac{c(x)}{f(x)}}\,dx 
  \quad&\text{vs.}\quad
  \int\limits_{-\infty}^\infty \frac{\frac{a(x)}{b(x)}}{\frac{c(x)}{f(x)}}\,dx
\end{align*}
\end{document}
```

## By render

```[latex]
\documentclass{article}
\usepackage{amsmath}
\begin{document}
\begin{align*}
\Gamma(z)=\int_0^\infty \!\! e^{-x}x^{z-1}\,dx 
  \quad&\text{vs.}\quad 
  \Gamma(z)=\int\limits_0^\infty e^{-x}x^{z-1}\,dx\\
B(x,y) = \int_0^\infty \!\! \frac{t^{x-1}}{(1+t)^{x+y}}\,dt
  \quad&\text{vs.}\quad
  B(x,y) = \int\limits _0^\infty \frac{t^{x-1}}{(1+t)^{x+y}}\,dt\\
\int_{-\infty}^\infty \frac{\frac{a(x)}{b(x)}}{\frac{c(x)}{f(x)}}\,dx 
  \quad&\text{vs.}\quad
  \int\limits_{-\infty}^\infty \frac{\frac{a(x)}{b(x)}}{\frac{c(x)}{f(x)}}\,dx
\end{align*}
\end{document}
```

## Resource

[tex.stackexchange - \int with \limits or without?](https://tex.stackexchange.com/questions/83545/int-with-limits-or-without)