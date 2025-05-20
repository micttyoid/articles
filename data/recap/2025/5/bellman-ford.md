---
title: "The Bellman-Ford algorithm"
date-published: 2025-05-19
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Bellman-Ford'
  - 'Path finding'
  - 'Algorithm'
---

# The Bellman-Ford algorithm

## Procedure

```pseudo
BELLMAN-FORD(G, w, s)
    INITIALIZE-SINGLE-SOURCE(G, s)
    for i = 1 to |G.V| - 1
        for each edge (u, v) ∈ G.E
            RELAX(u, v, w)
    for each edge (u, v) ∈ G.E
        if v.d > u.d + w(u, v)
            return FALSE
    return TRUE
```

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.