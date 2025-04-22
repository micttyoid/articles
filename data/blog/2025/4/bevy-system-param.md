---
title: 'SystemParam in Bevy'
date-published: 2025-04-22
date-drafted: 2025-04-22
date-modified: null
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

## How does this simplify?

Suppose a function `setup`:

```rust
fn setup(
    mut commands: Commands,
    mut materials: ResMut<Assets<StandardMaterial>>,    
    mut meshes: ResMut<Assets<Mesh>>,
) {
    setup_plane(commands, meshes, materials);
    setup_walls(commands, meshes);

    // more stuffs...
}
```

Given `SetupParams`, defined by the macro:

```rust
fn setup(params: SetupParams) {
    setup_plane(params);
    setup_walls(params);
     // more stuffs...
}
```

## Example

Before:

```rust
use bevy::prelude::*;

pub fn setup(
    mut commands: Commands,
    mut materials: ResMut<Assets<StandardMaterial>>,    
    mut meshes: ResMut<Assets<Mesh>>,
) {
    setup_plane(commands, meshes, materials);
    setup_walls(commands, meshes);

    // More stuffs...
}

fn setup_plane(
    mut commands: Commands,
    mut materials: ResMut<Assets<StandardMaterial>>,    
    mut meshes: ResMut<Assets<Mesh>>,
) {
     // Mutably work on commands, materials, and meshes
}

fn setup_walls(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
) {
    // Mutably work on commands and meshes
}
```

With `SetupParams`:

```rust
use bevy::{
    ecs::system::SystemParam,    
    prelude::*,
}

#[derive(SystemParam)]
pub struct SetupParams<'w, 's> {
    pub commands: Commands<'w, 's>,
    pub materials: ResMut<'w, Assets<StandardMaterial>>,    
    pub meshes: ResMut<'w, Assets<Mesh>>,
}

pub fn setup(params: SetupParams) {
    setup_plane(params);
    setup_walls(params);

     // More stuffs...
}

fn setup_plane(
    SetupParams {
        mut commands,
        mut materials,        
        mut meshes,
    }: SetupParams,
) {
    // Mutably work on commands, materials, and meshes
}

fn setup_walls(params: SetupParams) {

    // Destructure 
    let SetupParams {
        mut commands, 
        mut meshes,
        ..
    } = params;

    // Use the mesh resource explicitly ...
}
```

## Note

**Why don't you use it in [Flappy](https://github.com/micttyoid/flappy)**?

[Flappy](https://github.com/micttyoid/flappy) is a beginner-friendly codebase. I don't want to overwhelm the readers.

## See also

[SystemParam](https://docs.rs/bevy/latest/bevy/ecs/system/trait.SystemParam.html)