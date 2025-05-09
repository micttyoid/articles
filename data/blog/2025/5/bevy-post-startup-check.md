---
title: 'Plugin-side checkup by PostStartup'
date-published: 2025-05-09
date-drafted: null
date-modified: 2025-05-09
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Bevy'
  - 'Optimization'
  - 'Optimisation'
---

# Plugin-side checkup by PostStartup

Designing a plugin, the `Poststartup` stage in Bevy's schedule is an excellent timeline to check on intial game condition with less overhead.

## Simplified main schedule in Bevy upto "First"

```[mermaid]
flowchart LR
    %% Conditional starting point
    bevy_state{bevy_state?} -->|enabled| StateTransition
    bevy_state -->|disabled| PreStartup

    %% Main flow
    StateTransition --> PreStartup
    PreStartup --> Startup --> PostStartup
    PostStartup --> A@{ shape: circle, label: "First" }
```

Following examples validate some intial conditions of entity instance(s).

## Example: at least one
```rust
fn at_least_one(query: Query<Entity, With<DoYouEvenExist>>) {
    if query.is_empty() {
        panic!(
            "Do you have at least one entity with `DoYouEvenExist`?"
        )
    }
}
```

## Example: exactly one
```rust
fn the_one_and_only(query: Query<Entity, With<TheOneAndOnly>>) {
    match query.single() {
        Ok(entity) => println!("Found entity: {:?}", entity),

        Err(_) => panic!(
            "Do you have at least one entity with `TheOneAndOnly`?"
        ),
    }
}
```

## Adding in PostStartup

```rust
impl Plugin for FooPlugin {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, my_setup)
           .add_systems(PostStartup, (at_least_one, the_one_and_only))
            // Chain them if one is the prerequisite of another
            /* ... */
    }
}
```

## Note

They are guaranteed **at the beginning only**. For example, an **initial** 
adjustment on camera, targetting on entity can be guaranteed by such 
validation. It does not guaratee any condition further from the timeline.

## See also

[Struct Main](https://docs.rs/bevy/latest/bevy/app/struct.Main.html)