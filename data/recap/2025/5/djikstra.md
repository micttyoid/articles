---
title: "Djikstra's algorithm"
date-published: 2025-05-10
date-drafted: null
date-modified: 2025-05-11
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Dijkstra'
  - 'Path finding'
  - 'Algorithm'
---

# Djikstra's algorithm

## Procedure in pseudocode

```pseudo
DIJKSTRA(G, w, s):
    INITIALIZE-SINGLE-SOURCE(G, s)
    S = ∅
    Q = G.V
    while Q != ∅:
        u = EXTRACT-MIN(Q)
        S = S ∪ {u}
        for each vertex v in G.Adj[u]:
            RELAX(u, v, w)
```

```pseudo
INITIALIZE-SINGLE-SOURCE(G, s):
    for each vertex v in G.V:
        v.d = ∞
        v.π = NIL
    s.d = 0

RELAX(u, v, w):
    if v.d > u.d + w(u, v):
        v.d = u.d + w(u, v)
        v.π = u
```

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.