let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpences: {},
    income: [],
    timeData: time,
    savings: false
};

//appData.expenses.a1 = a2;
//appData.expenses.a3 = a4;

for (let i = 0; i < 2; i++) {
 let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
     b = prompt("Во сколько обойдется?",'');
if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
    appData.expenses[a] = b;
}   
}


alert(appData.budget / 30);