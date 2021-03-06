// Sieve of Eratosthenes - gives prime numbers between 2 to n

// Time Complexity  O(n*log(log(n)))
// Space Complexity O(n)

function sieve(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) arr[i - 2] = i;

    for (let i = 2; i * i <= n; i++) {
        // we stop if the square of i is greater than n
        if (arr[i - 2] != 0) {
            // if the number is marked then all it's factors are marked so we move to the next number
            for (let j = Math.pow(i, 2); j <= n; j++) {
                // we start checking from i^2 because all the previous factors of i would be already marked
                if (arr[j - 2] % i == 0) arr[j - 2] = 0;
            }
        }
    }
    return arr;
}
