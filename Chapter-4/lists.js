function arrayToList(arr) {
    let list = null;
    for (let index = arr.length - 1; index >= 0; index--) {
        list = {
            value: arr[index],
            list: list
        };
    }
    return list;
}

console.log(arrayToList([1, 2, 3]))