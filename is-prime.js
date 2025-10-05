export const isPrime = (number) => {
  let cekPrime = [];
  
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number; i++) {
    cekPrime.push(number % i);
    }
  const isPrime = cekPrime.filter(cekPrime => cekPrime == 0).length == 1;
  if (isPrime) {
    return true;
  } else {
    return false;
  }
}

