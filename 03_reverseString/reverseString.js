const reverseString = function(word) {
    let str=word.split('').reverse().toString();
    let result='';
    for(let i=0;i<str.length;i++){
        if(i%2===0){
            result+=str.at(i);
        }
    }
    return result;

    //return word.split('').reverse().join(''); 
};

// Do not edit below this line
module.exports = reverseString;
