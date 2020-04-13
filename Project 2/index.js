var money;
var time;

//money = prompt("Ваш бюджет на месяц?", "Ваш бюджет");
money = 10000;
time = prompt("Введите дату в формате YYYY-MM-DD?", "YYYY-MM-DD");

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