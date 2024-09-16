const fibonacci = function (number) {
    number = parseInt(number);
    if (number < 0) return "OOPS";
    if (number === 0) return 0;

    let prePreValue = 0, total = 0, preValue = 1;
    const arr = [];
    arr.push(preValue);
    for (let i = 1; i <= number; i++) {
        total = prePreValue + preValue;
        arr.push(total);
        prePreValue = preValue;
        preValue = total;
    }
    return arr[number-1];


    /*or better solution ****************************************
    let arr=[0,1];
    for(let i=2;i<=number;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
        return arr[number];
        */


};

// Do not edit below this line
module.exports = fibonacci;
