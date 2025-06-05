---
title: "Discrete convolutions"
date-published: 2025-06-02
date-drafted: null
date-modified: 2025-06-05
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

## Table of Content

- [LTI context](#lti-context)
- [CNN context](#cnn-context)
- [FFT-based convolution](#fft-based-convolution)

## LTI context

**Definition**

```[latex]
f \ast g \lparen n\rparen = \sum_{k=-\infty}^{\infty}f\lparen k\rparen  g \lparen n-k\rparen
```

The function $g(n)$ is typically the impulse $h(n)$ in the application.

**Procedure**

```pseudo
LTI-CONVOLUTION(n, F, G)
    y = 0
    for k = -∞ to ∞
        y += F(k) * G(n - k) // MATLAB folks habitually vectorize them
    return y
```

## CNN context

### Example: 2D single-layer

**Definition**

```[latex]
\begin{align*}
\\&
\mathbf{Y} = \lparen y_{ij}\rparen + \mathbf{B} \qquad
\\&
\enspace\:\,= \mathbf{X} \ast \mathbf{K} + \mathbf{B}
\\&
\qquad \text{where} \enspace y_{ij} = \sum_{l,k \in \Delta}\Delta_{ij}\mathbb{X} \odot \mathbf{K}
\end{align*}
```

**Procedure**

```pseudo
CNN-CONVOLUTION(x, k, stride=1, padding=0)
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

## FFT-based convolution

Meaning it takes a **multiplication** in the second domain and inverse it

```[dot]
digraph G {
    rankdir=LR;  // Left-to-right layout
    node [fixedsize=true width=0.5 height=0.35]
    edge [penwidth=0.7 arrowsize=0.5]    
    
    // Cluster (group of boxes with a border)
    subgraph cluster_0 {
        label="FFT-based convolution";
        style=filled;
        
        input1 [shape=none label="X₂"];
        input2 [shape=none label="X₁"];
        
        box1 [shape=box label="FFT"];
        box2 [shape=box label="FFT"];
        
        join [shape=circle label="×" width=0.25 height=0.25];
        
        box3 [shape=box label="IFFT"];
        output [shape=none label="Y"];
        
        // Connections
        input1 -> box1;
        input2 -> box2;
        box1 -> join;
        box2 -> join;
        join -> box3;
        box3-> output;
    }
}
```