let money, 
		income = "Фриланс",
		addExpenses,
		deposit = true,
		mission = 333333,
		period;


	do{
		money = prompt("Ваш месячный доход?");
		console.log(money);
	} while (isNaN(money) || money == "" || money == null);
 
let	a;

let expensesMonth = function(){
	let sum = 0;
	for(let i = 0; i < 2; i++){
		a = prompt("Какие обязательные ежемесячные расходы у вас есть?");
		sum += +prompt("Во сколько это обойдется?");
	}
	return sum;
}

let expensesAmount = expensesMonth();

let getExpensesMonth = function (){
	while (isNaN(expensesAmount) || expensesAmount == "" || expensesAmount == null){
		for(let j = 0; j < 2; j++){
		expensesAmount = +prompt("Во сколько это обойдется?");
		}
	};
	return("Сумма всех расходов за месяц: " + (expensesAmount));
};

console.log(getExpensesMonth());

var accumulatedMonth = function getAccumulatedMonth(){
	return("Накопления за месяц: " + ((+money) - (expensesAmount)));
};

console.log(accumulatedMonth());

let getTargetMonth = function(){
	let accumulatedMonth2 = (+money) - (expensesAmount);
	if (accumulatedMonth2 >= 0){
		console.log("Цель будет достигнута");
	} else {
		console.log("Цель не будет достигнута");
	}
	return("За какой период будет достигнута цель: " + (Math.round(mission / (+accumulatedMonth2))) + " месяцев");

};

console.log(getTargetMonth());

let showTypeof = function(item){
	console.log(item, typeof item);
}
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let budgetMonth = (+money) - expensesAmount;
let budgetDay = (Math.floor(budgetMonth/30));

function getStatusIncome(){
	if (budgetDay >= 800) {
		return("Высокий уровень дохода");
	} else if (budgetDay > 300 && budgetDay < 800 ) {
		return("Средний уровень дохода");
	} else if (budgetDay >= 0 && budgetDay <= 300) {
		return("Низкий уровень дохода"); 
	} else if (budgetDay < 0){
		return("Что-то пошло не так")
	}
}

console.log(getStatusIncome());