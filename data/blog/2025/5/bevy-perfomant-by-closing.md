---
title: 'Performant by closing entity inspection in Bevy'
date-published: 2025-05-04
date-drafted: null
date-modified: null
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Bevy'
  - 'Rust'
  - 'Optimization'
  - 'Optimisation'
  - 'Debugging'
---

# Performant by closing entity inspection in Bevy

Optimizing debug mode performance, I found that development plugins were causing significant frame rate drop. Surprisingly, collapsing the entity inspection dropdown alone restored ~30% of the original rate: an unexpectedly simple yet effective optimization.

[Supplementary](https://youtu.be/LecH1C8iVkI)