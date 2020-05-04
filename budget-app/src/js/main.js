
let startBtn = document.getElementById('start'),
budget = document.querySelector('.budget-value'),
daybudget = document.querySelector('.daybudget-value'),
level = document.querySelector('.level-value'),
expenses = document.querySelectorAll('.expenses-value'),
optionalexpenses = document.querySelectorAll('.optionalexpenses-value'),
income = document.querySelector('.income-value'),
monthsavings = document.querySelector('.monthsavings-value'),
yearsavings = document.querySelector('.yearsavings-value'),
choose = document.querySelector('.choose-income'),
checkbox = document.querySelector('#savings'),
sum = document.querySelector('#sum'),
percent = document.querySelector('#percent'),
year = document.querySelector('.year-value'),
month = document.querySelector('.month-value'),
day = document.querySelector('.day-value');

let inputFields = document.getElementsByClassName('expenses-item');
inputFields[1].nodeValue = 1000;
//Получаем кнопки "рассчитать" и "утвердить"
let expensesBtn = document.getElementsByTagName('button');
let count = expensesBtn[2];
let confirmtBtn = expensesBtn[1];

console.log(startBtn);
console.log(budget);
console.log(daybudget);
console.log(level);
console.log(expenses);
console.log(optionalexpenses);
console.log(income);
console.log(monthsavings);
console.log(checkbox);
console.log(sum);
console.log(percent);
console.log(yearsavings);
console.log(year);
console.log(month);
console.log(day);
console.log(choose);

console.log(count);

