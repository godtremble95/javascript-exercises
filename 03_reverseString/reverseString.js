const reverseString = function(string) {
    const reverse = [];
    for (i = 0; i < string.length; i++) {
        reverse.unshift(string[i]);
    }
    return reverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
