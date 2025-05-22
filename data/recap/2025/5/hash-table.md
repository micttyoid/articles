---
title: 'Hash table'
date-published: null
date-drafted: 2025-05-22
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Hash table'
---

# Hash Table

## TODO

[other topics]

## Open-address: procedures

```pseudo
HASH-INSERT(T, k)
    i = 0
    repeat
        j = h(k, i)
        if T[j] == NIL
            T[j] = k
            return j
        else
            i = i + 1
    until i == m
    error "hash table overflow"
```


```pseudo
HASH-SEARCH(T, k)
    i = 0
    repeat
        j = h(k, i)
        if T[j] == k
            return j
        i = i + 1
    until T[j] == NIL or i == m
    return NIL
```

## Basic hash functions

## Nomenclature, glossary, etc.

**Chaining**: It extends each slot by a linked list to resolve collision, whose table is often called _chained table_.

**Collision**: It is when two keys hash to the same slot.

**Probing**: In, for example, insertion, one successively examines, or _probes_ a hash table, slot to slot, until an empty slot is found to put the key.

**Load factor**: It is used, for analysis, when a table is chained. It is $\alpha = n/m$, the average number of elements in a chain, given a hash table $T$ with $m$ slots that stores $n$ elements. It blind-sides the distribution.

**Uniform hashing**: The probe sequence of each key is equally likely to be any of the $m!$ permutations of $\langle 0, 1, \dots, m - 1 \rangle$


## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.