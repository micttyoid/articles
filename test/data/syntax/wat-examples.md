# Test data - Wat example

## Factorial

```wat
(module
  (func $factorial (param $n i32) (result i32)
    (if (result i32)
      (i32.le_u (local.get $n) (i32.const 1))
      (then (i32.const 1))
      (else
        (i32.mul
          (local.get $n)
          (call $factorial
            (i32.sub (local.get $n) (i32.const 1))))))
  
  (export "factorial" (func $factorial))
```

## Import a function from JavaScript

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```