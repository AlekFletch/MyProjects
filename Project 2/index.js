var money;
var time;

money = prompt("Ваш бюджет на месяц?", "Ваш бюджет");
//money = 10000;
time = prompt("Введите дату в формате YYYY-MM-DD?", "2020-10-25");

/*var i = 0;
while (i < 10) {
    console.log("Выводим элемент " + i);
    i++;
}
console.log("Final countdown:");
for (var num = 100; num > 0 ; num--) {
console.log(num);
}*/

var expenses = new Object(money, time);
expenses = {
    money: time
};

var appData = new Object(money, time, expenses);
appData = {
    money: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: "",
    income: [],
    savings: false
};
console.log(appData.money);
// Вычисляем среднедневной бюджет, исходя из заданного периода
// Определяем текущую дату
var d = new Date();
var dayNow = d.getDate();
var monthNow = d.getMonth() + 1;
var yearNow = d.getFullYear();
//Получаем месяц и год бюджета
monthAfter = parseInt(time.substr(5, 2));
yearAfter = parseInt(time.substr(0, 4));
difMonth = monthAfter - monthNow;
if (yearAfter != yearNow) {
    difMonth = difMonth + 12 * (yearAfter - yearNow);
}
budgetMonth = money/difMonth;
alert("Ежемесячный бюджет на " + difMonth + " месяцев  = " + Math.round(budgetMonth));