// func03.js

//! 기타 배열의 고급 메서드(고차함수)

//# 1. reduce()
// : 배열의 각 요소에 대해 함수를 적용하여 '단일 값을 생성'

//* 기본 형태(구조)
/*
? reduce 메서드의 인자값: 콜백함수, 초기값(initialValue)
배열명.reduce((accumulator, curruntValue, curruntIndex, array) => {
  
}, initialValue)
*/

//* reduce 콜백함수의 인자값
// 1. accumulator - 각각의 순회마다 축적되는 값
// >> 이전 작업물의 반환값 (이전 리듀서 호출의 반환값)
// : 첫 번째 호출에서는 initialValue값이 지정

// 2. currentValue - 현재 순환되는 요소

// 3. currentIndex - 현재 순환되는 요소의 인덱스 번호(선택)
// 4. array(선택)

// +) initialValue
// : 초기값, 생략 시 배열의 첫 번째 요소값(선택)

//! === reduce 예시 ===

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, value) => acc + value, 0);
console.log(sum);
// acc += value
// acc = acc + value

//? cf) 배열의 고차함수(콜백함수) 사용 시 (forEach제외)
// 중괄호 사용의 경우
// : 반드시 return문 작성

// 중괄호 미사용의 경우
// : 반드시 return키워드를 생략

//! === reduce 예시 2

let cars = ['audi', 'bmw', 'hyundai', 'kia'];

let combinedCar = cars.reduce((acc,car) => {
  return acc + ',' + car;
});

console.log(combinedCar); // audi,bmw,hyundai,kia
console.log(typeof combinedCar); // string

//# 2. sort() : 배열의 요소를 정렬(오름차순)
let numberArray = [3, 1, 5, 2, 7, 6];
console.log(numberArray.sort()); // [ 1, 2, 3, 5, 6, 7 ]

//# 3. reverse() : 배열의 요소를 정렬(내림차순)
console.log(numberArray.reverse()); // [ 7, 6, 5, 3, 2, 1 ]

//# 4. 배열의 요소를 검색 & 평가

// 1) indexOf,lastIndexOf
// : 특정 요소의 인덱스를 찾는 메서드

// 2) find,findIndex
// : 조건을 만족하는 요소나 해당 인덱스를 찾는 메서드
nums = [5, 4, 3, 6, 1];

let firstOverFive = nums.find(num => num > 5);
console.log(firstOverFive); // 6

let firstOverFiveIndex = nums.findIndex(num => num > 5);
console.log(firstOverFiveIndex) // 3