# Test data: OpenQASM 3 - the logical level example

## Concepts of the language: the logical level

### Continuous gates and hierarchical library: standard gate library

```qasm3
// OpenQASM 3 standard gate library

// phase gate
gate p(λ) a { ctrl @ gphase(λ) a; }

// Pauli gate: bit-flip or NOT gate
gate x a { U(π, 0, π) a; }
// Pauli gate: bit and phase flip
gate y a { U(π, π/2, π/2) a; }
// Pauli gate: phase flip
gate z a { p(π) a; }

// Clifford gate: Hadamard
gate h a { U(π/2, 0, π) a; }
// Clifford gate: sqrt(Z) or S gate
gate s a { pow(1/2) @ z a; }
// Clifford gate: inverse of sqrt(Z)
gate sdg a { inv @ pow(1/2) @ z a; }

// sqrt(S) or T gate
gate t a { pow(1/2) @ s a; }
// inverse of sqrt(S)
gate tdg a { inv @ pow(1/2) @ s a; }

// sqrt(NOT) gate
gate sx a { pow(1/2) @ x a; }

// Rotation around X-axis
gate rx(θ) a { U(θ, -π/2, π/2) a; }
// rotation around Y-axis
gate ry(θ) a { U(θ, 0, 0) a; }
// rotation around Z axis
gate rz(λ) a { gphase(-λ/2); U(0, 0, λ) a; }

// controlled-NOT
gate cx c, t { ctrl @ x c, t; }
// controlled-Y
gate cy a, b { ctrl @ y a, b; }
// controlled-Z
gate cz a, b { ctrl @ z a, b; }
// controlled-phase
gate cp(λ) a, b { ctrl @ p(λ) a, b; }
// controlled-rx
gate crx(θ) a, b { ctrl @ rx(θ) a, b; }
// controlled-ry
gate cry(θ) a, b { ctrl @ ry(θ) a, b; }
// controlled-rz
gate crz(θ) a, b { ctrl @ rz(θ) a, b; }
// controlled-H
gate ch a, b { ctrl @ h a, b; }

// swap
gate swap a, b { cx a, b; cx b, a; cx a, b; }

// Toffoli
gate ccx a, b, c { ctrl @ ctrl @ x a, b, c; }
// controlled-swap
gate cswap a, b, c { ctrl @ swap a, b, c; }

// four parameter controlled-U gate with relative phase γ
gate cu(θ, ϕ, λ, γ) c, t { p(γ) c; ctrl @ U(θ, ϕ, λ) c, t; }

// Gates for OpenQASM 2 backwards compatibility  
// CNOT  
gate CX c, t { ctrl @ U(π, 0, π) c, t; }  
// phase gate  
gate phase(λ) q { U(0, 0, λ) q; }  
// controlled-phase  
gate cphase(λ) a, b { ctrl @ phase(λ) a, b; }  
// identity or idle gate  
gate id a { U(0, 0, 0) a; }  
// IBM Quantum experience gates  
gate u1(λ) q { U(0, 0, λ) q; }  
gate u2(ϕ, λ) q { gphase(-(ϕ+λ)/2); U(π/2, ϕ, λ) q; }  
gate u3(θ, ϕ, λ) q { gphase(-(ϕ+λ)/2); U(θ, ϕ, λ) q; }  
```

### Gate Modifiers: the controller modifier

The Fredkin (controlled-swap) gate

```qasm3
// Some useful reversible gates  
gate x q { U(π, 0, π) q; }  
gate cx c, t { ctrl @ x c, t; }  
gate toffoli c0, c1, t { ctrl @ cx c0, c1, t; }  
gate swap a, b { cx a, b; cx b, a; cx a, b; }  

// Fredkin definition #1  
gate fredkin1 c, a, b {  
  cx b, a;  
  toffoli c, a, b;  
  cx b, a;  
}  

// Fredkin definition #2  
gate fredkin2 c, a, b { ctrl @ swap c, a, b; }  
```

`cfredkin2`

