let numbers = [];
numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let sum = 0;

function calculateSum() {
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return alert(sum);
}

calculateSum();

