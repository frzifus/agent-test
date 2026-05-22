# agent-test

A TypeScript library providing math operations. This package is also available as a Go library.

## Installation

```bash
npm install @frzifus/agent-test
```

## Usage

```typescript
import { add, sub, mul, div, isOdd, isEven } from '@frzifus/agent-test';

// Addition
console.log(add(2, 3)); // 5

// Subtraction
console.log(sub(5, 3)); // 2

// Multiplication
console.log(mul(2, 3)); // 6

// Division
console.log(div(6, 3)); // 2
// div(5, 0) throws Error: division by zero

// Check if odd
console.log(isOdd(3)); // true
console.log(isOdd(2)); // false

// Check if even
console.log(isEven(2)); // true
console.log(isEven(3)); // false
```

## API

### `add(a: number, b: number): number`

Adds two numbers together.

### `sub(a: number, b: number): number`

Subtracts the second number from the first.

### `mul(a: number, b: number): number`

Multiplies two numbers.

### `div(a: number, b: number): number`

Divides the first number by the second. Throws an error if the divisor is zero.

### `isOdd(n: number): boolean`

Returns `true` if the number is odd, `false` otherwise.

### `isEven(n: number): boolean`

Returns `true` if the number is even, `false` otherwise.

## Development

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Lint

```bash
npm run lint
```

## License

MIT
