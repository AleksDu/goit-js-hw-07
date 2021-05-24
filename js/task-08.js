// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість 
// елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число.
// Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>

// <div id="boxes"></div>



const refs = {
    insertBoxEl: document.querySelector('[id="boxes"]'),
    inputAreaEl: document.querySelector('[id="controls"] input'),
    badTextAreaEL: document.querySelector('[id="bad-text"]'),
    createBtn: document.querySelector('[id="controls"] [data-action="render"]'),
    destroyBtn: document.querySelector('[id="controls"] [data-action="destroy"]'),
};

 const MIN_AMOUNT = Number(refs.inputAreaEl.min);
 const MAX_AMOUNT = Number(refs.inputAreaEl.max);

refs.destroyBtn.addEventListener('click', function () {
    refs.insertBoxEl.innerHTML = '';
    refs.inputAreaEl.value = '';
});

refs.inputAreaEl.addEventListener('input', function () {
    refs.createBtn.addEventListener('click', onCreateBtnClick);
});

function onCreateBtnClick (amount) {
    amount = refs.inputAreaEl.value;
    const divCollection = [];
    if (amount <= MAX_AMOUNT && amount > MIN_AMOUNT) {
        for (let i = 0; i < amount; i += 1) {
            const divEl = document.createElement('div');
            divEl.style.height = `${30 + (i * 10)}px`;
            divEl.style.width = `${30 + (i * 10)}px`;
            divEl.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2,8);
            divEl.style.borderColor = '#' + (Math.random().toString(16) + "000000").substring(2,8);
            divCollection.push(divEl);
        };
    } else {
        refs.badTextAreaEL.textContent = 'Пожалуйста, введите число от 0 до 100';
    };

    refs.insertBoxEl.append(...divCollection);
};