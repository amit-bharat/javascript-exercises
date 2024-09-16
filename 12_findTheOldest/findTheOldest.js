const findTheOldest = function(people) {
    let oldest=1,name; let arr;
    for(val of people){
        if(val.yearOfDeath === undefined){
            val.yearOfDeath=new Date().getFullYear();
        }
        let age=val.yearOfDeath-val.yearOfBirth;
        if(age>oldest){
            oldest=age;
            name=val.name;
            arr=val;
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = findTheOldest;
