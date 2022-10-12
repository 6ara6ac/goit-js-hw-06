const body = document.querySelector('body');
const button = document.querySelector ('.change-color')
const bodyColor = document.querySelector ('.color')
button.addEventListener ('click', ()=>getRandomHexColor());


function getRandomHexColor(event) {
  let newColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
  }`;

body.style.backgroundColor = newColor;
bodyColor.textContent = newColor;
console.log (newColor);
}








