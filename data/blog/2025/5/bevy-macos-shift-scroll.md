---
title: 'Handling macOS horizontal scroll in Bevy'
date-published: 2025-05-06
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Bevy'
  - 'Event Handling'
  - 'Horizontal Scroll'
  - 'macOS'
---

# Handling macOS horizontal scroll in Bevy

Working on input handling in my Bevy project, I noticed that, on macOS, 
scrolling with the shift key held down is treated as horizontal scroll
(vertical otherwise). This default behavior of macOS differs from
Windows/Linux, where shift combination typically does not modify scroll input.

To ensure consistent horizontal/vertical scroll handling across platforms,
here's an option for workaround:

```rust
#[cfg(target_os = "macos")]
pub fn handle_scroll(
    e_reader: EventReader<MouseWheel>,
    keyboard_input: Res<ButtonInput<KeyCode>>,
) {
    if keyboard_input.pressed(KeyCode::ShiftLeft)
        || keyboard_input.pressed(KeyCode::ShiftRight) {
            /* Using e.x of e_reader ... */
    } else {
            /* Using e.y of e_reader ... */
    }
}
```