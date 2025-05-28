---
title: "Kruskal's algorithm"
date-published: 2025-05-27
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Minimum-spanning-tree'
  - 'Pathfinding'
  - 'Algorithm'
  - 'Kruskal' 
---

# Kruskal's algorithm

## Procedure

```pseudo
MST-KRUSKAL(G, w)
    A = ∅
    for each vertex v ∈ G.V
        MAKE-SET(v)
    sort the edges of G.E into nondecreasing order by weight w
    for each edge (u, v) ∈ G.E, taken in nondecreasing order by weight
        if FIND-SET(u) != FIND-SET(v)
            A = A ∪ {(u, v)}
            UNION(u, v)
    return A
```

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.