# Math Package

A simple math utility package providing basic arithmetic operations.

## Functions

### Add

```go
func Add(a, b int) int
```

Adds two integers together.

**Parameters:**
- `a` - First integer operand
- `b` - Second integer operand

**Returns:**
- `int` - The sum of `a` and `b`

---

### Sub

```go
func Sub(a, b int) int
```

Subtracts the second integer from the first.

**Parameters:**
- `a` - First integer operand (minuend)
- `b` - Second integer operand (subtrahend)

**Returns:**
- `int` - The difference of `a - b`

---

### Mul

```go
func Mul(a, b int) int
```

Multiplies two integers together.

**Parameters:**
- `a` - First integer operand
- `b` - Second integer operand

**Returns:**
- `int` - The product of `a` and `b`

---

### Div

```go
func Div(a, b int) (int, error)
```

Divides the first integer by the second.

**Parameters:**
- `a` - First integer operand (dividend)
- `b` - Second integer operand (divisor)

**Returns:**
- `int` - The quotient of `a / b`
- `error` - An error if the operation fails (e.g., division by zero)

**Example:**
```go
result, err := Div(10, 2)
if err != nil {
    // handle error
}
// result == 5
```
