---
title: "Prim's algorithm"
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
  - 'Prim'
---

# Prim's algorithm

## Procedure

```pseudo
MST-PRIM(G, w, r)
    for each u ∈ G.V
        u.key = ∞
        u.π = NIL
    r.key = 0
    Q = G.V
    while Q != ∅:
        u = EXTRACT-MIN(Q)
        for each v ∈ G.Adj[u]
            if v ∈ Q and w(u, v) < v.key
                v.π = u
                v.key = w(u, v)
```

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.