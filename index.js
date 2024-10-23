// Створити і відобразити заголовок з текстом "привіт, світ" червоного кольору

/*
const heading = document.createElement('h3');
heading.append('Привіт, світ');
heading.classList.add('red-text');
const root = document.querySelector('#root');
root.append(heading);
*/
// DOM - document object model

/*
React - фреймворк/бібліотека, яка полегшує розробку user interfaces (браузерної фронтової частини проєкту)
Фреймворк - програмна платформа, яка полегшує розробку і забезпечує компонентний підхід до розробки великиї проєктів
Бібліотека - набір функцій/програм, який призначений для вирішення певного набору задач
*/


/*
Таска: вилити з чашки 50мл чаю
ООП: 
Об'єкт чашка має метод "нахилити", в процесі якого виливається чай
Функціональне програмування:
функція нахилу приймає дані, пов'язані з чашкою в якості аргументів і здійснює виливання
Декларативне програмування:
чашка має бути нахилена і з неї вилились задані 50мл чаю
*/
/*
React - об'єкт-збірка функцій для роботи з фреймворком

React є точкою входу у бібліотеку React

React.createElement() - функція для створення реакт-елементів

ReactDOM - об'єкт, який реалізує VirtualDOM - об'єктне представлення сторінки, що віртуально існує в голові реакта і дозволяє оптимізувати зміну реальних DOM-елементів та уникнути потреби перерендерювати все нативне DOM-дерево

Процесс "узгодження" (согласование) (reconcilation). - процес порівняння віртуального дома реакту з нативним реальним DOM-деревом в браузері. Якщо під час цього процесу було виявлено необхідність змінити певний реальний об'єкт реакт перестворює тільки його (цей нативний об'єкт) уникаючи перестворення всіх елментів дерева

Реакт-елемент - легкий об'єкт, який представляє для реакта якийсь html-елемент
*/
const root = document.querySelector('#root');

const button = React.createElement('button', {}, 'X');

const liElement = React.createElement('li', {}, 'List item 1', button); // створюю реакт-елемент

const ul = React.createElement('ul', {}, liElement);

// створити точку входа для Реакт-дерева

const rootElementForReact = ReactDOM.createRoot(root);

rootElementForReact.render(ul);