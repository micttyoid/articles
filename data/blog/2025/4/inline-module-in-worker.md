---
title: 'Optimizing Cloudflare Workers: Inline Small Modules for Leaner Webpack Bundles'
date-published: null
date-drafted: 2025-04-10
date-modified: null
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - Cloudflare
  - Wrangler
  - Optimization
  - Optimisation
  - Javascript
---

# Optimizing Cloudflare Workers: Inline Small Modules for Leaner Webpack Bundles

**Results**:
| Metric                               | Before | After        |      |
|--------------------------------------|--------|--------------|------|
| Size<sup>1</sup> <sup>2</sup>| 1522.93 KiB | 1295.78 KiB  |   14.92% improvement   |
| Cold Start   | 32ms   | 24ms   | 25.0% improvement|

**Summary**:
inline modules with Webpack, when they are tiny and a lot even if
wrangler does by default.

<sup>1</sup> Although the application is SSR (no client-side bundle),
the metric demonstrates its build-time optimization efficiency.

<sup>2</sup> For the fairness, it was re-conducted with neither asset
nor the dummy file, found in the latter topic. With asset / dummy, the
profiles resulted in 2998.69 KiB to 1295.78 KiB (56.8%).
Startup 33ms to 24ms (27.3%)

## Table of Contents

1. [xxx](#xxx)
1. [yyy](#yyy)


It does inline but does it do well?

## Before: Wrangler, that inlines by default

### Import logic: Wrangler misunderstood a dummy file for Tailwind

```js
// Associate unrelated files for some reason
"./8624._ignore.txt": () => Promise.resolve().then(() => __toESM(require_ignore253())),

"./8624.js": () => Promise.resolve().then(() => (init__253(), __exports253)),

var require_ignore299 = __commonJS({
  "../dist/_ignore.txt"(exports, module) {
    module.exports = `/******/ var __webpack_modules__ = ({
    ...
  "./prism-rust.min.js": [
		8624,
		8624
	],
    ...
  `
```

[TODO explain about the dummy file]

### Polyfill: Bulky
```js filename="worker.js"
// ../dist/8624.js
var __exports253 = {};
__export(__exports253, {
  __webpack_id__: () => __webpack_id__253,
  __webpack_ids__: () => __webpack_ids__253,
  __webpack_modules__: () => __webpack_modules__253
});
var __webpack_id__253, __webpack_ids__253, __webpack_modules__253;
var init__253 = __esm({
  "../dist/8624.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __webpack_id__253 = 8624;
    __webpack_ids__253 = [8624];
    __webpack_modules__253 = { 8624: () => {
      !function(e2) {
        for (var a2 = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/",
        t3 = 0; t3 < 2; t3++) a2 = a2.replace(/<self>/g,
        function() {
          return a2;
        });
        a2 = a2.replace(/<self>/g, function() {
          return "[^\\s\\S]";
        }), e2.languages.rust = { 
          /* .. rust syntax data ... */
      }(Prism);
    } };
  }
});
```


It
for Webpack on default build of wrangler


## After: Inline explictly at the initial bundle

### Import logic:
```js
var r2 = {
    "./prism-abap.min.js": 720, 
    /* ... */
    "./prism-rust.min.js": 8624,
    /* ... */
  };
  function a2(e4) {
    return i2(e4).then((e5) => n2.t(e5, 23));
  }
  __name(a2, "a");
  function i2(e4) {
    return Promise.resolve().then(() => {
      if (!n2.o(r2, e4)) {
        var t3 = new Error("Cannot find module '" + e4 + "'");
        throw t3.code = "MODULE_NOT_FOUND", t3;
      }
      return r2[e4];
    });
  }
```

### Polyfill
```js
 /* ... */ {{
}, 8606: () => {
    /* ... */
}, 8624: () => {
  !function(e3) {
    for (var t2 = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", n2 = 0; n2 < 2; n2++) t2 = t2.replace(/<self>/g, function() {
      return t2;
    });
    t2 = t2.replace(/<self>/g, function() {
      return "[^\\s\\S]";
    }), e3.languages.rust = { 
        /* .. same rust syntax data ... */
  }(Prism);
}, 8653: () => {
   /* ... */
}
```

## Applicable 

## Observation 1: many tiny modules

**Summary**: Modules of size under 5KB in bulk

**Examples**:

| sub module              | Size        | Note     |
|-------------------------|-------------|----------|
| prism-cpp.min.js        | 2.54KB      |          |
| prism-javascript.min.js | 4.5KB       |          |
| prism-regex.min.js      | 1.26KB      |          |
| prism-rust.min.js       | 2.41KB      |          |
 
Count: 298 sub modules

<sup>1</sup> Sub modules of 298 Entries, Mean 2.50 KB, Median 1.41KB, Range from 0.14KB to 32.72 KB, Total Size 744.44KB(1024 byte).

## Observation 2: default behavior of Wrangler


## Methodology / Environment

- **Wrangler**: v[TODO]
- **Webpack**: v[TODO]
- **Node.js**: v[TODO]
- **Dependencies**:  
  - [TODO]
- **Cloudflare Runtime**: [TODO]