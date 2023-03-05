function getSmallestPrime(numbers) {

  for (let i = 0; i < numbers.length; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(numbers[i]); j++) {
      if (numbers[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && numbers[i] > 1) {
      return numbers[i];
    }
  }
  
  return 1;
}

function getSmallestPrimeDivisor(sum) {
 
  for (let i = 2; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0) {
     
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        return i;
      }
    }
  }
  
  return sum;
}

function spinNumbers(numbers, spins) {
 
  let n = numbers.length;
  spins = spins % n; 
  let result = [];
  for (let i = 0; i < n; i++) {
    let j = (i + n - spins) % n;
    result[j] = numbers[i];
  }
  return result;
}

function getPassword(numbers) {
  let sum = numbers.reduce((acc, val) => acc + val); 
  let smallestPrime = getSmallestPrime(numbers); 
  let mod = sum % smallestPrime;
  if (smallestPrime === 1 || mod === 0) {
   
    smallestPrime = getSmallestPrimeDivisor(sum);
  }
  let spins = smallestPrime % numbers.length; 
  return spinNumbers(numbers, spins); 
}

// Example usage:
let numbers = [90, 45, 37, 80, 1, 46];
let password = getPassword(numbers);
console.log(password.join(" ")); 
