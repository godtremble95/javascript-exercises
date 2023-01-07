const removeFromArray = function(arr, ...removeArgs) {
    const returnArr = [];
    for (toRemove of removeArgs) {
        if (arr.includes(toRemove)) {
            arr.splice(arr.indexOf(toRemove), 1);
        };
    };
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
