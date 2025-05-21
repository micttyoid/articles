---
title: 'A* algorithm'
date-published: 2025-05-20
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'A*'
  - 'A-star'
  - 'Path finding'
  - 'Algorithm'
---

# A* algorithm

## Procedure

```pseudo
A-STAR(G, s, t, HEURISTIC)
    INITIALIZE-SINGLE-SOURCE-WITH-CONSTRAINT(G, s, HEURISTIC)
    S = ∅
    Q = G.Snt // ordered by the constraint
    
    while u ≠ t and Q ≠ ∅:
        u = EXTRACT-MIN(Q)
        S = S ∪ {u}
        for each vertex v in G.Adj[u]:
            RELAX(u, v, w, HEURISTIC)
```

```pseudo
INITIALIZE-SINGLE-SOURCE-WITH-CONSTRAINT(G, s, HEURISTIC):
    for each vertex v ∈ G.V:
        v.d = ∞
        G.Snt[v] = ∞
        v.π = NIL
    s.d = 0
    G.Snt[s] = HEURISTIC(s,t)

RELAX(u, v, w, HEURISTIC)
    if v.d > u.d + w(u, v):
        v.d = u.d + w(u, v)
        G.Snt[v] = v.d + HEURISTIC(v,t)
        v.π = u
```