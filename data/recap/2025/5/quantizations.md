---
title: "Quantizations"
date-published: null
date-drafted: 2025-05-22
date-modified: 2025-05-22
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Signal processing'
---

# Quantizations

## TODO

[Go find notebooks]

## Linear quantization

Properties: Uniform, Monotonic

```[latex]
\begin{align*}
&\text{ }\: 
f(x) = \text{Round}\left( \frac{x - a}{b - a} \cdot (N - 1) \right)
\\
&\text{ }\: 
f^{-1}(n) \approx a + \frac{n}{N - 1} \cdot (b - a)
\end{align*}
```

[Go find notebooks]