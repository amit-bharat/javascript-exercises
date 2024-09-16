const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {
  if(arr.length === 0)return 0;
  let sum=arr.reduce((total,current)=>total+current);
  return sum;
	
};

const multiply = function(args) {
  if(args.length === 0)return 0;
  let result=args.reduce((total,current)=>total*current);
  return result; 

};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(number) {
  if(number === 0)return 1;
  let total=1;
  for(let i=1;i<=number;i++){
    total*=i;
  }
  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
