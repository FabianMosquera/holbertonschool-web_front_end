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


setTimeout( _ => {
    for (let time = 0; time < 100; time++) {
        countPrimeNumbers()
    }
})

let finish = performance.now()

console.log(`Execution time of calculating prime numbers 100 times was ${finish - now} milliseconds.`)