```qasm3
// Require: the scratch qubit is 'clean', i.e. initialized to zero
// Ensure: the scratch qubit is returned 'clean'
gate cfredkin2 c0, c1, a, b, scratch {
  cx b, a; // (from fredkin1)
  toffoli c0, c1, scratch; // implement ctrl @ toffoli c0, c1, a, b
  toffoli scratch, a, b; // by computing (and uncomputing) an AND of the two controls
  toffoli c0, c1, scratch; // in the scratch qubit
  cx b, a; // (from fredkin1)
}
```

Use `negctrl` for Reversible Boolean function

```qasm3
qubit a[5];
qubit f;
reset f;
negctrl(2) @ ctrl(3) @ x a, f[0];
negctrl(2) @ ctrl(2) @ x a[0], a[3], a[1], a[2], f[0];
negctrl @ ctrl(3) @ x a[0], a[1], a[3], a[4], f[0];
negctrl @ ctrl(3) @ x a[1], a[0], a[3], a[4], f[0];
ctrl(3) @ x a[0], a[1], a[2], f[0];
negctrl(3) @ ctrl @ x a[0], a[1], a[2], a[3], f[0];
```

### Gate Modifiers: the inversion modifier

```qasm3
gate rz(τ) q { gphase(-τ/2); U(0, 0, τ) q; }
inv @ rz(π/2) q[0];
```

### Gate Modifiers: the powering modifier

```qasm3
gate z q { U(0, 0, π) q; }
gate s q { pow(1/2) @ z q; }
```

### Non-unitary operations

```qasm3
qubit[10] qubits;
bit[10] bits;
reset qubits;
x qubits;
bits = measure qubits;
```

### Real-time classical computing

Classical control flow:

```qasm3
// Fourier sampling circuit, expressed with a for loop
qubit[4] q;
bit b;
angle[4] θ = 0; // an angular parameter, for classically controlled Z rotations

// An example preparation of register q, to be sampled:
reset q;
h q;
barrier q;

// Fourier sampling circuit:
for i in [0:3] {
    θ >>= 1; // Divide by 2, all the rotation angles controlled by past measurement outcomes
    p(-θ) q[i]; // Do the classically controlled Z rotations all at once
    h q[i];
    measure q[i] -> b;
    θ[3] = b; // Set new highest bit of θ to measurement outcome
}
```

Subroutine: `vote`

```qasm3
def vote(bit a, bit b, bit c) -> bit {
    int count = 0;
    if (a == 1) count++;
    if (b == 1) count++;
    if (c == 1) count++;

    if (count >= 2) {
        return 1;
    } else {
        return 0;
    }
}
```

Subroutine: `segment`

```qasm3
// Repeat-until-success circuit for rz(π + θ) where cos(θ)=3/5

// This subroutine applies the identity to psi if the output is 01, 10, or 11.
// If the output is 00, it applies a Z-rotation by the angle θ + π where cos(θ)=3/5.
def segment(qubit[2] anc, qubit psi) -> bit[2] {
    bit[2] b;
    reset anc;
    h anc;
    ccx anc[0], anc[1], psi;
    s psi;
    ccx anc[0], anc[1], psi;
    z psi;
    h anc;
    b = measure anc;
    return b;
}

// Main circuit for the repeat-until-success circuit
qubit in;
qubit[2] ancilla;
bit[2] flags = b"11";
bit out;

reset in;
h in;

// The segment subroutine returns the desired outcome 00 with probability 5/8
// so we iterate a non-deterministic number of times until that outcome is seen.
while (flags != b"00") { // braces are optional in this case
    flags = segment(ancilla, in);
}
rz(π - arccos(3 / 5)) in; // total rotation of 2*π
h in;
out = measure in; // output should equal zero
```

External functions:

```qasm3
extern vote(bit a, bit b, bit c) -> bit;
```

### Input and output Parameters


measure given input

```qasm3
input int basis; // 0 = X basis, 1 = Y basis, 2 = Z basis
output bit result;
qubit q;

// Some complicated circuit...

if (basis == 0) h q;
else if (basis == 1) rx(π/2) q;
result = measure q;
```

## Reference(s)

- A. W. Cross, A. Javadi-Abhari, T. Alexander, N. de Beaudrap, L. S. Bishop, S. Heidel, C. A. Ryan, P. Sivarajah, J. Smolin, J. M. Gambetta, B. R. Johnson. OpenQASM 3: A broader and deeper quantum assembly language. arXiv:2104.14722, 2021.