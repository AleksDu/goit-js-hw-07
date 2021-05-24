const refs = {
    input: document.querySelector('#name-input'),
    greeting: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
refs.greeting.textContent = event.currentTarget.value;
};