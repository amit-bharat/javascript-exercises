const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const clearString=string.toLowerCase()
    .split("")
    .filter((char)=>alphanumerical.includes(char))
    .join("");
    let reverseString=clearString.split("").reverse().join("");

    return reverseString === clearString;

    // const arr=string.toLowerCase().split("");
    // let resultStr=arr.reverse().join("");
    // return resultStr.includes(string);
};

// Do not edit below this line
module.exports = palindromes;
