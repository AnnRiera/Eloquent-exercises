
function deepEqual(first, second) {
    if (first === second) {
        return true;
    }

    if (first == null || typeof first != "object" || second == null || typeof second != "object") {
        return false;
    }

    let firstKeys = Object.keys(first);
    let secondKeys = Object.keys(second);

    if (firstKeys.length != secondKeys.length) return false;

    for (let firstKey of firstKeys) {
        if (!secondKeys.includes(firstKey) || !deepEqual(first[firstKey], second[firstKey])) {
            return false;
        }
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));