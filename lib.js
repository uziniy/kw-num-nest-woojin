function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    let ch = true;

    for(let i = 2; i < num; i++) {
        if (num % i == 0) ch = false;
    }

    if (ch) return true;
    else return false;
}

function fact(num) {
    if (num > 15) return -1;
    else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

module.exports = {
    avg,
    prime,
    fact
}
