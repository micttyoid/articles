---
title: 'Mean-heap'
date-published: 2025-05-12
date-drafted: null
date-modified: 2025-05-29
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Algorithm'
  - 'Data structure'
  - 'Heap'
  - 'Mean-heap'  
  - 'Tree'
---

# Mean-heap

**Uses**
- Priority queue: INSERT, MINIMUM, EXTRACT-MIN, DECREASE-KEY
- [Huffman codes](https://lukeyoo.fyi/recap/2025/5/huffman)
- [Prim's algorithm](https://lukeyoo.fyi/recap/2025/5/prim)
- [Dijkstra's algorithm](https://lukeyoo.fyi/recap/2025/5/djikstra)

## Table of Content

- [Operations](#operations)
  - [INSERT](#insert)
  - [MINIMUM](#minimum)
  - [EXTRACT-MIN](#extract-min)
  - [DECREASE-KEY](#decrease-key)
  - [MIN-HEAPIFY](#min-heapify)
  - [BUILD](#build)
- [Reference(s)](#references)

## Operations

### INSERT

- Wrapper for `DECREASE-KEY`
- Time complexity: `O(log n)`

```pseudo
MIN-HEAP-INSERT(A, key)
    A.heap-size = A.heap-size + 1
    A[A.heap-size] = ∞
    HEAP-DECREASE-KEY(A, A.heap-size, key) 
```

### MINIMUM
- Time complexity: `O(1)` (duh)

```pseudo
HEAP-MINIMUM(A)
    return A[1]
```

### EXTRACT-MIN
- Remove and return the element of `A` with the smallest key
- Time complexity: `O(log n)`

```pseudo
HEAP-EXTRACT-MIN(A)
    if A.heap-size < 1 // empty
        error "heap underflow"
    min = A[1]
    A[1] = A[A.heap-size]
    A.heap-size = A.heap-size - 1
    MIN-HEAPIFY(A, 1)
    return min
```

### DECREASE-KEY
- Insertion + "bubble up": min-heap property holds after disruptive case
- Time complexity: `O(log n)`

```pseudo
HEAP-DECREASE-KEY(A, i, key)
    if key > A[i]
        error "New key is greater than current key"
    A[i] = key
    while i > 1 and A[PARENT(i)] > A[i]
        exchange A[i] with A[PARENT(i)]
        i = PARENT(i)
```

### MIN-HEAPIFY
- Keep the subtree, rooted at index `i` obeys the min-heap property
- Time complexity: `O(log n)`

```pseudo
MIN-HEAPIFY(A, i)
    l = LEFT(i)
    r = RIGHT(i)
    smallest = i

    // Compare with left child
    if l ≤ A.heap-size and A[l] < A[smallest]
        smallest = l

    // Compare with right child
    if r ≤ A.heap-size and A[r] < A[smallest]
        smallest = r

    if smallest ≠ i
        exchange A[i] with A[smallest]
        MIN-HEAPIFY(A, smallest)
```

### BUILD
- Build a mean-heap from an array `A`
- Time-complexity: `O(n)`

```pseudo
BUILD-MIN-HEAP(A)
    A.heap-size = A.length
    for i = ⌊A.length / 2⌋ downto 1
        MIN-HEAPIFY(A, i)
```

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.