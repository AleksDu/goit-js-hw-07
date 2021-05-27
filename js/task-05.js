const refs = {
    input: document.querySelector('#name-input'),
    greeting: document.querySelector('#name-output'),
};

refs.input.addEventListener('input',function () {

    if (refs.input.value.trim() === '') {
        refs.greeting.textContent = 'незнайомець';
    } else {
        refs.greeting.textContent = refs.input.value.trim();
    };
});
