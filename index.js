console.log('JS');

let countNumber = 1;

const count = document.querySelector('.count');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.getElementById('reset');

count.innerHTML = countNumber;

increase.addEventListener('click', () => {
    countNumber = countNumber + 1;
    count.innerHTML = countNumber;

})

decrease.addEventListener('click', () => {
    if (countNumber > 0) {
        countNumber = countNumber - 1;
        count.innerHTML = countNumber;
    }
})

reset.addEventListener('click', () => {
    countNumber = 1;
    count.innerHTML = countNumber;
})

console.log(count);