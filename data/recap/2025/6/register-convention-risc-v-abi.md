---
title: "Register convention in RISC-V ABIs"
date-published: 2025-06-02
date-drafted: null
date-modified: null
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "RISC-V"
  - "Call convention"
  - "Processor-level"
---

# Register convention in RISC-V ABIs

## Integer register convention

| Name | ABI Mnemonic | Meaning               | Preserved |
| ---- | ------------ | --------------------- | --------- |
| x0   | zero         | Zero                  |           |
| x1   | ra           | Return address        | No        |
| x2   | sp           | Stack pointer         | Yes       |
| x3   | gp           | Global pointer        |           |
| x4   | tp           | Thread pointer        |           |
| x5   | t0           | Temporary register    | No        |
| x6   | t1           | Temporary register    | No        |
| x7   | t2           | Temporary register    | No        |
| x8   | s0/fp        | Callee-saved register | Yes       |
| x9   | s1           | Callee-saved register | Yes       |
| x10  | a0           | Argument register     | No        |
| x11  | a1           | Argument register     | No        |
| x12  | a2           | Argument register     | No        |
| x13  | a3           | Argument register     | No        |
| x14  | a4           | Argument register     | No        |
| x15  | a5           | Argument register     | No        |
| x16  | a6           | Argument register     | No        |
| x17  | a7           | Argument register     | No        |
| x18  | s2           | Callee-saved register | Yes       |
| x19  | s3           | Callee-saved register | Yes       |
| x20  | s4           | Callee-saved register | Yes       |
| x21  | s5           | Callee-saved register | Yes       |
| x22  | s6           | Callee-saved register | Yes       |
| x23  | s7           | Callee-saved register | Yes       |
| x24  | s8           | Callee-saved register | Yes       |
| x25  | s9           | Callee-saved register | Yes       |
| x26  | s10          | Callee-saved register | Yes       |
| x27  | s11          | Callee-saved register | Yes       |
| x28  | t3           | Temporary register    | No        |
| x29  | t4           | Temporary register    | No        |
| x30  | t5           | Temporary register    | No        |
| x31  | t6           | Temporary register    | No        |

## Floating-point register convention

| Name | ABI Mnemonic | Meaning               | Preserved |
| ---- | ------------ | --------------------- | --------- |
| f0   | ft0          | Temporary register    | No        |
| f1   | ft1          | Temporary register    | No        |
| f2   | ft2          | Temporary register    | No        |
| f3   | ft3          | Temporary register    | No        |
| f4   | ft4          | Temporary register    | No        |
| f5   | ft5          | Temporary register    | No        |
| f6   | ft6          | Temporary register    | No        |
| f7   | ft7          | Temporary register    | No        |
| f8   | fs0          | Callee-saved register | Yes       |
| f9   | fs1          | Callee-saved register | Yes       |
| f10  | fa0          | Argument register     | No        |
| f11  | fa1          | Argument register     | No        |
| f12  | fa2          | Argument register     | No        |
| f13  | fa3          | Argument register     | No        |
| f14  | fa4          | Argument register     | No        |
| f15  | fa5          | Argument register     | No        |
| f16  | fa6          | Argument register     | No        |
| f17  | fa7          | Argument register     | No        |
| f18  | fs2          | Callee-saved register | Yes       |
| f19  | fs3          | Callee-saved register | Yes       |
| f20  | fs4          | Callee-saved register | Yes       |
| f21  | fs5          | Callee-saved register | Yes       |
| f22  | fs6          | Callee-saved register | Yes       |
| f23  | fs7          | Callee-saved register | Yes       |
| f24  | fs8          | Callee-saved register | Yes       |
| f25  | fs9          | Callee-saved register | Yes       |
| f26  | fs10         | Callee-saved register | Yes       |
| f27  | fs11         | Callee-saved register | Yes       |
| f28  | ft8          | Temporary register    | No        |
| f29  | ft9          | Temporary register    | No        |
| f30  | ft10         | Temporary register    | No        |
| f31  | ft11         | Temporary register    | No        |

## Vector register convention

| Name   | ABI Mnemonic | Meaning                                     | Saver |
| ------ | ------------ | ------------------------------------------- | ----- |
| v0     | -            | Temporary register                          | No    |
| v1     | -            | Temporary register                          | No    |
| v2     | -            | Temporary register                          | No    |
| v3     | -            | Temporary register                          | No    |
| v4     | -            | Temporary register                          | No    |
| v5     | -            | Temporary register                          | No    |
| v6     | -            | Temporary register                          | No    |
| v7     | -            | Temporary register                          | No    |
| v8     | -            | Temporary register                          | No    |
| v9     | -            | Temporary register                          | No    |
| v10    | -            | Temporary register                          | No    |
| v11    | -            | Temporary register                          | No    |
| v12    | -            | Temporary register                          | No    |
| v13    | -            | Temporary register                          | No    |
| v14    | -            | Temporary register                          | No    |
| v15    | -            | Temporary register                          | No    |
| v16    | -            | Temporary register                          | No    |
| v17    | -            | Temporary register                          | No    |
| v18    | -            | Temporary register                          | No    |
| v19    | -            | Temporary register                          | No    |
| v20    | -            | Temporary register                          | No    |
| v21    | -            | Temporary register                          | No    |
| v22    | -            | Temporary register                          | No    |
| v23    | -            | Temporary register                          | No    |
| v24    | -            | Temporary register                          | No    |
| v25    | -            | Temporary register                          | No    |
| v26    | -            | Temporary register                          | No    |
| v27    | -            | Temporary register                          | No    |
| v28    | -            | Temporary register                          | No    |
| v29    | -            | Temporary register                          | No    |
| v30    | -            | Temporary register                          | No    |
| v31    | -            | Temporary register                          | No    |
| vl     | -            | Vector length                               | No    |
| v3type | -            | Vector data type register                   | No    |
| vxrm   | -            | Vector fixed-point rounding mode register   | No    |
| vxsat  | -            | Vector fixed-point saturation flag register | No    |

## Reference(s)

- K. Cheng and J. Clarke, Eds., _RISC-V ABIs Specification_, 
Document Version 1.0. RISC-V International, Nov. 2022.