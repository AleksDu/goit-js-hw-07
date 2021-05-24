const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', checkInputLength);

function checkInputLength() {
if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
        if (inputRef.classList.contains('invalid')) {
            inputRef.classList.remove('invalid');
        };

}   if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        inputRef.classList.add('invalid');
        if (inputRef.classList.contains('valid)')) {
            inputRef.classlist.remove('valid');
        };
    };
};