---
title: 'Layout of selective debugging in Rust'
date-published: null
date-drafted: 2025-05-02
date-modified: 2025-05-04
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Rust'
  - 'Debugging'  
---

# Layout of selective debugging in Rust

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