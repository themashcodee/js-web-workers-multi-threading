
const taskBtn = document.querySelector('.taskBtn.web-worker')
const result = document.querySelector('.result.web-worker')
const worker = new Worker('worker.js')


taskBtn.addEventListener('click', () => {
    taskBtn.innerHTML = 'Calculating...'
    worker.postMessage('calculate_sum')
}, { once: true })

worker.addEventListener('message', (e) => {
    const data = e.data
    result.textContent = data
    taskBtn.innerHTML = 'Calculated'
})