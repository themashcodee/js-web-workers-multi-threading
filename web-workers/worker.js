function sumOfNumbers() {
    let sum = 0
    for (let i = 0; i <= 5000000000; i++) {
        sum += i
    }
    return sum
}


self.addEventListener('message', (e) => {
    const data = e.data
    if (data === 'calculate_sum') {
        const sum = sumOfNumbers()
        postMessage(sum)
    }
})