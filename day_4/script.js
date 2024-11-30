// console.log(40 > 5 || 50 < 10);   // && - логическое И,  || - логичесеой ИЛИ  
        
// let age = 22;
// console.log(age); 

let head1 = document.querySelector('#head-1');// получаем элемент по селектору
let pressBtn = document.querySelector('#press-btn');

//console.log(head1, pressBtn);

/*
head1.style.color = 'red'; // меняет цвет на красный
head1.classList.add('head');// добавляем элементу класс head
head1.textContent = 'Hello, winter!!!!';// меняем текст заголовка
*/

// при нажатии на кнопку меняем текст заголовка
pressBtn.addEventListener('click', function(){
    // console.log('hello');
    // console.log(Math.random());
    head1.style.color = 'red'; // меняет цвет на красный
    head1.classList.add('head');// добавляем элементу класс head
    head1.textContent = 'Hello, winter!!!!';// меняем текст заголовка

    pressBtn.textContent = 'Кнопка нажата';
    pressBtn.style.fontSize = '30px';
    pressBtn.style.display = 'none';
});
