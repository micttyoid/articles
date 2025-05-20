---
title: "Add Info.plist in Xcode"
date-published: 2025-05-20
date-drafted: null
date-modified: null
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Property List'
---

# Add Info.plist in Xcode

> is Info.plist deprecated? 

## Why does manually adding plist cause error?

Manually writing a plist to a project, created by XCode(in the environment)
may cause an error because of either redundancy or unrecognized plist(yours).

## How do i properly add plist?

Create a plist **but through Xcode**:

1. In project navigator, select the top level folder
2. Get to the tab(see General, Sign & Capability, ...) and select "Info"
3. Among dropdowns, expand "URL Types" and create a plist by "+" button
4. Now you see the plist, created in the navigator
5. Right click, "Open As" > "Source Code"
6. Delete the key-array pair of "CFBundleURLTypes" if you like to clean