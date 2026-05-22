/**
 * Adds two numbers together.
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param a - First number
 * @param b - Second number
 * @returns The difference of a and b
 */
export function sub(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param a - First number
 * @param b - Second number
 * @returns The product of a and b
 */
export function mul(a: number, b: number): number {
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param a - Dividend
 * @param b - Divisor
 * @returns The quotient of a and b
 * @throws Error if b is zero
 */
export function div(a: number, b: number): number {
  if (b === 0) {
    throw new Error("division by zero");
  }
  return a / b;
}

/**
 * Checks if a number is odd.
 * @param n - The number to check
 * @returns true if n is odd, false otherwise
 */
export function isOdd(n: number): boolean {
  if (!Number.isFinite(n)) {
    return false;
  }
  return n % 2 !== 0;
}

/**
 * Checks if a number is even.
 * @param n - The number to check
 * @returns true if n is even, false otherwise
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}
