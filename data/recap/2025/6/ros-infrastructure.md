---
title: "Instrastructure of ROS"
date-published: 2025-06-16
date-drafted: null
date-modified: null
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Open Robotics"
  - "ROS"
---

# Instrastructure of ROS

```sh
sudo apt install ros-kilted-desktop
```

## The Ecosystem

```[mermaid]
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#BB2528',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#7C0000',
      'lineColor': '#F8B229',
      'secondaryColor': '#006100',
      'tertiaryColor': '#fff'
    }
  }
}%%
flowchart LR

A("**Plumbing**
middleware,
messaging system
")

C("**Tooling**
debugging,
visualization
logging
")

D("**Capabilities**
referring to application/product
")

A <--> C
C <--> D
```

**Plumbing**

ROS internal, the network of nodes, or the facility

**Tooling**

Typically delivered in form of linux(or tiered) package. For example:

```sh
sudo apt install ros-dev-tools
```

**Capabilities**

TODO: maybe real examples


## Common development workflow

**No bare-metal installation needed**

On tiered operating system such as Ubuntu:
1. Download ROS image(binary, Docker, ...) and tooling
2. Use them (duh!)

## OS Image and distribution

**Linux-like distribution system**

releases in regular basis, with distro name + EOL

**Ubuntu based**

For example
- ROS 2 Kilted Kaiju (Noble Numbat)
- ROS 2 Iron (Jammy)


**Release schedule and dependency on Ubuntu**

> Every ROS release will be supported on exactly one Ubuntu LTS. 

> ROS releases will drop support for EOL Ubuntu distributions, even if the ROS release is still supported. 

**See also**

[rep-0003](https://www.ros.org/reps/rep-0003.html)

## Event-driven: promoted design pattern

Subscriber and service abstraction over network of nodes

Treatment to the arbitrary set of sensor, actuator, and controller

## Glossary

[**Basic concepts**](https://docs.ros.org/en/rolling/Concepts/Basic.html) about _tooling_ for user/developer, pretty much about Node, communication, and API

**Data Distribution Service (DDS)** An underlying design / specification for ROS

[**Meta operating system**](https://github.com/ros2/ros2) ci to cook up images;
contains list of repositories.

**Object Management Group (OMG)** Organization who publishes relavant specifications.

**ROS** one of the followings:
- The ROS meta operating system
- The framework

[**ROS Enhancement Proposals(Rep)**](https://ros.org/reps/rep-0000.html)
similar to RFC

[**Tier 1 operating systems**](https://www.ros.org/reps/rep-2000.html#id39)
Combination of architecture and os of certain version. It means the targets get full range of supports for development, such as package.

## See also

[Publications](https://wiki.ros.org/Papers)

## Reference(s)

- S. Macenski et al. Robot Operating System 2: Design, Architecture, and Uses In The Wild. _arXiv preprint [arXiv:2211.07752](https://doi.org/10.48550/arXiv.2211.07752)_, 2022.

- Data Distribution Service (DDS), [v1.4](https://www.omg.org/spec/DDS/1.4/PDF). Object Management Group. 2004.
