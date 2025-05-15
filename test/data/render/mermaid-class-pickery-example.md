---
title: "Design of Pickery"
date-published: 2025-05-15
date-drafted: null
date-modified: null
author:
  - name: 'Luke Yoo'
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Pickery"
  - "Bevy"
  - "Rust"
---

# Design of Pickery

## Objective
- Minimize the number of plugin-side state
- Minimize the number of plugin-side component
- Minimize contraints on user-side component
- Minimize the sequence requirement in the plugin-side startup
- Minimize the interaction with selected physics engine

## Composition

```[mermaid]
---
title: Composition of Pickery
config:
  class:
    hideEmptyMembersBox: true
---
classDiagram
    class Component
    Component <|-- Pickee
    Component <|-- Picker
    Component <|-- Unpickable
    %%===----------------------------------------------------------------===%%
    class UserComponent
    UserComponent <|-- UserCamera
    UserComponent <|-- UserGround
    %%===----------------------------------------------------------------===%%
    class Resource
    Resource <|-- HoverState

    class HoverState  {
        current: Entity
        previous: Entity
    }

    %%===----------------------------------------------------------------===%%
    class Asset
    Asset <|-- PickeryLineMaterial

    class PickeryLineMaterial {
        color: LinearRgba
    }    
    %%===----------------------------------------------------------------===%%
    class Component:::_component
    class Pickee:::_component
    class Picker:::_component
    class Unpickable:::_component
    %%===----------------------------------------------------------------===%%
    class UserComponent:::_user_component
    class UserCamera:::_user_component
    class UserGround:::_user_component
    %%===----------------------------------------------------------------===%%
    class Resource:::_resource
    class HoverState:::_resource
    %%===----------------------------------------------------------------===%%
    class Asset:::_asset
    class PickeryLineMaterial:::_asset
    %%===----------------------------------------------------------------===%%
    classDef _component fill: #FFDAB9
    classDef _user_component fill: #F0F1C5
    classDef _resource fill: #BBD8A3
    classDef _asset fill: #9EC6F3
    classDef default stroke:none
```
