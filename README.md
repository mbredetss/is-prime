# @is-prime.js

A simple JavaScript module to check if a number is prime.

## Installation

```bash
# If you're using this as a local module
npm install @is-prime.js
```

## Usage

### ES6 Import
```javascript
import { isPrime } from '@is-prime.js';
```

### CommonJS Require
```javascript
const { isPrime } = require('@is-prime.js');
```

## Function

### isPrime(number)

Checks whether the provided number is a prime number.

#### Parameters
- `number` (Number): The number to check for primality.

#### Returns
- `Boolean`: `true` if the number is prime, `false` otherwise.

## Examples

```javascript
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(4));   // false
console.log(isPrime(5));   // true
console.log(isPrime(11));  // true
console.log(isPrime(12));  // false
console.log(isPrime(17));  // true
console.log(isPrime(25));  // false
console.log(isPrime(29));  // true
console.log(isPrime(1));   // false
console.log(isPrime(0));   // false
console.log(isPrime(-5));  // false
```

## How it Works

The `isPrime` function determines if a number is prime by:
1. Returning `false` immediately if the number is less than or equal to 1
2. Calculating the remainder of the number divided by all integers from 2 to the number itself
3. Counting how many of those remainders equal 0
4. If exactly one remainder equals 0 (which would be when dividing by the number itself), the number is prime