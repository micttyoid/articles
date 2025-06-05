# Test data: RISC-V example

Used extension: riscv

```riscv
#
# Risc-V Assembler program to convert an integer to a string
# and output the result to stdout.
#
# a0-a2 - parameters to linux function services
# a7 - linux function number
#

.data

stack:      .space 1024 # Allocate space for stack
newline:    .asciz "\n" # Newline character

.section .text 
.global _start      # Provide program starting address to linker

.align 2
_start:
   la sp, stack  # set stack pointer
   la a4, stack  # set address of stack to a4
   li a2, 10     # load constant for division
   li a0, 147856790    # load integer to print

convert_loop:
   rem a3, a0, a2     # get remainder
   addi a3, a3, 48    # convert to ascii
   sw a3, 0(sp)       # store in stack
   addi sp, sp, -4    # decrement stack pointer
   div a0, a0, a2     # divide by 10
   bnez a0, convert_loop # loop until a0 is zero

   addi  a0, x0, 1      # 1 = StdOut
   addi  sp, sp, 4      # increment stack pointer to point to the start of the string
   mv    a1, sp         # copy stack pointer to a1
   sub   a2, a4, sp     # calculate length of string
   slli  a2, a2, 2      # multiply length by 4
   addi  a7, x0, 64     # linux write system call
   ecall                # Call linux to output the string

   addi  a0, x0, 1      # 1 = StdOut
   la    a1, newline    # load address of helloworld
   addi  a2, x0, 1      # length of our string
   addi  a7, x0, 64     # linux write system call
   ecall                # Call linux to output the string
   
# Call linux to terminate the program

# Exit the program cleanly
   li a7, 93     # Exit system call for RISC-V
   li a0, 0      # Exit status code
   ecall
```

Used extension: s

```s
#
# Risc-V Assembler program to convert an integer to a string
# and output the result to stdout.
#
# a0-a2 - parameters to linux function services
# a7 - linux function number
#

.data

stack:      .space 1024 # Allocate space for stack
newline:    .asciz "\n" # Newline character

.section .text 
.global _start      # Provide program starting address to linker

.align 2
_start:
   la sp, stack  # set stack pointer
   la a4, stack  # set address of stack to a4
   li a2, 10     # load constant for division
   li a0, 147856790    # load integer to print

convert_loop:
   rem a3, a0, a2     # get remainder
   addi a3, a3, 48    # convert to ascii
   sw a3, 0(sp)       # store in stack
   addi sp, sp, -4    # decrement stack pointer
   div a0, a0, a2     # divide by 10
   bnez a0, convert_loop # loop until a0 is zero

   addi  a0, x0, 1      # 1 = StdOut
   addi  sp, sp, 4      # increment stack pointer to point to the start of the string
   mv    a1, sp         # copy stack pointer to a1
   sub   a2, a4, sp     # calculate length of string
   slli  a2, a2, 2      # multiply length by 4
   addi  a7, x0, 64     # linux write system call
   ecall                # Call linux to output the string

   addi  a0, x0, 1      # 1 = StdOut
   la    a1, newline    # load address of helloworld
   addi  a2, x0, 1      # length of our string
   addi  a7, x0, 64     # linux write system call
   ecall                # Call linux to output the string
   
# Call linux to terminate the program

# Exit the program cleanly
   li a7, 93     # Exit system call for RISC-V
   li a0, 0      # Exit status code
   ecall
```