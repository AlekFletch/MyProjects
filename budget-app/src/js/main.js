
let startBut = document.getElementById('start'),
budgetValue = document.querySelector('.budget-value'),
dayBudgetValue = document.querySelector('.daybudget-value'),
levelValue = document.querySelector('.level-value'),
expensesValue = document.querySelector('.expenses-value'),
optExpensesValue = document.querySelectorAll('.optionalexpenses-value'),
incomeValue = document.querySelector('.income-value'),
mothSavingsValue = document.querySelector('.monthsavings-value'),
yearSavingsValue = document.querySelector('.yearsavings-value');

let inputFields = document.getElementsByClassName('expenses-item');
inputFields[1].nodeValue = 1000;
//Получаем кнопки "рассчитать" и "утвердить"
let expensesBtn = document.getElementsByTagName('button');
let countBtn = expensesBtn[2];
let confirmtBtn = expensesBtn[1];


//mothSavingsValue.style.background = 'blue';

