let units = [];
let tens1 = [];
let tens = [];

units[0] = 'zero';
units[1] = 'one';
units[2] = 'two';
units[3] = 'three';
units[4] = 'four';
units[5] = 'five';
units[6] = 'six';
units[7] = 'seven';
units[8] = 'eight';
units[9] = 'nine';

tens1[0] = 'ten';
tens1[1] = 'eleven';
tens1[2] = 'twelve';
tens1[3] = 'thirteen';
tens1[4] = 'fourteen';
tens1[5] = 'fifteen';
tens1[6] = 'sixteen';
tens1[7] = 'seventeen';
tens1[8] = 'eighteen';
tens1[9] = 'nineteen';

tens[2] = 'twenty';
tens[3] = 'thirty';
tens[4] = 'forty';
tens[5] = 'fifty';
tens[6] = 'sixty';
tens[7] = 'seventy';
tens[8] = 'eighty';
tens[9] = 'ninety';


module.exports = function toReadable(number) {
  number = number.toString();

  if (number.length === 1) {
    return `${units[number]}`;
  }
  
  else if (number.length === 2 && number[0] === '1' && number[1] === '0') {
    return `${tens1[number[1]]}`;
  }
  else if (number.length === 2 && number[0] === '1' && number[1] !== '0') {   
    return `${tens1[number[1]]}`;
  }
  else if (number.length === 2 && Number(number[0]) > 1 && number[1] === '0') {
    return `${tens[number[0]]}`;
  }
  else if (number.length === 2 && Number(number[0]) > 1 && Number(number[1]) > 0) {
    return `${tens[number[0]]} ${units[number[1]]}`;
  }
  
  else if (number.length === 3 && number[1] === '0' && number[2] === '0') {
    return `${units[number[0]]} hundred`;
  }
  else if (number.length === 3 && number[1] === '0' && number[2] !== '0') {
    return `${units[number[0]]} hundred ${units[number[2]]}`;
  }
  else if (number.length === 3 && number[1] === '1' && Number(number[2]) >= 0) {
    return `${units[number[0]]} hundred ${tens1[number[2]]}`;
  }
  else if (number.length === 3 && Number(number[1]) > 1 && number[2] === '0') {
    return `${units[number[0]]} hundred ${tens[number[1]]}`;
  }
  else if (number.length === 3 && Number(number[1]) > 1 && number[2] !== '0') {
    return `${units[number[0]]} hundred ${tens[number[1]]} ${units[number[2]]}`;
  }
    
  else {
    return 'Write a number from 0 to 999';
  }
}
