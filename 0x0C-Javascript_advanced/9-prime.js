let countPrimeNumbers = _ => {
    let nums = 0

    for (let i = 2; i <= 100; i++) {
        let prime = true

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false
            }
        }

        if (prime) {
            nums += 1
        }
    }
    return nums
}

let now = performance.now()
countPrimeNumbers()
let finish = performance.now()

console.log(`Execution time of printing countPrimeNumbers was ${finish - now} milliseconds.`)