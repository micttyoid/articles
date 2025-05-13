---
title: 'Huffman codes'
date-published: 2025-05-13
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Algorithm'
  - 'Prefix code'
  - 'Huffman'
---

# Huffman codes

## Algorithm to contruct a Huffman code

```pseudo
HUFFMAN(C)
    n = |C|
    Q = C
    for i = 1 to n - 1
        allocate a new node z
        z.left = x = EXTRACT-MIN(Q)
        z.right = y = EXTRACT-MIN(Q)
        z.freq = x.freq + y.freq
        INSERT(Q,z)
    return EXTRACT-MIN(Q)
```

## Common options of implementation

- [mean-heap](https://lukeyoo.fyi/recap/2025/5/mean-heap): `O(n log n)`
- van Emde Boas: `O(n log log n)`

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.