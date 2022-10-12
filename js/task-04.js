

const incrementBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector("[data-action=decrement]");

const totalValue = document.querySelector('#value');
totalValue.value = 0;

incrementBtn.addEventListener ('click', ()=>{
    totalValue.value ++;
    totalValue.textContent = totalValue.value;
})

decrementBtn.addEventListener ('click', ()=>{
    totalValue.value --;
    totalValue.textContent = totalValue.value;
})






