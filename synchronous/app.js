
const taskBtn = document.querySelector('.taskBtn.synchronous')
const result = document.querySelector('.result.synchronous')

function sumOfNumbers() {
    let sum = 0
    for (let i = 0; i <= 5000000000; i++) {
        sum += i
    }
    return sum
}

taskBtn.addEventListener('click', () => {
    console.log('Calculating...');
    result.textContent = sumOfNumbers()
    console.log('Done');
}, { once: true })