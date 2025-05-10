---
title: 'Red-Black Trees'
date-published: 2025-05-10
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Data Structure'
  - 'Red-Black Tree'
  - 'Tree'
---

# Red-Black Trees

## Operations and routines in pseudocode

**Rotation**
```pseudo
LEFT-ROTATE(T,x)
    y = x.right
    x.right = y.left
    if y.left != T.nil
        y.left.p = x
    y.p = x.p
    if x.p == T.nil
        T.root = y
    elseif x == x.p.left
        x.p.left = y
    else x.p.right = y
    y.left = x
    x.p = y
```

**Insertion**

```pseudo
RB-INSERT(T,z)
    y = T.nil
    x = T.root
    while x != T.nil:
        y = x
        if z.key < x.key:
            x = x.left
        else:
            x = x.right
    z.p = y
    if y == T.nil:
        T.root = z
    elif z.key < y.key:
        y.left = z
    else:
        y.right = z
    z.left = T.nil
    z.right = T.nil
    z.color = RED
    RB-INSERT-FIXUP(T, z)

RB-INSERT-FIXUP(T, z)
    while z.p.color == RED:
        if z.p == z.p.p.left:
            y = z.p.p.right
            if y.color == RED:
                z.p.color = BLACK
                y.color = BLACK
                z.p.p.color = RED
                z = z.p.p
            else:
                if z == z.p.right:
                    z = z.p
                    LEFT-ROTATE(T, z)
                z.p.color = BLACK
                z.p.p.color = RED
                RIGHT-ROTATE(T, z.p.p)
        else:
            // Same as above with "right" and "left" exchanged
            y = z.p.p.left
            if y.color == RED:
                z.p.color = BLACK
                y.color = BLACK
                z.p.p.color = RED
                z = z.p.p
            else:
                if z == z.p.left:
                    z = z.p
                    RIGHT-ROTATE(T, z)
                z.p.color = BLACK
                z.p.p.color = RED
                LEFT-ROTATE(T, z.p.p)
    T.root.color = BLACK
```

**Deletion**

```pseudo
RB-TRANSPLANT(T,u,v)
    if u.p == T.nil:
        T.root = v
    elif u == u.p.left:
        u.p.left = v
    else:
        u.p.right = v
    v.p = u.p

RB-DELETE(T,z)
    y = z
    y-original-color = y.color
    if z.left == T.nil:
        x = z.right
        RB-TRANSPLANT(T, z, z.right)
    elif z.right == T.nil:
        x = z.left
        RB-TRANSPLANT(T, z, z.left)
    else:
        y = TREE-MINIMUM(z.right)
        y-original-color = y.color
        x = y.right
        if y.p == z:
            x.p = y
        else:
            RB-TRANSPLANT(T, y, y.right)
            y.right = z.right
            y.right.p = y
        RB-TRANSPLANT(T, z, y)
        y.left = z.left
        y.left.p = y
        y.color = z.color
    if y-original-color == BLACK:
        RB-DELETE-FIXUP(T, x)    

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

## References

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.