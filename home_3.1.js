let mas = [];
for (let i = 1; i <= 100; i++) {
    fl = false;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            fl = true;
            break;
        }
    }
    if (!fl) {
        mas.push(i);
    }
}
console.log(mas);