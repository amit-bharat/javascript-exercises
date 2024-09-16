const convertToCelsius = function(celsius) {
  //formula is : c=(f-32)*5/9
  let temp=(celsius-32)*5/9 ;
  return Math.round(temp*10)/10;
};

const convertToFahrenheit = function(fahrenheit) {
  // formula is : f=(c*9/5)+32
  let temp=(fahrenheit*9/5)+32;
  return Math.round(temp*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
