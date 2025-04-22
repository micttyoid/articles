---
title: Inline Modules in Webpack
date-published: 2025-04-22
date-drafted: 2025-04-22
date-modified: null
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - Inline
  - Module
  - Webpack
  - Optimization
  - Optimisation
---

## Inline Modules in Webpack

Assuming dynamic import of the following:

```js
try {
    await import(`foo/${bar}.js`)
} catch (e) {
    console.warn(`Module '${bar}' not found: ${e}`)
}
```

The easiest way would be:

```js
try {
    await import(/* webpackMode: "eager" */ `foo/${bar}.js`)
} catch (e) {
    console.warn(`Module '${bar}' not found: ${e}`)
}
```