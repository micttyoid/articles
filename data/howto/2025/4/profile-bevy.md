---
title: Profile Bevy
date-published: 2025-04-21
date-drafted: 2025-04-21
date-modified: null
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - Bevy
  - Rust
  - Profile
---

# Profile Bevy

The example project is found [here](https://github.com/micttyoid/flappy).

**NOTE**: Varying by operating system, "dynamic_linking" may not work to run
the binary alone

## Runtime profile

### By Tracy

```sh
# ... tracy running on the back ...
cargo clean
cargo run --release --features bevy/trace_tracy
```

### By direct execution(ex. third party profiler)

```sh
cargo build --release

cp -r ./assets ./target/release/
./target/release/flappy
```

## Build-time profile

### By Timings

```sh
cargo clean
cargo build --release --timings
```

## See also

[Profiling in Bevy](https://github.com/bevyengine/bevy/blob/main/docs/profiling.md)

[Timings](https://doc.rust-lang.org/nightly/cargo/reference/timings.html)

[Tracy Web Viewer](https://ui.perfetto.dev/)
