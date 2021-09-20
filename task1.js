function getPrimeFactorsFor(num) {
    const primes = [];
    const result = [];
    for (let factor = 2; factor <= num; factor++) {
      while ((num % factor) === 0) {
                primes.push(factor);
                num /= factor;
      }
    }
   
    let dublicate;
    for (let i = 0; i< primes.length; i++){
        if(primes[i] !== dublicate){
            result.push(primes[i])
            dublicate=primes[i]
        }
    }
    return result
  }
  

  
  console.log(`has the primes:`, getPrimeFactorsFor(12));
  console.log(`has the primes:`, getPrimeFactorsFor(11));
  console.log(`has the primes:`, getPrimeFactorsFor(15));
