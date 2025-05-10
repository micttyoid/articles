---
title: 'Quicksort'
date-published: 2025-05-10
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Algorithm'
  - 'Sort'
---

# Quicksort

## Procedure in pseudocode

```pseudo
QUICKSORT(A, p, r):
    if p < r:
        q = PARTITION(A, p, r)
        QUICKSORT(A, p, q - 1)
        QUICKSORT(A, q + 1, r)

PARTITION(A, p, r):
    x = A[r]
    i = p - 1
    for j = p to r - 1:
        if A[j] <= x:
            i = i + 1
            exchange A[i] with A[j]
    exchange A[i + 1] with A[r]
    return i + 1
```

## References

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.