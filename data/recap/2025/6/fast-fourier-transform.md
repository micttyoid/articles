---
title: "Fast Fourier Transform"
date-published: 2025-06-05
date-drafted: null
date-modified: null
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Digital signal processing"
  - "Fast Fourier Transform"
  - "FFT"
---

# Fast Fourier Transform

## Butterfly flow representation

Which is a radix-2 case of Danielson–Lanczos lemma

```[dot]
digraph Butterfly {
    rankdir="LR"
    node [shape=none fixedsize=true width=0.5 height=0.8 fontsize=9.0 margin=0.0];
    edge [penwidth=0.7 arrowsize=0.5]
    
    C [label="⊕" fontsize=10.0 width=0.15];
    
    L1 [label="DTFe"];
    L2 [label="DTFo"];

    R1 [label="DFT n"];
    R2 [label="DFT n+N/2"];
    
    L1 -> C [arrowhead="none" fontsize=8.0 label="nada!"];
    C -> R2 [arrowhead=""];
    
    L2 -> C [arrowhead="none" fontsize=8.0 label="±W"];
    C -> R1 [arrowhead=""];
    
    {rank=same; L1; L2;}
    {rank=same; R1; R2;}
}
```

Or by dragging adders to the nodes, for example, in DIT

```[dot]
digraph Butterfly {
    rankdir="LR"
    node [shape="plaintext" fixedsize=true width=0.35 height=0.55 fontsize=10.0 margin=0];
    edge [penwidth=0.5 arrowsize=0.25 fontsize=6.0]
    
    L1 [label="Ⓔ"];
    L2 [label="Ⓞ"];

    R1 [label="⊕"];
    R2 [label="⊕"];
    
    L1 -> R2 [arrowhead="" label=""];
    L2 -> R1 [arrowhead="" label="" headlabel = "+W"];
    
    L1 -> R1 [arrowhead="" label=" " ];
    L2 -> R2[headlabel = "-W"];
     
    {rank=same; L1; L2;}
    {rank=same; R1; R2;}
}
```

## Recursive procedure

```pseudo
FFT(N,f)
    if N == 2                               // Stage 1: W[n] = 1
        f[0] = f[0] + f[1]
        f[1] = f[0] - f[1]
    else
        g = f[even ∈ N]
        h = f[odd  ∈ N]
        FFT(N/2, g)
        FFT(N/2, h)
        for n = 0 to N-1                    // Stage lg(N)
            f[n] = g[n] + W[n]h[n]
```