// let username = prompt('이름을 입력해주세요');
// let userage  = Number(prompt('나이를 입력해주세요'));

let username;
let userage;
// input창과 동일하게 prompt의 값은 문자열로 인식
// : 숫자에 대한 자료 활용을 위해 형변환이 필요
console.log('이름의 타입: ' , typeof username);
console.log('나이의 타입', typeof age);

// 데이터 타입: typeof 연산자를 통한 값은 소문자로 시작
// 형 변환 : 대문자로 시작하는 타입명()
// const Num1 = Number(prompt('첫번째 숫자를 입력해주세요'));
// const Num2 = Number(prompt('두번째 숫자를 입력해주세요'));

let Num1 = 0;
let Num2 = 0;
console.log(`두 수의 합은 ${Num1 + Num2}`);

//% === 연산자 예제 === %//
//! 문제 1
const PI = 3.14;
let radius = 10; // 원의 반지름
let area = radius * radius * PI; // 원의 넓이
// : 원의 넓잇값을 계산하여 출력
console.log(`원의 넓이 ${area}`);
//! 문제 2
// inch = 2.54cm
//: 단위 변환기 프로그램
// : inch값을 변수에 대입하면 cm값으로 변환하여 해당 값을 출력
const inch = 10;
let cm = inch * 2.54;

console.log(`${inch}의 값은 ${cm}cm 입니다`);

//! 문제 3
//: 사용자로부터 숫자값을 입력받아 해당 숫자가 짝수인지 홀수인지를 결정하여 콘솔에 출력
// 짝수일 경우 "짝수" 출력
// 홀수일 경우 "홀수" 출력

let number;
number = Number(prompt('숫자를 입력해주세요'));

let message = number % 2 === 0 ? '짝수' : '홀수';

console.log(message);

//! 문제 4
// 변수 total이 0으로 시작
// : 아래의 연산 후 total값을 콘솔에 입력

let total = 0;
total += 5;
total *= 3;
total -= 2;

console.log('최종결과' + total);
// 1) 5를 추가하세요
// 2) 결과값에 3을 곱하세요
// 3) 결과값에서 2를 뺴세요

//% === 조건문 예제 === //

//! 윤년 계산기 
let randomYear = 2024;
// 윤년의 조건
// - 연도가 4로 나누어 떨어지는 해는 윤년입니다
// - 그 중에서 100으로 나누어 떨어지는 해는 윤년이 아닙니다
// - 하지만 400으로 나누어 떨어지는 해는 윤년이 됩니다

// 윤년일 경우 : randomYear년은 윤년입니다.
// 윤년이 아닐 경우 : randomYear은 윤년이 아닙니다
let leapYear = (randomYear % 4 === 0 && randomYear % 100 !== 0) || (randomYear % 400 === 0);

if (leapYear) {
  console.log(`${randomYear}은 윤년입니다`);
} else {
  console.log(`${randomYear}은 윤년이 아닙니다`);
}

console.log(leapYear);






