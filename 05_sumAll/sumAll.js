const sumAll = function(num1,num2) {
    let sum=0;
    if(Number.isInteger(num1) && Number.isInteger(num2)&&(num1>0 &&num2>0) ){
        if(num1>num2){
            // let temp=num1;
            // num1=num2;
            // num2=temp;
            [num1,num2]=[num2,num1];
        }

        for(num1;num1<=num2;num1++){
            sum+=num1;
        }
        return sum;
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
