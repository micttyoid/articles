# Latex - Integrals 1

## By syntax

```latex
% Define command "diff". Renew it because an engine can cache
\renewcommand\diff{\mathop{}\!\mathrm{d}}
\biggl(
\int_{-\infty}^\infty e^{-x^2}\diff x\biggr)^2
=\int_{-\infty}^\infty\int_{-\infty}^\infty e^{-(x^2+y^2)}\diff x\diff y \\
= \int_0^{2\pi}\int_0^\infty e^{-r^2}r\diff r\diff\theta                  \\
= \int_0^{2\pi}\biggl(-{e^{-r^2}\over2}\bigg\vert_{r=0}^{r=\infty}\,\biggr)\diff\theta\\
= \pi                                          \tag*{q.e.d.} \\
```

```latex
% Define command "Diff" with an argument
\renewcommand\Diff[1]{\mathop{}\!\mathrm{d^#1}}

V(\mathbf{x}) = -\int_{\mathbf{R}^3}
   \frac{G}{|\mathbf{x}-\mathbf{y}|}\,\rho(\mathbf{y})\,\Diff3\mathbf{y}
```


## By render

```[latex]
% Define command "diff". Renew it because an engine can cache
\renewcommand\diff{\mathop{}\!\mathrm{d}}
\biggl(
\int_{-\infty}^\infty e^{-x^2}\diff x\biggr)^2
=\int_{-\infty}^\infty\int_{-\infty}^\infty e^{-(x^2+y^2)}\diff x\diff y \\
= \int_0^{2\pi}\int_0^\infty e^{-r^2}r\diff r\diff\theta                  \\
= \int_0^{2\pi}\biggl(-{e^{-r^2}\over2}\bigg\vert_{r=0}^{r=\infty}\,\biggr)\diff\theta\\
= \pi                                          \tag*{q.e.d.} \\
```

```[latex]
% Define command "Diff" with an argument
\renewcommand\Diff[1]{\mathop{}\!\mathrm{d^#1}}

V(\mathbf{x}) = -\int_{\mathbf{R}^3}
   \frac{G}{|\mathbf{x}-\mathbf{y}|}\,\rho(\mathbf{y})\,\Diff3\mathbf{y}
```

## Source

[tex.stackexchange - Should i \mathrm the d in my Integrals](https://tex.stackexchange.com/questions/60545/should-i-mathrm-the-d-in-my-integrals)