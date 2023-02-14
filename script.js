'use strict';

// добавить ключ в localStorage
// localStorage.setItem("number", 5);

// получить ключ из localStorage и вывести его в консоль
// console.log(localStorage.getItem("number"));

// удалить ключ из localStorage - указываем только название ключа
// localStorage.removeItem("number");

// полностью очистить localStorage - без аргументов
// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'green';
} 

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'green';
    }
});