// 1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). 
// При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. 
// Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 
let content = document.getElementById('hometask');
let task1 = document.createElement('h2');
task1.innerText = 'Завдання 1';
content.appendChild(task1);

let text = document.createElement('span');
text.innerText = 'Очікую на ввід даних';
content.appendChild(text);

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyA' && (event.altKey || event.metaKey)) {
    text.style.display = 'none';
    let input = document.createElement('input');
    input.value = 'Очікую на ввід даних';
    content.appendChild(input);
  } else if (event.code == 'KeyS' && (event.shiftKey || event.metaKey)) {
    let input = document.querySelector('input');
    text.style.display = 'block';
    text.innerText = input.value;
    input.style.display = 'none';
  }
});

// 2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , 
// виводити лог ми векористовуємо мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.
let content2 = document.getElementById('task2');
let task2 = document.createElement('h2');
task2.innerText = 'Завдання 2';
content2.appendChild(task2);

window.addEventListener('resize', function(event) {
  let size = window.outerWidth;
  if (size <= 600) {
    let message = document.createElement('p');
    message.innerText = 'Ми використовуємо мобільну версію';
    content2.appendChild(message);
  } else if (size > 600) {
    let message1 = document.createElement('p');
    message1.innerText = 'Ми використовуємо десктоп версію';
    content2.appendChild(message1);
  }
});

// 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.
let content3 = document.getElementById('task3');
let task3 = document.createElement('h2');
task3.innerText = 'Завдання 3';
content3.appendChild(task3);

let oneMoreInput = document.createElement('input');
oneMoreInput.onchange = 'function(this.value)';
content3.appendChild(oneMoreInput);

document.addEventListener('change', function() {
  let newInput = document.createElement('p');
  newInput.innerText = oneMoreInput.value;
  content3.appendChild(newInput);
});

// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.
let content4 = document.getElementById('task4');
let task4 = document.createElement('h2');
task4.innerText = 'Завдання 4';
content4.appendChild(task4);

let modal = document.createElement('div');
modal.id = 'modalWindow'
modal.style.cssText = 'display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);';
content4.appendChild(modal);

let modalContent = document.createElement('div');
modalContent.style.cssText = 'background-color: #fefefe; margin: auto; padding: 50px; border: 1px solid #888; width: 80%;';
modal.appendChild(modalContent);

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyO' && (event.altKey || event.metaKey)) {
    let openModal = document.getElementById('modalWindow');
    openModal.style.display = 'block'
  } else if (event.code == 'KeyC' && (event.altKey || event.metaKey)) {
    let closeModal = document.getElementById('modalWindow');
    closeModal.style.display = 'none';
  }
});

// 5. Створити модальне відкно аналог Алерта але з гарним дизайном. 
// по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). 
// В модальному вікні має бути текст та кнопка закрити.
let content5 = document.getElementById('task5');
let task5 = document.createElement('h2');
task5.innerText = 'Завдання 5';
content5.appendChild(task5);

let button = document.createElement('button');
button.innerText = 'Тицьни мене!';
button.style.cssText = 'cursor: pointer; padding: 10px';
content5.appendChild(button);

let newModal = document.createElement('div');
newModal.style.cssText = 'display: none; position: fixed; z-index: 1; padding-top: 200px; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4);';
content5.appendChild(newModal);

let newModalContent = document.createElement('div');
newModalContent.style.cssText = 'margin: auto; text-align: center; background: violet; width: 300px; height: 400px; border: 5px solid gray; border-radius: 40px;';
newModal.appendChild(newModalContent);

let someText = document.createElement('p');
someText.style.cssText = 'font-family: Arial, sans-serif; font-size: 20px; font-weight: 600; color: white; padding-top: 100px'
someText.innerText = 'HOLA, AMIGOS!';
newModalContent.appendChild(someText);

let modalButton = document.createElement('button');
modalButton.innerText = 'Згорнути цю файну модалку';
modalButton.style.cssText = 'padding: 10px; background-color: gray; color: white; font-size: 16px; border-radius: 20px; margin-top: 150px;';
newModalContent.appendChild(modalButton);

button.addEventListener('click', function() {
  newModal.style.display = 'block';
});

modalButton.addEventListener('click', function() {
  newModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == newModal) {
    newModal.style.display = 'none';
  }
});
