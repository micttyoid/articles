---
title: 'SystemParam in Bevy'
date-published: 2025-04-22
date-drafted: 2025-04-22
date-modified: 2025-04-27
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - Bevy
  - Rust
  - SystemParam
---

# SystemParam in Bevy

Using macro `SystemParam` is a designated way to group parameters.

## Three sections of the code

1. [Group by SystemParam](#1-group-by-systemparam)
2. [Closure above](#2-closure-above)
3. [Small functions](#3-small-functions)

The reading order is however from Section 2(Closure Above)

## 2. Closure above

Imagine something like this:

```rust
// ... Just a thought ...
fn setup(bunch: Bunch) {
    setup_plane(commands, meshes, materials);
    setup_walls(commands, meshes);
    // More stuffs...
}
```

This keeps the small functions being explicit. Importing this gets handy when
you organize multiple plugins separately from the collection of functions.

Suppose that the setup function is mostly designated to use 
three parameters: `commands`, `meshes`, and `materials`.

Then the function looks like this:

```rust
// The only pub in this file

pub fn setup(with_cmm: WithCmm) {
    with_cmm.run(|commands, meshes, materials| {
        setup_ground(commands, meshes, materials);
        setup_walls(commands, meshes);

        // More stuff...

    });

    // or maybe more as you extend
}
```

## 1. Group by SystemParam

Pretty straightforward. Use `SystemParam` for what are to be injected.

```rust
#[derive(SystemParam)]
pub struct WithCmm<'w, 's> {
    commands: Commands<'w, 's>,
    meshes: ResMut<'w, Assets<Mesh>>,
    materials: ResMut<'w, Assets<StandardMaterial>>,
}

// Closure interaction by FnOnce

impl<'w, 's> WithCmm<'w, 's> {
    pub fn run<F>(self, func: F)
    where
        F: FnOnce(
            &mut Commands<'w, 's>,
            &mut ResMut<'w, Assets<Mesh>>,
            &mut ResMut<'w, Assets<StandardMaterial>>,
        ),
    {
        let WithCmm {
            mut commands,
            mut meshes,
            mut materials,
        } = self;

        func(&mut commands, &mut meshes, &mut materials);
    }
}
```

## 3. Small functions

```rust
// ... Mesh & Material combo functions ...

fn setup_plane(
    commands: &mut Commands,
    meshes: &mut ResMut<Assets<Mesh>>,
    materials: &mut ResMut<Assets<StandardMaterial>>,
) {
    // ... //
}

fn setup_walls(
    commands: &mut Commands,
    meshes: &mut ResMut<Assets<Mesh>>,
) {
    // ... //
}

// More as you extend ... setup_foo, setup_bar, ...
```

## Complete example

```rust
use bevy::{
    ecs::system::SystemParam,
    prelude::*,
};

// 1. To-be-injected, To-be-scheduled SystemParam

#[derive(SystemParam)]
pub struct WithCmm<'w, 's> {
    commands: Commands<'w, 's>,
    meshes: ResMut<'w, Assets<Mesh>>,
    materials: ResMut<'w, Assets<StandardMaterial>>,
}

impl<'w, 's> WithCmm<'w, 's> {
    pub fn run<F>(self, func: F)
    where
        F: FnOnce(
            &mut Commands<'w, 's>,
            &mut ResMut<'w, Assets<Mesh>>,
            &mut ResMut<'w, Assets<StandardMaterial>>,
        ),
    {
        let WithCmm {
            mut commands,
            mut meshes,
            mut materials,
        } = self;

        func(&mut commands, &mut meshes, &mut materials);
    }
}

// 2. Closure to be given to plugin

pub fn setup(with_cmm: WithCmm) {
    with_cmm.run(|commands, meshes, materials| {
        setup_ground(commands, meshes, materials);
        setup_walls(commands, meshes, materials);
    });
}

// 3. Small functions

fn setup_ground(
    commands: &mut Commands,
    meshes: &mut ResMut<Assets<Mesh>>,
    materials: &mut ResMut<Assets<StandardMaterial>>,
) {
    // ...
}

fn setup_walls(
    commands: &mut Commands,
    meshes: &mut ResMut<Assets<Mesh>>,
) {
    // ...
}
```

## See also

[SystemParam](https://docs.rs/bevy/latest/bevy/ecs/system/trait.SystemParam.html)

[FnOnce](https://doc.rust-lang.org/std/ops/trait.FnOnce.html)