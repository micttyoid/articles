---
title: "Discrete convolutions"
date-published: 2025-06-02
date-drafted: null
date-modified: null
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Convolution"
  - "CNN"
  - "Digital signal processing"
  - "NN"
  - "Neural network"
---

# Discrete convolutions

## CNN-style convolution

### Example: 2D single-layer

**Definition**

```[latex]
\begin{align*}
\\&
\mathbf{Y} = \lparen y_{ij}\rparen + \mathbf{B} \qquad
\\&
\enspace\:\,= \mathbf{X} \ast \mathbf{K} + \mathbf{B}
\\&
\qquad \text{where} \enspace y_{ij} = \sum_{l,k \in \Delta}\Delta_{i,j}\mathbb{X} \odot \mathbf{K}
\end{align*}
```

**Procedure**

```pseudo
CONV(x, k, stride=1, padding=0)
    y_h = ⌊(x.height + 2*padding - k.height) / stride⌋ + 1
    y_w = ⌊(x.width + 2*padding - k.width) / stride⌋ + 1
    y = INIT-WITH-ZEROS(y_h, y_w) // Comes with y.width, y.height
    
    x_pad = PAD(x, padding)       // Returns x for zero padding
    
    for i = 0 to y.height - 1
        for j = 0 to y.width - 1
            xx = WINDOW(x_pad, k, i, j, stride)
            y[i][j] = GRAND-SUM(HADAMARD-PRODUCT(xx, k))
    
    return y

WINDOW(x, k, i, j, stride=1)
    h_begin = i * stride
    h_end = h_begin + k.height

    w_begin = j * stride
    w_end = w_begin + k.width
    
    return x[h_begin..h_end][w_begin..w_end]
```
