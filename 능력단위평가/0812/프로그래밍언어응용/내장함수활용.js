const userInput = "Hello World";

function builtInFunc() {
  const string = userInput
  .trim()
  .split(' ')
  .reverse()
  .join('')
  .toUpperCase();
  console.log(string);
}

builtInFunc();