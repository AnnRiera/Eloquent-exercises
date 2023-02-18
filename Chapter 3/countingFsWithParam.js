const countChars = function(string, choice) {
    const arrayOfString = string.split("");
    let count = 0;

    for (char of arrayOfString) {
        if (char === choice) {
            count ++;
        }
    }
    return count;
}