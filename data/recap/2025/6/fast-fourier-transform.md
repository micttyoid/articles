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
    node [shape=none fixedsize=true width=0.2 height=0.45 fontsize=4.0];
    edge [penwidth=0.5 arrowsize=0.25]
    
    C [label="⊕" fontsize=6.0];
    
    L1 [label="DTFe"];
    L2 [label="DTFo"];

    R1 [label="DFT n"];
    R2 [label="DFT n+N/2"];
    
    L1 -> C [arrowhead="none" fontsize=5.0 label="nada!"];
    C -> R2 [arrowhead=""];
    
    L2 -> C [arrowhead="none" fontsize=5.0 label="±W"];
    C -> R1 [arrowhead=""];
    
    {rank=same; L1; L2;}
    {rank=same; R1; R2;}
}
```
