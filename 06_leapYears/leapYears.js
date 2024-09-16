const leapYears = function(year) {
//my solution
    // if(year%100===0 && year%400===0){
    //     return true;
    // }
    // else if(year%100===0){
    //     return false;
    // }
    // else if(year%4===0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    //other way
    isYearDivisiableByFour=year%4===0;
    isYearDivisiableByFourHundred=year%400===0;
    isCentury=year%100===0;

    if(isYearDivisiableByFour && (!isCentury || isYearDivisiableByFourHundred)){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
