
# Multithreaded Procedure to compute Fibonacci number

## Procedure in pseudocode

```pseudo
P-FIB(n)
    if n <= 1
        return n
    else 
        x = spawn P-FIB(n - 1)
        y = P-FIB(n - 2)
        sync
        return x + y
```

## Reference(s)

- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, _Introduction to Algorithms_, 3rd ed. Cambridge, MA: The MIT Press, 2009.