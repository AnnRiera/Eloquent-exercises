function reverteArray(arr) {
    const newArray = [];
    for (let i = arr.length; i > 0; i--) {
        newArray.push(arr[i-1]);
    }
    return newArray;
}

console.log(reverteArray([2,4,6,8,10]));

function revertArrayInItsPlace(arr) {
    const newArray = [];
    for (let i = arr.length; i > 0; i--) {
        newArray.push(arr[i-1]);
        arr.pop();
    }
    
    for (let x = 0; x <= newArray.length - 1; x++) {
        arr.push(newArray[x]);
    }
    return arr;
}

console.log(revertArrayInItsPlace([2,4,6,8,10]));