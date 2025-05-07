---
title: 'Layout of selective debugging in Rust'
date-published: null
date-drafted: 2025-05-02
date-modified: 2025-05-07
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Rust'
  - 'Debugging'  
---

# Layout of selective debugging in Rust

Debugging often comes with a performance cost, especially in graphics-heavy
applications or on low-profile development setups. However, in Rust, we can 
mitigate it by selectively enabling only the debugging features we need.

Narrowing down debugging to specific features, we reduce runtime overhead and
keep compile times lean. This not only improves debugging performance but also
helps maintain focus by isolating the relevant parts of the code. For
developers working with constrained hardware, this can make the difference
between a sluggish and a smooth debugging experience.

Here I share an example to have the selective debugging in Rust: keeping your
workflow efficient and your attention where it matters the most.

**Barplication** (dependee application)

```toml
# barplication/Cargo.toml
[dependencies]
bevy = { version = "0.1.0", features = [] }

[feature]
foobrary_debug_foo = ["foobrary/debug_foo"]
```

**Foobrary** (debuggable library)

```toml
# foobrary/Cargo.toml

[feature]
debug_foo = []
```

## Usage

```sh
# In Barplication
cargo run --features foobrary_debug_foo
```

## Foobrary

**Overview**

```txt
foobrary/
|-- lib.rs
|-- utils/
|   |-- mod.rs
|   '-- debug.rs
'-- foobar/
    '-- foobar.rs
```

```rust
// foobrary/src/utils/debug.rs
macro_rules! debug_foo {
    ($($arg:tt)*) => {
        #[cfg(feature = "debug_foo")]
        bevy::log::info!("[FOO] {}", format_args!($($arg)*));
        #[cfg(not(feature = "debug_foo"))]
        let _ = format_args!($($arg)*);
    };
}

#[cfg(feature = "debug_foo")]
pub(crate) use debug_foo;
```

```rust
// foobrary/src/utils/mod.rs
#[macro_use]
pub mod debug;
```


```rust
// foobrary/src/lib.rs
#[macro_use]
pub mod utils;
```

```rust
// src/foobar/foobar.rss

pub fn foobar () {
    debug_foo!("Hello");

    // ... other stuffs ...
}

pub fn foobarbaz () {
    /* ... */
    if not_very_good {
        quix = 42;
        debug_foo!("Hola!");
    }
    // ...
}
```