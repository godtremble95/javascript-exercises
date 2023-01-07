const sumAll = function(intA, intB) {
    if (intA < 0 || intB < 0 || typeof intA !== 'number' || typeof intB !== 'number') return 'ERROR';
    let larger;
    let smaller;
    let sum = 0;
    if (intA > intB) {
        larger = intA;
        smaller = intB;
    }
    else if (intA <= intB) {
        larger = intB;
        smaller = intA;
    }
    while (smaller <= larger) {
        sum += smaller++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
