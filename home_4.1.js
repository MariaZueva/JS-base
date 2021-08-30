// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
// ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью console.log и вернуть пустой объект.
'use srict'

function f(ch) {
    if (ch >= 0 && ch < 1000) {
        let un = [];
        for (let i = 0; i < 3; i++) {
            un[i] = ch % 10;
            ch = Math.floor(ch / 10);
        }
        return { 'единицы': un[0], 'десятки': un[1], 'сотни': un[2] };
    }
    console.log('указаны некорректные входные данные');
    return {};
}

x = f(342);
console.log(x);