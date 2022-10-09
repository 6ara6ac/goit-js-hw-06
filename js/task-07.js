const inputEl = document.querySelector('#font-size-control');
inputEl.addEventListener ('input', onInputChange);

function onInputChange (event) {
text.style.fontSize = event.currentTarget.value + 'px';
}

