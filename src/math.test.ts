import { add, sub, mul, div, isOdd, isEven } from './math.js';

describe('add', () => {
  test('positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('zero and positive', () => {
    expect(add(0, 5)).toBe(5);
  });

  test('positive and zero', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('zero and zero', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('negative and positive', () => {
    expect(add(-3, 5)).toBe(2);
  });

  test('positive and negative', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('both negative', () => {
    expect(add(-3, -5)).toBe(-8);
  });

  test('large numbers', () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });

  test('large negative numbers', () => {
    expect(add(-1000000, -2000000)).toBe(-3000000);
  });
});

describe('sub', () => {
  test('basic subtraction', () => {
    expect(sub(5, 3)).toBe(2);
  });

  test('zero minus positive', () => {
    expect(sub(0, 5)).toBe(-5);
  });

  test('positive minus zero', () => {
    expect(sub(5, 0)).toBe(5);
  });

  test('zero minus zero', () => {
    expect(sub(0, 0)).toBe(0);
  });

  test('negative minus positive', () => {
    expect(sub(-3, 5)).toBe(-8);
  });

  test('positive minus negative', () => {
    expect(sub(5, -3)).toBe(8);
  });

  test('negative minus negative', () => {
    expect(sub(-3, -5)).toBe(2);
  });
});

describe('mul', () => {
  test('positive numbers', () => {
    expect(mul(2, 3)).toBe(6);
  });

  test('zero times positive', () => {
    expect(mul(0, 5)).toBe(0);
  });

  test('positive times zero', () => {
    expect(mul(5, 0)).toBe(0);
  });

  test('zero times zero', () => {
    expect(mul(0, 0)).toBe(0);
  });

  test('negative times positive', () => {
    expect(mul(-3, 5)).toBe(-15);
  });

  test('positive times negative', () => {
    expect(mul(5, -3)).toBe(-15);
  });

  test('negative times negative', () => {
    expect(mul(-3, -5)).toBe(15);
  });

  test('large numbers', () => {
    expect(mul(1000, 2000)).toBe(2000000);
  });
});

describe('div', () => {
  test('basic division', () => {
    expect(div(6, 3)).toBe(2);
  });

  test('zero divided by positive', () => {
    expect(div(0, 5)).toBe(0);
  });

  test('positive divided by one', () => {
    expect(div(5, 1)).toBe(5);
  });

  test('negative divided by positive', () => {
    expect(div(-6, 3)).toBe(-2);
  });

  test('positive divided by negative', () => {
    expect(div(6, -3)).toBe(-2);
  });

  test('negative divided by negative', () => {
    expect(div(-6, -3)).toBe(2);
  });

  test('division by zero throws error', () => {
    expect(() => div(5, 0)).toThrow('division by zero');
  });
});

describe('isOdd', () => {
  test('basic odd number', () => {
    expect(isOdd(1)).toBe(true);
  });

  test('basic even number', () => {
    expect(isOdd(2)).toBe(false);
  });

  test('zero is even', () => {
    expect(isOdd(0)).toBe(false);
  });

  test('negative odd', () => {
    expect(isOdd(-1)).toBe(true);
  });

  test('negative even', () => {
    expect(isOdd(-2)).toBe(false);
  });

  test('large odd number', () => {
    expect(isOdd(999999)).toBe(true);
  });

  test('large even number', () => {
    expect(isOdd(1000000)).toBe(false);
  });

  test('large negative odd', () => {
    expect(isOdd(-999999)).toBe(true);
  });

  test('large negative even', () => {
    expect(isOdd(-1000000)).toBe(false);
  });
});

describe('isEven', () => {
  test('zero is even', () => {
    expect(isEven(0)).toBe(true);
  });

  test('basic odd number', () => {
    expect(isEven(1)).toBe(false);
  });

  test('basic even number', () => {
    expect(isEven(2)).toBe(true);
  });

  test('negative odd', () => {
    expect(isEven(-1)).toBe(false);
  });

  test('negative even', () => {
    expect(isEven(-2)).toBe(true);
  });

  test('large odd number', () => {
    expect(isEven(999999)).toBe(false);
  });

  test('large even number', () => {
    expect(isEven(1000000)).toBe(true);
  });

  test('large negative odd', () => {
    expect(isEven(-999999)).toBe(false);
  });

  test('large negative even', () => {
    expect(isEven(-1000000)).toBe(true);
  });
});

describe('edge cases', () => {
  test('Number.MAX_SAFE_INTEGER', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 0)).toBe(Number.MAX_SAFE_INTEGER);
  });

  test('Number.MIN_SAFE_INTEGER', () => {
    expect(sub(Number.MIN_SAFE_INTEGER, 0)).toBe(Number.MIN_SAFE_INTEGER);
  });

  test('NaN input for isOdd returns false', () => {
    expect(isOdd(NaN)).toBe(false);
  });

  test('NaN input for isEven returns false', () => {
    expect(isEven(NaN)).toBe(false);
  });

  test('Infinity input for isOdd returns false', () => {
    expect(isOdd(Infinity)).toBe(false);
  });

  test('Infinity input for isEven returns false', () => {
    expect(isEven(Infinity)).toBe(false);
  });
});
