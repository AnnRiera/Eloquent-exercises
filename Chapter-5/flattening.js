let arrays = [[1, 2, 3], [4, 5], [6]];
const concat = (previous, current) => previous.concat(current);

function flattening(array, concat) {
    return array.reduce(concat, []);
}

console.log(flattening(arrays, concat));