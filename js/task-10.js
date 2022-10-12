
const inputRefs = document.querySelector ('input');
const createDiv = document.querySelector ('[data-create]');
const destroyDiv = document.querySelector ('[data-destroy]');
const boxRefs = document.querySelector ('#boxes');

inputRefs.addEventListener ('input', onInputRefsValue);
createDiv.addEventListener ('click', onCreateBoxes);
destroyDiv.addEventListener ('click', onDestroyBoxes);


function onInputRefsValue (event){
return event.currentTarget.value;
}

function onCreateBoxes (total) {
  boxRefs.innerHTML = '';
  const boxesCreated = [];

  total = inputRefs.value;

  for (let i=0; i<total; i++ ) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.marginTop = '20px';
    boxesCreated.push(box);
  }
  boxRefs.append(...boxesCreated);
}

function onDestroyBoxes () {
  boxRefs.innerHTML = '';
  inputRefs.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}