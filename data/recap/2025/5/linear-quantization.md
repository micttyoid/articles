---
title: "Quantizations"
date-published: 2025-05-26
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Signal processing'
---

# Linear Quantization

```[latex]
\begin{align*}
&\text{ }\: 
f(x) = \text{Round}\left( \frac{x - a}{b - a} \cdot (N - 1) \right)
\\
&\text{ }\: 
f^{-1}(n) \approx a + \frac{n}{N - 1} \cdot (b - a)
\end{align*}
```
