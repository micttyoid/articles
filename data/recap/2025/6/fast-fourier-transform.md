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

## Butterfly flow representation of Danielson–Lanczos lemma

Which is a radix-2 case of Cooley–Tukey

```[dot]
digraph Butterfly {
    rankdir="LR"
    node [shape=none fixedsize=true width=0.5 height=0.8 fontsize=9.0 margin=0.0];
    edge [penwidth=0.7 arrowsize=0.5]
    
    C [label="⊕" fontsize=10.0];
    
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
