
function every(array, test) {
    const arr = [];
    for (let value of array) {
        if (test(value)) {
            arr.push(true);
        }
    }
    return arr.length == array.length;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));