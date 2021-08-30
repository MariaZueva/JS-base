// Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.
a = Number(prompt("Введите значение от 1 до 15"));
if (a <= 15 && a > 0)
    switch (a) {
        case 1:
            document.write(1 + " ");
        case 2:
            document.write(2 + " ");
        case 3:
            document.write(3 + " ");
        case 4:
            document.write(4 + " ");
        case 5:
            document.write(5 + " ");
        case 6:
            document.write(6 + " ");
        case 7:
            document.write(7 + " ");
        case 8:
            document.write(8 + " ");
        case 9:
            document.write(9 + " ");
        case 10:
            document.write(10 + " ");
        case 11:
            document.write(11 + " ");
        case 12:
            document.write(12 + " ");
        case 13:
            document.write(13 + " ");
        case 14:
            document.write(14 + " ");
        case 15:
            document.write(15);

    }