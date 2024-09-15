const removeFromArray = function (arr, ...items) {
    if (arr.length === 0 || items.length === 0) return arr;
    items.map((value) => {
        for (let i = 0; i < arr.length; i++) {
            if (value === arr[i]) {
                arr.splice(i, 1);
                i--;
            }
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
