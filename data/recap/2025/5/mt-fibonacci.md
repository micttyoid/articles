---
title: 'Multithreaded procedure to compute Fibonacci number'
date-published: 2025-05-11
date-drafted: null
date-modified: 2025-06-20
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Algorithm'
  - 'Multithreading'
---

# Multithreaded procedure to compute Fibonacci number

## Procedure

```pseudo
P-FIB(n)
    if n <= 1
        return n
    else 
        x = spawn P-FIB(n - 1)
        y = P-FIB(n - 2)
        sync
        return x + y
```

## The serial version

```pseudo
FIB(n)
    if n <= 1
        return n
    else
        x = FIB(n - 1)
        y = FIB(n - 2)
        return x + y
```

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.