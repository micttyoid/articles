---
title: "Van Emde Boas"
date-published: 2025-05-14
date-drafted: null
date-modified: 2025-05-14
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Cluster'
  - 'Dynamic Set'
  - 'Query'
  - 'Tree'
  - 'vEB'
---

# Van Emde Boas

## Operations

Canonicals
- [SEARCH](#search)
- [INSERT](#insert)
- [DELETE](#delete)
- [MINIMUM](#minimum)
- [MAXIMUM](#maximum)
- [SUCCESSOR](#successor)
- [PREDECESSOR](#predecessor)

Others
- [MEMBER](#member)
- [helpers](#helpers)

### SEARCH

- Complexity: `O(log log u)`

```pseudo
vEB-TREE-SEARCH(V, x)
    if x == V.min or x == V.max
        return x
    elseif V.u == 2
        return NIL
    else
        return vEB-TREE-SEARCH(V.cluster[high(x)], low(x))
```

### INSERT

- Complexity: `O(log log u)`

```pseudo
vEB-TREE-INSERT(V, x)
    if V.min == NIL
        vEB-EMPTY-TREE-INSERT(V, x)
    else
        if x < V.min
            exchange x with V.min
        if V.u > 2
            if vEB-TREE-MINIMUM(V.cluster[high(x)]) == NIL
                vEB-TREE-INSERT(V.summary, high(x))
                vEB-EMPTY-TREE-INSERT(V.cluster[high(x)], low(x))
            else
                vEB-TREE-INSERT(V.cluster[high(x)], low(x))
        if x > V.max
            V.max = x

vEB-EMPTY-TREE-INSERT(V, x)
    V.min = x
    V.max = x
```

### DELETE

- Complexity: `O(log log u)`

```pseudo
vEB-TREE-DELETE(V, x)
    if V.min == V.max
        V.min = NIL
        V.max = NIL
    elseif V.u == 2
        if x == 0
            V.min = 1
        else
            V.min = 0
        V.max = V.min
    else
        if x == V.min
            first-cluster = vEB-TREE-MINIMUM(V.summary)
            x = index(first-cluster,
                vEB-TREE-MINIMUM(V.cluster[first-cluster]))
            V.min = x
        vEB-TREE-DELETE(V.cluster[high(x)], low(x))
        if vEB-TREE-MINIMUM(V.cluster[high(x)]) == NIL
            vEB-TREE-DELETE(V.summary, high(x))
            if x == V.max
                summary-max = vEB-TREE-MAXIMUM(V.summary)
                if summary-max == NIL
                    V.max = V.min
                else
                    V.max = index(summary-max,
                            vEB-TREE-MAXIMUM(V.cluster[summary-max]))
        elseif x == V.max
            V.max = index(high(x), vEB-TREE-MAXIMUM(V.cluster[high(x)]))
```

### MINIMUM

- Complexity: `O(1)`

```pseudo
vEB-TREE-MINIMUM(V)
    return V.min
```

### MAXIMUM

- Complexity: `O(1)`

```pseudo
vEB-TREE-MAXIMUM(V)
    return V.max
```

### SUCCESSOR

- Complexity: `O(log log u)`

```pseudo
vEB-TREE-SUCCESSOR(V, x)
    if V.u == 2
        if x == 0 and V.max == 1
            return 1
        else
            return NIL
    elseif V.min ≠ NIL and x < V.min
        return V.min
    else
        max-low = vEB-TREE-MAXIMUM(V.cluster[high(x)])
        if max-low ≠ NIL and low(x) < max-low
            offset = vEB-TREE-SUCCESSOR(V.cluster[high(x)], low(x))
            return index(high(x), offset)
        else
            succ-cluster = vEB-TREE-SUCCESSOR(V.summary, high(x))
            if succ-cluster == NIL
                return NIL
            else
                offset = vEB-TREE-MINIMUM(V.cluster[succ-cluster])
                return index(succ-cluster, offset)
```

### PREDECESSOR

- Complexity: `O(log log u)`

```pseudo
vEB-TREE-PREDECESSOR(V, x)
    if V.u == 2
        if x == 1 and V.min == 0
            return 0
        else
            return NIL
    elseif V.max ≠ NIL and x > V.max
        return V.max
    else
        min-low = vEB-TREE-MINIMUM(V.cluster[high(x)])
        if min-low ≠ NIL and low(x) > min-low
            offset = vEB-TREE-PREDECESSOR(V.cluster[high(x)], low(x))
            return index(high(x), offset)
        else
            pred-cluster = vEB-TREE-PREDECESSOR(V.summary, high(x))
            if pred-cluster == NIL
                if V.min ≠ NIL and x > V.min
                    return V.min
                else
                    return NIL
            else
                offset = vEB-TREE-MAXIMUM(V.cluster[pred-cluster])
                return index(pred-cluster, offset)
```

### MEMBER

- Complexity: `O(log log u)`

```pseudo
vEB-TREE-MEMBER(V, x)
    if x == V.min or x == V.max
        return TRUE
    elseif V.u == 2
        return FALSE
    else
        return vEB-TREE-MEMBER(V.cluster[high(x)], low(x))
```

### Helpers

```[latex]
\begin{align*}
&\text{ }\: 
\text{high}(x) = \lfloor x \: / \enspace \mathclap{^\downarrow}\sqrt{u} \rfloor
\\
&\text{ }\: 
\text{low}(x) = x \enspace \text{mod} \enspace \mathclap{^\downarrow}\sqrt{u}
\\
&\text{ }\: 
\text{index}(x,y) = x \enspace \mathclap{^\downarrow}\sqrt{u} + y
\quad \text{where}\: 2^{\lceil ( \text{lg}\:u /2) \rceil} \:\text{is denoted by}\enspace \mathclap{^\downarrow}\sqrt{u}
\end{align*}
```

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.