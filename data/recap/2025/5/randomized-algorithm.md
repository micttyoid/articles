---
title: "Randomized algorithm"
date-published: 2025-05-29
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Randomized algorithm'
  - 'Algorithm randomization'
---

# Randomized algorithm

## Example: Hire Assistant

```pseudo
HIRE-ASSISTANT(n)
    best = 0  // candidate number 0 is a least-qualified dummy candidate
    for i = 1 to n
        interview candidate i
        if candidate i is better than candidate best
            best = i
            hire candidate i
```

```pseudo
RANDOMIZED-HIRE-ASSISTANT(n)
    randomly permute the list of candidates
    best = 0
    for i = 1 to n
        interview candidate i
        if candidate i is better than candidate best
            best = i
            hire candidate i
```

## Permuting array

```pseudo
PERMUTE-BY-SORTING(A)
    n = A.length
    let P[1..n] be a new array
    for i = 1 to n
        P[i] = RANDOM(1, n^3)
    sort A, using P as sort keys
```

```pseudo
RANDOMIZE-IN-PLACE(A)
    n = length(A)
    for i = 1 to n
        swap A[i] with A[RANDOM(i, n)]
```

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.