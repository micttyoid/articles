---
title: "Feedback control system"
date-published: 2025-06-18
date-drafted: null
date-modified: null
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "LTI system"
  - "Control system"
  - "Feedback system"
  - "Feedback control system"  
---

# Feedback control system

## Plant, Controller, and Sensor

**System function**

```[latex]
H(s) = \frac{C(s)P(s)}{1 + C(s)P(s)Q(s)}
```

**Block diagram**

```graphviz
digraph FeedbackControlSystem {
    rankdir=LR;
    
    Input [label="X" shape=plaintext width=0 height=0];
    Output [label="Y" shape=plaintext width=0 height=0];
    Adder [label="+" shape=circle fixedsize=true width=0.25];
    Controller [label="C" shape=box];
    
    InvisControllerPlant[style=invis fixedsize=true width=0 height=0];
    InvisSplitSensor[style=invis fixedsize=true width=0 height=0];
    InvisSensorAdder[style=invis fixedsize=true width=0 height=0];
    
    Sensor [label="Q" shape=box];
    Plant [label="P" shape=box];
    Split [shape=point];
    
    Input -> Adder [arrowhead=normal arrowsize=0.5];
    Adder -> Controller [arrowsize=0.5 label="R"];
    Controller -> InvisControllerPlant [arrowsize=0.5];
 
    Plant -> Split [arrowsize=0.5];
    Sensor -> InvisSensorAdder [arrowsize=0.5];    
    Split -> Output [arrowsize=0.5];
    Split -> InvisSplitSensor [arrowsize=0.5];
    
    InvisSplitSensor -> Sensor [arrowhead=none arrowsize=0.5];
    InvisControllerPlant -> Plant [arrowhead=none arrowsize=0.5];
    InvisSensorAdder -> Adder  [arrowhead=none headlabel="-" arrowsize=0.5 fontsize=16];

    { rank=min; Input; }
    { rank=same; InvisSensorAdder Controller; }
    { rank=same; InvisSplitSensor Plant; }
    { rank=same; InvisControllerPlant Sensor; }
    { rank=max; Output; }
}
```

## Stability test

TODO

## Applications

TODO: exclusive to feedback control. don't put something for LTI in general

## Common discrepancies

TODO

## Reference(s)

- M. D. Adams, _Signals and Systems_, 3rd ed. The University of Victoria, Victoria, British Columbia, Canada, 2020.