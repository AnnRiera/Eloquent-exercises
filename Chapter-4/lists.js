function arrayToList(arr) {
    let list = null;
    for (let index = arr.length - 1; index >= 0; index--) {
        list = {
            value: arr[index],
            list
        };
    }
    return list;
}

function listToArray(list) {
    const arr = [];
    for (let element = list; element; element = element.list) {
        arr.push(element.value);
    }
    return arr;
}

function prepend(element, list) {
    return { value: element, list };
}

function nth(list, number) {
    if (!list) {
        return undefined;
    }

    if (number === 0) {
        return list.value;
    }

    if (number > 0) {
        return nth(list.list, number - 1);
    }
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(0, arrayToList([1, 2, 3])));
console.log(nth(arrayToList([1, 2, 3]), 2))