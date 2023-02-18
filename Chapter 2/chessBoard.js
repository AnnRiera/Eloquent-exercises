function chessBoard(size) {
    if (Number.isNaN(size)) {
        throw new Error('Size var must be a number');
    }

    let xColumn = '';

    for (let yAxis = 1; yAxis <= size; yAxis++) {
        for (let xAxis = 1; xAxis <= size; xAxis++) {
            if ((xAxis + yAxis) % 2 === 0) {
                xColumn += ' ';
            } else {
                xColumn += '#';
            }
        }
        xColumn += '\n';
    }
    console.log(xColumn);
}

chessBoard(8,8);