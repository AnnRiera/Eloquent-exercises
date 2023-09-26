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

function addOldFashionWay(arr) {
    let value = 0;
    for (let number of arr) {
        value += number;
    }
    return value;
}

function addWithReduce(arr) {
    return arr.reduce((current, index) => current + index, 0);
}

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(range(1,10))
console.log(addOldFashionWay(arr))
console.log(rangeModified(5, 2, -1));
console.log(addWithReduce(arr))