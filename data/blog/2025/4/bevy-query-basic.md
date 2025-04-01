---
title: 'Query basic in Bevy'
date-published: 2025-04-01
date-drafted: 2025-03-31
date-modified: 2025-04-01
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

## Dealing with the set-based nature

### From singular to plural

When a single entity is certainly and only used, `get_single_mut()` can be
used in the scope.

```rust
fn foo (mut query: Query<&mut Transform, With<Camera>>) {
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
    for transform in &mut query.iter_mut() {
        // ... something about "transform"s ...
    }
```

**Note**: the suffix `_mut` is optional

### From plural to singular beside `get_single`

#### By the system parameter, `Single`

```rust
fn bar (innerable: Single<(&mut baz), With<AlgoEspecifico>>) {
    let mut baz = innerable.into_inner();
    // Do something on "baz"
}
```

#### By giving a component

```rust
#[derive(Component)]
pub struct MainCamera; // To ditinguish

// Part of a startup code
fn setup_cameras(mut commands: Commands) {
    commands.spawn((
        Camera3d::default(),
        MainCamera,  // Differs from the secondary
    ));
    commands.spawn(Camera3d::default()); // Secondary camera
}
```

Given this, the following query certainly carries the main camera

```rust
fn qux(mut query: Query<&mut Camera, With<MainCamera>>) {
    let Ok(mut camera) = query.get_single_mut() else {
        return;
    };
    // Do something with "camera"
}
```

#### By name

```rust

// Part of a startup code
fn setup_cameras(mut commands: Commands) {
    commands.spawn((
        Camera3d::default(),
        Name::new("Primary Camera"), // Differs from the secondary
    ));
    commands.spawn((
        Camera3d::default(),
        Name::new("Secondary Camera"),
    ));
}

```

After the setup, the name can be used to find the entity.

```rust
fn corge(mut query: Query<(&mut Camera, &mut Name)>) {

    for camera_name in query.iter_mut() {
        if camera_name.1.as_str() == "Secondary Camera" {
            // Do something with "camera_name" of "Secondary Camera"
        };
    };
}
```

## See also

TODO
