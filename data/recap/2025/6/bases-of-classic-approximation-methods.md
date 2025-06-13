---
title: "Bases of classic approximation methods"
date-published: 2025-06-13
date-drafted: null
date-modified: null
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Approximation"
---

# Bases of classic approximation methods

## Maclaurin series

Which is a particular case of Taylor series where $a = 0$

```[latex]
\sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}(x-0)^n = f(0) + f'(0)(x-0) + \frac{f''(0)}{2!}(x-0)^2 + \cdots + \frac{f^{(n)}(0)}{n!}(x-0)^n + \cdots
```

## Taylor series

```[latex]
\sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n + \cdots
```