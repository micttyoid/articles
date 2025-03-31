---
title: Query basic in Bevy
is_draft: true
date_published: null
date_drafted: 2025-03-31
date_modified: null
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - Bevy
  - Bevy 0.15
  - Rust
---

# Query basic in Bevy

When single entity is certainly and only used, `get_single_mut()`

```rust
fn foo (
    /* ... params ... */
    mut query: Query<&mut Transform, With<Camera>>,
) {
    // Scope of the querying function ...

    let Ok(mut transform) = query.get_single_mut() else {
        return;
    };
    // ... Something about "transform" ...
}
```

Incrementally, it can be extended by `iter_mut()`

```rust
    // ...
    for (mut transform) in &mut query.iter_mut() {
        // ... something about "transform"s ...
    }
```
