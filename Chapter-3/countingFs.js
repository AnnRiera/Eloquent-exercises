const countFs = function(string) {
    const arrayOfString = string.split("");
    const letter = 'F';
    let count = 0;

    for (char of arrayOfString) {
        if (char === letter) {
            count ++;
        }
    }
    return count;
}