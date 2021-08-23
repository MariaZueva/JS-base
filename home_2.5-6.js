// Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
// В зависимости от переданного значения выполнить одну из арифметических операций 
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return diff(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        case "/":
            return div(arg1, arg2);
    }
}

let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
let z = prompt("Введите знак операции");

document.write(mathOperation(a, b, z))