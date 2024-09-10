let numFirst = Number(prompt('Please enter the first number'));
let numSecond = Number(prompt('Please enter the second number'));
let numThird = Number(prompt('Please enter the third number'));

if(isNaN(numFirst && numSecond && numThird)) {
  console.log('Please enter a number');
}else {
  console.log(numFirst + numSecond + numThird);
  console.log((numFirst + numSecond + numThird) / 3);
  console.log(Math.max(numFirst + numSecond + numThird));
}

