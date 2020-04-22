let money, time;

/*function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();
*/


let appData = {
    budget: money,
    expenses: {},
    optionalExpences: {},
    exoptionalExpences: {},
    income: [],
    timeData: time,
    savings: true
};
alert("Игра началась!");
//Создаем функцию для определения необязательных расходов
function chooseOptExpenses() {
    for (let index = 1; index < 4; index++) {
        let a = prompt("Введите статью необязательных расходов в этом месяце", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
            appData.exoptionalExpences[index] = a;

        }
    }
}
chooseOptExpenses();

//appData.expenses.a1 = a2;
//appData.expenses.a3 = a4;

/*for (let i = 0; i < 2; i++) {
 let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
     b = prompt("Во сколько обойдется?",'');
if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
    appData.expenses[a] = b;
}   
}
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?",'');
if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
   appData.expenses[a] = b;  
}
i++;
}
*/
function chooseExpenses() {
    let i = 0;
    do {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            i++;
        } else {
            i = i - 1;
        }

    } while (i < 2);
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ваш бюджет на день составляет " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay <= 100) {

    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Укажите процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Ежемесячный доход с  ваших накоплений: " + appData.monthIncome)
    }
}
checkSavings();