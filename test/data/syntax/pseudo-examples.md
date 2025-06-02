# Test data: Pseudo examples

## Loosen codepoint 1

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

## Loosen codepoint 2: Floors and ceilings

```pseudo
MAX-HEAPIFY(A, i)
    l = LEFT(i)
    r = RIGHT(i)
    if l <= A.heap-size and A[l] > A[i]
        largest = l 
    else 
        largest = i
    if r <= A.heap-size and A[r] > A[largest]
        largest = r
    if largest != i
        exchange A[i] with A[largest]
        MAX-HEAPIFY(A, largest)

BUILD-MAX-HEAP(A)
    A.heap-size = A.length
    for i = ⌊A.length / 2⌋ downto 1
        MAX-HEAPIFY(A, i)     
```

## TODO: modular

## TODO: greeks

## Comment

```pseudo
RB-DELETE-FIXUP(T, x)
    while x != T.root and x.color == BLACK:
        if x == x.p.left:
            w = x.p.right
            // case 1
            if w.color == RED:
                w.color = BLACK
                x.p.color = RED
                LEFT-ROTATE(T, x.p)
                w = x.p.right
            // case 2
            if w.left.color == BLACK and w.right.color == BLACK:
                w.color = RED
                x = x.p
            else:
                // case 3
                if w.right.color == BLACK:
                    w.left.color = BLACK
                    w.color = RED
                    RIGHT-ROTATE(T, w)
                    w = x.p.right
                // case 4
                w.color = x.p.color
                x.p.color = BLACK
                w.right.color = BLACK
                LEFT-ROTATE(T, x.p)
                x = T.root
        else:
            // Same as then clause with "right" and "left" exchanged
            w = x.p.left
            // case 1
            if w.color == RED:
                w.color = BLACK
                x.p.color = RED
                RIGHT-ROTATE(T, x.p)
                w = x.p.left
            // case 2
            if w.right.color == BLACK and w.left.color == BLACK:
                w.color = RED
                x = x.p
            else:
                // case 3
                if w.left.color == BLACK:
                    w.right.color = BLACK
                    w.color = RED
                    LEFT-ROTATE(T, w)
                    w = x.p.left
                // case 4
                w.color = x.p.color
                x.p.color = BLACK
                w.left.color = BLACK
                RIGHT-ROTATE(T, x.p)
                x = T.root
    x.color = BLACK
```
