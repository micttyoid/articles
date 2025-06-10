---
title: "Registry system for packages"
date-published: 2025-06-09
date-drafted: null
date-modified: null
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Module"
  - "Package management"
  - "Package registry"  
  - "Package"
---

# Registry system for packages

## Overview

```[dot]
graph RegistrySystem {
    layout=neato;
    node [shape=circle style=filled width=0.85 fixedsize=true fontsize=12.0];
    edge [len=3.0];
    
    Index [pos="0,0" label="Index"];
    Storage [pos="1,0" label="Storage"];
    Manager [pos="1,1" label="Manager"];
    Cache [pos="1,1" label="Cache\n(local)" width=0.5 fontsize=8.0];
    
    Index -- Storage;
    Index  -- Manager;
    Storage -- Manager;
    Manager -- Cache [len=1.0];
}
```

## Publish

```[dot]
digraph RegistrySystem {
    layout="neato";
    
    node [shape=circle style=filled width=0.85 fixedsize=true fontsize=12.0];
    edge [len=3.0 fontsize=7.5];
    
    Index [pos="0,0" label="Index"];
    Storage [pos="1,0" label="Storage"];
    Manager [pos="1,1" label="Manager"];
    Cache [pos="1,1" label="Cache\n(local)" width=0.5 fontsize=8.0];
    
    Manager -> Manager [label="1. Build Foo in\nrespective format."];
    Manager -> Cache [len=1.0 arrowhead=none];
    Manager -> Index [dir=both label="2. After validation,\nwrite/update its metadata.\n(register)"];
    Manager -> Storage [dir=both label="3. Upload  \npackage Foo  "];
    Index -> Storage [style=invis];    
}
```

## Installation or Resolution

```[dot]
digraph RegistrySystem {
    layout="neato";
    
    node [shape=circle style=filled width=0.85 fixedsize=true fontsize=12.0];
    edge [len=3.0 fontsize=7.5];
    
    Index [pos="0,0" label="Index"];
    Storage [pos="1,0" label="Storage"];
    Manager [pos="1,1" label="Manager"];
    Cache [pos="1,1" label="Cache\n(local)" width=0.5 fontsize=8.0];
    
    Manager -> Cache [len=1.0 arrowhead=none];
    Manager -> Index [dir=both label="1. If nothing found at the cache,\nfetch the medata of package Foo"];
    Manager -> Storage [dir=both label="2. If nothing found at the cache,\ndownload package Foo"];
    Manager -> Manager[label="3. Install / Resolve\n\n  4. Repeat if another dependency is\nremained unstalled / unresolved"]
    Index -> Storage [style=invis];
}
```

## Validation of dependency

```[dot]
digraph RegistrySystem {
    layout="neato";
    
    node [shape=circle style=filled width=0.85 fixedsize=true fontsize=12.0];
    edge [len=3.0 fontsize=7.5];
    
    Index [pos="0,0" label="Index"];
    Storage [pos="1,0" label="Storage"];
    Manager [pos="1,1" label="Manager"];
    Cache [pos="1,1" label="Cache\n(local)" width=0.5 fontsize=8.0];
    
    Manager -> Manager [label="1. Build Foo in\ncompliant format.\n(Foo has dependency A.)"]
    Manager -> Cache [dir=both len=1.0 label="2. Check if\ndep A exists"];
    Manager -> Index [dir=both label="3. If nothing found at the cache,\ngo check if dep A exists"];
    Manager -> Storage [style=invis];    
    Index -> Storage [style=invis];
}
```
