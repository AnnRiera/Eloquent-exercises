function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`value: ${i} --- FizzBuzz`);
        } else if (i % 3 == 0) {
            console.log(`value: ${i} --- Fizz`);
        } else if (i % 5 === 0) {
            console.log(`value: ${i} --- Buzz`);
        }
    }
}

fizzBuzz();