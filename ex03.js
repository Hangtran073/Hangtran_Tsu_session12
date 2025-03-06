function isPrime(n) {
    if (n < 2)
        console.log(" false");
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            console.log(" false");
    }
    console.log("true");
}
function getFirstNPrimes(n) {
    let primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.pust(num);
        }
        num++;
       
    }
} console.log("primes");


alert(getFirstNPrimes(5));


