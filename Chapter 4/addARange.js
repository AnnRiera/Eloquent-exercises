function range(init, end) {
    const arr = [];
    for (let i = init; i <= end; i ++) {
        arr.push(i);
    }
    return arr;
}

function rangeModified(init, end, step) {
    const arr = [];
    if (init < end) {
        for (let i = init; i <= end; i+=step) {
            arr.push(i);
        }
    } else {
        for (let i = init; i >= end; i+=step) {
            arr.push(i);
        }
    }
    return arr;
}

function add(arr) {
    let value = 0;
    for (let number of arr) {
        value += number;
    }
    return value;
}

console.log(range(1,10))
console.log(add([1,2,3,4,5,6,7,8,9,10]))
console.log(rangeModified(5, 2, -1));